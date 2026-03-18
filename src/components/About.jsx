import React from 'react';
import { Award, Code, BookOpen } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'React.js', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'JavaScript', level: 90 },
    { name: 'TailwindCSS', level: 85 },
    { name: 'MongoDB', level: 80 },
    { name: 'TypeScript', level: 75 },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-padding mx-auto">
        <h2 className="section-title">À propos de moi</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-slide-up">
            <p className="text-lg text-gray-700 mb-6">
              Développeur passionné avec 1 an d'expérience dans la création d'applications web modernes. 
              Je me spécialise dans la création d'expériences utilisateur intuitives et performantes.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Code className="text-blue-600 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-lg">Développement Full Stack</h3>
                  <p className="text-gray-600">Developpement d'une application de gestion de mutuelle</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Award className="text-blue-600 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-lg">Certifications</h3>
                  <p className="text-gray-600">Plusieurs certifications dans les domaines du développement web et de la gestion de bases de données</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <BookOpen className="text-blue-600 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-lg">Formation continue</h3>
                  <p className="text-gray-600">Veille technologique constante et participation à des conférences</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold mb-6">Compétences techniques</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                         style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;