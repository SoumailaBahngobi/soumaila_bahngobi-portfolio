import React from 'react';
import { 
  Award, Code, Briefcase, GraduationCap, 
  Calendar, MapPin, ExternalLink, Cpu,
  Database, Globe, Smartphone, Terminal,
  BookOpen, CheckCircle, Mail, Linkedin, FileText
} from 'lucide-react';

const About = () => {
  // Compétences techniques organisées par catégorie
  const skillCategories = [
    {
      icon: <Cpu className="text-blue-600" size={20} />,
      title: "Backend",
      skills: ["Spring Boot", "Laravel","java", "Node.js", "C", "PHP"]
    },
    {
      icon: <Globe className="text-blue-600" size={20} />,
      title: "Frontend",
      skills: ["React.js", "Angular 19", "JavaScript", "TypeScript", "HTML/CSS"]
    },
    {
      icon: <Smartphone className="text-blue-600" size={20} />,
      title: "Mobile",
      skills: ["Flutter"]
    },
    {
      icon: <Database className="text-blue-600" size={20} />,
      title: "Bases de données",
      skills: ["SQL", "MongoDB", "MySQL"]
    },
    {
      icon: <Terminal className="text-blue-600" size={20} />,
      title: "Outils & Méthodes",
      skills: ["GitHub", "Linux", "TDD", "Canva", "WordPress"]
    },
    {
      icon: <Award className="text-blue-600" size={20} />,
      title: "Data & Analyse",
      skills: ["Excel avancé", "Analyse de données"]
    }
  ];

  // Expériences professionnelles
  const experiences = [
    {
      title: "Développeur Full Stack",
      company: "Webb Fontaine Bénin",
      period: "2026 (en cours)",
      type: "Stage",
      description: "Développement d'applications web avec les technologies modernes"
    },
    {
      title: "Développeur Full Stack",
      company: "Webb Fontaine Bénin",
      period: "3 mois",
      type: "Stage",
      description: "Intégration et développement de fonctionnalités"
    },
    {
      title: "Développeur",
      company: "Twoftech",
      period: "1 mois",
      type: "Stage",
      description: "Développement et maintenance d'applications"
    },
    {
      title: "Développeur",
      company: "Direction Informatique de la DGB",
      period: "3 mois",
      type: "Stage",
      description: "Contribution aux projets informatiques de la direction"
    },
    {
      title: "Développeur",
      company: "Cour Constitutionnelle du Bénin",
      period: "2 mois",
      type: "Stage",
      description: "Support et développement d'outils internes"
    },
    {
      title: "Développeur",
      company: "Société des Aéroports du Bénin (SAB)",
      period: "1 mois",
      type: "Stage",
      description: "Initiation aux environnements professionnels"
    }
  ];

  // Formation académique
  const formations = [
    {
      degree: "Master 1 en Architecture de logiciels",
      school: "ESGIS Cotonou",
      period: "2025-2026",
      status: "En cours"
    },
    {
      degree: "Licence en Architecture des logiciels",
      school: "ESGIS Cotonou",
      period: "2022-2025",
      status: "Diplômé"
    },
    {
      degree: "Initiation en programmation C",
      school: "Epitech Cotonou",
      period: "2021-2022"
    },
    {
      degree: "Baccalauréat série D",
      school: "CEG 3 Bohicon",
      period: "2020"
    }
  ];

  // Certifications avec codes corrects basés sur les fichiers
  const certifications = [
    // Microsoft/Coursera
    {
      name: "Preparing Data for Analysis with Microsoft Excel",
      issuer: "Microsoft / Coursera",
      date: "8 Janvier 2026",
      code: "NTCS3OP64DCX",
      instructor: "Marni Baker-Stein",
      link: "https://coursera.org/verify/NTCS3OP64DCX",
      verifyLink: true
    },
    // Humentum/DisasterReady
    {
      name: "Gestion financière pour les professionnels du développement et de l'humanitaire (Finance DPro)",
      issuer: "Humentum / DisasterReady",
      date: "11 Février 2026",
      duration: "12 heures",
      instructor: "Tina Bolding",
      organization: "Cornerstone OnDemand Foundation"
    },
    // OpenClassrooms - Implémentez vos bases de données relationnelles avec SQL
    {
      name: "Implémentez vos bases de données relationnelles avec SQL",
      issuer: "OpenClassrooms",
      date: "29 septembre 2024",
      code: "Certificate # 8090387447",
      instructor: "Mathieu Nebra, Co-fondateur d'OpenClassrooms"
    },
    // OpenClassrooms - Apprenez à programmer en C
    {
      name: "Apprenez à programmer en C",
      issuer: "OpenClassrooms",
      date: "26 Mars 2023",
      code: "Certificate # 1532287813",
      instructor: "Mathieu Nebra, Co-fondateur d'OpenClassrooms"
    },
    // OpenClassrooms - Programmez en orienté objet en PHP
    {
      name: "Programmez en orienté objet en PHP",
      issuer: "OpenClassrooms",
      date: "03 Mai 2026",
      code: "Certificate # 3218265579",
      instructor: "Mathieu Nebra, Co-fondateur d'OpenClassrooms"
    },
    // OpenClassrooms - Apprenez les bases du langage Python
    {
      name: "Apprenez les bases du langage Python",
      issuer: "OpenClassrooms",
      date:"30 septembre 2024",
       code:"Certificate # 8247042059 ", 
      instructor: "Mathieu Nebra, Co-fondateur d'OpenClassrooms"
    },
    // OpenClassrooms - Apprenez à programmer en Java
    {
      name: "Apprenez à programmer en Java",
      issuer: "OpenClassrooms",
      date: "20 juillet 2025",
      code: "Certificate # 6835532540",
      instructor: "Mathieu Nebra, Co-fondateur d'OpenClassrooms"
    },
    // OpenClassrooms - Apprenez à programmer avec JavaScript
    {
      name: "Apprenez à programmer avec JavaScript",
      issuer: "OpenClassrooms",
      date: "08 octobre 2024",
      code: "Certificate # 6248044663",
      instructor: "Mathieu Nebra, Co-fondateur d'OpenClassrooms"
    },
    // OpenClassrooms - Learn Programming With JavaScript
    {
      name: "Learn Programming With JavaScript",
      issuer: "OpenClassrooms",
      date: "15 Mars 2026",
      code: "Certificate # 8026292346",
      instructor: "Mathieu Nebra, Co-fondateur d'OpenClassrooms"
    },
    // OpenClassrooms - Create a Web Application With React.js
    {
      name: "Create a Web Application With React.js",
      issuer: "OpenClassrooms",
      date: "06 octobre 2024",
      code: "Certificate # 7957490233",
      instructor: "Mathieu Nebra, Co-fondateur d'OpenClassrooms"
    },
    // Codecademy - Learn the Command Line in Terminal
    {
      name: "Learn the Command Line in Terminal",
      issuer: "Codecademy",
      date: "17 Octobre 2024",
      code: "Certificate # 9987315878",
      instructor: "Emily Reese, Course author"
    },
    // Codecademy - Build Your First Web Pages With HTML and CSS
    {
      name: "Build Your First Web Pages With HTML and CSS",
      issuer: "Codecademy",
      date: "6 octobre 2024",
      code: "Certificate # 4950646481",  
      instructor: "Emily Reese, Course author"
    }
  ];

  // Centres d'intérêt
  const interests = [
    "MMA", "Athlétisme", "Méditation", 
    "Voyage", "Lecture", "Développement personnel", "Radio",
     "Technologie", "Informatique", "Débats","Biker", "religions", "philosophie"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-padding mx-auto max-w-6xl">
        
        {/* Header avec titre */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            SOUMALLA BAHNGOBI
          </h2>
          <p className="text-xl text-gray-600">
            Ingénieur en Architecture de Logiciel
          </p>
        </div>

        {/* Profil personnel */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 transform hover:scale-[1.02] transition-all">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Profil</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Développeur web fullstack passionné, spécialisé dans les frameworks modernes 
                (Spring Boot, Laravel, React.js) et les technologies d'intégration. 
                Je mets mon expertise au service de missions challenges et je m'engage à 
                trouver des solutions innovantes aux problèmes techniques.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  🇫🇷 Français (moyen)
                </span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  🇬🇧 Anglais (moyen)
                </span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                  📍 Cotonou, Bénin
                </span>
              </div>
            </div>
            <div className="lg:w-72 space-y-4">
              <div className="bg-gray-50 p-4 rounded-xl">
                <h4 className="font-semibold text-gray-700 mb-2">Contact</h4>
                <a href="mailto:ismailbahngobi@gmail.com" 
                   className="flex items-center text-gray-600 hover:text-blue-600 mb-2 transition">
                  <Mail size={16} className="mr-2" />
                  ismailbahngobi@gmail.com
                </a>
                <a href="https://linkedin.com/in/soumaila-bahngobi-idrissou-20678231b"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center text-gray-600 hover:text-blue-600 transition">
                  <Linkedin size={16} className="mr-2" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Compétences techniques */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <Code className="mr-3 text-blue-600" size={28} />
            Compétences techniques
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, idx) => (
              <div key={idx} 
                   className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all">
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h4 className="font-semibold text-lg ml-2">{category.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span key={i} 
                          className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-lg text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expériences professionnelles */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <Briefcase className="mr-3 text-blue-600" size={28} />
            Parcours professionnel
          </h3>
          <div className="relative">
            {/* Timeline verticale */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-20">
                  <div className="absolute left-6 w-5 h-5 bg-blue-600 rounded-full border-4 border-blue-100"></div>
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                    <div className="flex flex-wrap items-start justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-800">{exp.title}</h4>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
                    <p className="text-gray-600 text-sm mb-3">{exp.description}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={14} className="mr-1" />
                      {exp.period}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Formation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Parcours académique */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <GraduationCap className="mr-2 text-blue-600" size={24} />
              Formation
            </h3>
            <div className="space-y-4">
              {formations.map((form, index) => (
                <div key={index} className="border-b pb-4 last:border-0">
                  <h4 className="font-semibold text-gray-800">{form.degree}</h4>
                  <p className="text-blue-600 text-sm">{form.school}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm text-gray-500">{form.period}</span>
                    {form.status && (
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                        {form.status}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Award className="mr-2 text-blue-600" size={24} />
              Certifications
            </h3>
            <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
              {certifications.map((cert, index) => (
                <div key={index} 
                     className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition">
                  <CheckCircle size={16} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-800">{cert.name}</p>
                    <p className="text-xs text-gray-500">{cert.issuer}</p>
                    {cert.instructor && (
                      <p className="text-xs text-gray-400 mt-1">{cert.instructor}</p>
                    )}
                    {cert.organization && (
                      <p className="text-xs text-gray-400">{cert.organization}</p>
                    )}
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      {cert.code && (
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-mono">
                          #{cert.code}
                        </span>
                      )}
                      {cert.date && (
                        <span className="text-xs text-gray-400">{cert.date}</span>
                      )}
                      {cert.duration && (
                        <span className="text-xs text-gray-400">{cert.duration}</span>
                      )}
                      {cert.link && (
                        <a href={cert.link} 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="text-blue-600 hover:text-blue-800 ml-auto flex items-center gap-1">
                          <span className="text-xs">Vérifier</span>
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Attestation de Licence */}
        <div className="mb-8 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 shadow-md border border-blue-200">
          <div className="flex items-start">
            <FileText className="text-blue-600 mr-4 flex-shrink-0" size={24} />
            <div>
              <h4 className="font-semibold text-gray-800 mb-2"> Licence (Bac+3) </h4>
              <p className="text-gray-700">Licence Professionnelle Informatique, Réseaux et Télécommunication </p>
              <div className="flex flex-wrap items-center gap-4 mt-3">
                 <h1>Spécialité: <span className="text-sm text-gray-600">Système Informatique et Logicielle</span></h1>
                
                <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">
                  Année 2024-2025
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Centres d'intérêt et référence */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Loisirs */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
            <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
              <BookOpen className="mr-2 text-blue-600" size={20} />
              Centres d'intérêt
            </h4>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest, index) => (
                <span key={index} 
                      className="bg-white text-gray-700 px-3 py-1.5 rounded-full text-sm shadow-sm">
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Référence académique */}
          <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-600">
            <h4 className="font-semibold text-gray-800 mb-2">Référence académique</h4>
            <p className="text-gray-700 font-medium">Robert MIWONOUKO</p>
            <p className="text-sm text-gray-500">Directeur de l'Administration et des Finances</p>
            <p className="text-sm text-gray-500">Ecole Supérieure de Gestion d'Informatique et des Sciences (ESGIS) - Cotonou</p>
          </div>
        </div>

        {/* Note de bas de page */}
        <div className="mt-8 text-center text-xs text-gray-400">
          <p>Certificats OpenClassrooms et Codecademy délivrés par les instructeurs respectifs</p>
        </div>
      </div>
    </section>
  );
};

export default About;
