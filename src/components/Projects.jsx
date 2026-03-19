import React from 'react';
import { Github, ExternalLink, Code, Star, GitFork, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Application de Gestion de Mutuelle',
      description: 'Gestion de mutuelle pour les employés d\'une entreprise, avec des fonctionnalités de gestion des adhérents, des cotisations et des remboursements.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500',
      technologies: ['Spring Boot', 'Java', 'React.js', 'Keycloak', 'Docker', 'PostgreSQL'],
      github: 'https://github.com/SoumailaBahngobi/backend_mutuelle',
      githubFront: 'https://github.com/SoumailaBahngobi/frontend_mutuelle',
      demo: 'https://demo.com',
      stats: { stars: 12, forks: 4, views: 230 }
    },
    {
      title: 'Application de création de tickets de support',
      description: 'Application de création de tickets de support pour une entreprise, permettant aux employés de signaler des problèmes techniques et de suivre leur résolution.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500',
      technologies: ['Laravel', 'TailwindCSS', 'PostgreSQL'],
      github: 'https://github.com/SoumailaBahngobi/incident-reporting',
      demo: 'https://demo.com',
      stats: { stars: 8, forks: 2, views: 150 }
    },
    {
      title: 'Application de vente de produits vivriers',
      description: 'Application de vente de produits vivriers pour une entreprise, permettant aux clients de commander en ligne et de suivre leur commande.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500',
      technologies: ['React.js', 'Lucide-react', 'TailwindCSS', 'Spring Boot', 'PostgreSQL'],
      github: 'https://github.com/SoumailaBahngobi/agro_market-backend',
      githubFront: 'https://github.com/SoumailaBahngobi/agro_market-frontend',
      demo: 'https://demo.com',
      stats: { stars: 15, forks: 5, views: 310 }
    },
    {
      title: 'Application de gestion de boutique',
      description: 'Application de gestion de boutique pour une entreprise, permettant aux employés de gérer les produits, les commandes et les clients.',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=500',
      technologies: ['Bootstrap', 'Laravel', 'MySQL'],
      github: 'https://github.com/SoumailaBahngobi/boutique',
      demo: 'https://demo.com',
      stats: { stars: 6, forks: 1, views: 95 }
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Image d'arrière-plan */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        {/* Overlay sombre pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/85 to-gray-900/90"></div>
      </div>

      {/* Contenu */}
      <div className="container-padding mx-auto relative z-10">
        <h2 className="section-title text-white mb-4">Mes Projets</h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Découvrez une sélection de mes réalisations professionnelles et personnelles
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} 
                 className="group bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                 style={{ animationDelay: `${index * 0.1}s` }}>
              
              {/* Image du projet avec overlay au hover */}
              <div className="relative h-48 overflow-hidden">
                <img src={project.image} alt={project.title} 
                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Badges stats sur l'image */}
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-black/70 text-white px-2 py-1 rounded-lg text-xs flex items-center backdrop-blur-sm">
                    <Star size={12} className="mr-1 fill-yellow-400 stroke-yellow-400" />
                    {project.stats.stars}
                  </span>
                  <span className="bg-black/70 text-white px-2 py-1 rounded-lg text-xs flex items-center backdrop-blur-sm">
                    <GitFork size={12} className="mr-1" />
                    {project.stats.forks}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} 
                          className="px-2 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium border border-blue-100">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Liens des projets */}
                <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-gray-100">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                       className="flex items-center space-x-1 text-sm text-gray-600 hover:text-blue-600 transition-colors group/link">
                      <Github size={18} className="group-hover/link:scale-110 transition-transform" />
                      <span>Backend</span>
                    </a>
                  )}
                  {project.githubFront && (
                    <a href={project.githubFront} target="_blank" rel="noopener noreferrer"
                       className="flex items-center space-x-1 text-sm text-gray-600 hover:text-blue-600 transition-colors group/link">
                      <Code size={18} className="group-hover/link:scale-110 transition-transform" />
                      <span>Frontend</span>
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                       className="flex items-center space-x-1 text-sm text-gray-600 hover:text-blue-600 transition-colors ml-auto group/link">
                      <span>Démo</span>
                      <ExternalLink size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lien vers GitHub */}
        <div className="text-center mt-12">
          <a href="https://github.com/SoumailaBahngobi" 
             target="_blank" 
             rel="noopener noreferrer"
             className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl transition-all duration-300 group">
            <Github size={24} className="group-hover:scale-110 transition-transform" />
            <span className="font-semibold">Voir tous mes projets sur GitHub</span>
            <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;