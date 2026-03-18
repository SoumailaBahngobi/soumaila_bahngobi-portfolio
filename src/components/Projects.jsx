import React from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Projet 1',
      description: 'Description détaillée du projet 1 avec les technologies utilisées et les fonctionnalités principales.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500',
      technologies: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Projet 2',
      description: 'Description détaillée du projet 2 avec les technologies utilisées et les fonctionnalités principales.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500',
      technologies: ['Vue.js', 'Express', 'PostgreSQL'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Projet 3',
      description: 'Description détaillée du projet 3 avec les technologies utilisées et les fonctionnalités principales.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500',
      technologies: ['React Native', 'Firebase', 'Redux'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container-padding mx-auto">
        <h2 className="section-title">Mes Projets</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} 
                 className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow animate-slide-up"
                 style={{ animationDelay: `${index * 0.1}s` }}>
              
              <img src={project.image} alt={project.title} 
                   className="w-full h-48 object-cover"/>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} 
                          className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                     className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer"
                     className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
                    <ExternalLink size={20} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;