# ------------------------------
# ÉTAPE 1: BUILD DE L'APPLICATION
# ------------------------------
FROM node:20-alpine AS build

# Métadonnées
LABEL maintainer="Soumaila BAH NGOBI"
LABEL description="Portfolio personnel avec React, Vite et TailwindCSS"
LABEL version="1.0.0"

# Arguments de build (optionnels)
ARG VITE_APP_NAME="Soumaila Portfolio"
ARG VITE_APP_VERSION="1.0.0"
ARG VITE_API_URL=""

# Définir les variables d'environnement pour le build
ENV VITE_APP_NAME=$VITE_APP_NAME
ENV VITE_APP_VERSION=$VITE_APP_VERSION
ENV VITE_API_URL=$VITE_API_URL
ENV NODE_ENV=production

# Créer le répertoire de travail
WORKDIR /app

# Copier les fichiers de dépendances (pour bénéficier du cache Docker)
COPY package*.json ./
COPY package-lock.json ./

# Installer toutes les dépendances (y compris les devDependencies pour le build)
RUN npm ci && npm cache clean --force

# Copier le reste des fichiers source
COPY . .

# Construire l'application pour la production
RUN npm run build && \
    echo "Build terminé avec succès" && \
    ls -la dist/

# ------------------------------
# ÉTAPE 2: SERVEUR NGINX
# ------------------------------
FROM nginx:stable-alpine AS production

# Créer un utilisateur non-root pour la sécurité
RUN addgroup -g 1001 -S appgroup && \
    adduser -u 1001 -S appuser -G appgroup

# Copier les fichiers buildés depuis l'étape précédente
COPY --from=build --chown=appuser:appgroup /app/dist /usr/share/nginx/html

# Configuration Nginx optimisée pour SPA (Single Page Application)
RUN echo 'server { \
    listen 80; \
    server_name localhost; \
    root /usr/share/nginx/html; \
    index index.html; \
    \
    # Compression gzip pour de meilleures performances \
    gzip on; \
    gzip_vary on; \
    gzip_min_length 1024; \
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json; \
    \
    # Sécurité headers \
    add_header X-Frame-Options "SAMEORIGIN" always; \
    add_header X-Content-Type-Options "nosniff" always; \
    add_header X-XSS-Protection "1; mode=block" always; \
    add_header Referrer-Policy "strict-origin-when-cross-origin" always; \
    \
    location / { \
        try_files $uri $uri/ /index.html; \
        expires 1h; \
        add_header Cache-Control "public, no-transform"; \
    } \
    \
    # Cache pour les assets statiques \
    location /assets { \
        expires 1y; \
        add_header Cache-Control "public, immutable"; \
        try_files $uri =404; \
    } \
    \
    # Bloquer l'accès aux fichiers sensibles \
    location ~ /\. { \
        deny all; \
        access_log off; \
        log_not_found off; \
    } \
    \
    # Page d'erreur personnalisée \
    error_page 404 /index.html; \
    error_page 500 502 503 504 /50x.html; \
    location = /50x.html { \
        root /usr/share/nginx/html; \
    } \
}' > /etc/nginx/conf.d/default.conf

# Créer les répertoires nécessaires avec les bonnes permissions
RUN mkdir -p /var/cache/nginx /var/run && \
    chown -R appuser:appgroup /var/cache/nginx /var/run && \
    chown -R appuser:appgroup /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

# Changer d'utilisateur pour plus de sécurité
USER appuser

# Exposer le port 80
EXPOSE 80

# Health check pour vérifier que le serveur fonctionne
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost:80/ || exit 1

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]