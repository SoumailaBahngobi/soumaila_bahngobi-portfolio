import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container-padding mx-auto text-center">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Soumaila BAHN'GOBI IDRISSOU
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Développeur Full Stack | software engineer | passionné par la création de solutions innovantes
          </p>
          
          <div className="flex justify-center space-x-4 mb-12">
            <a href="https://github.com/SoumailaBahngobi" target="_blank" rel="noopener noreferrer" 
               className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/soumaila-bahngobi-idrissou-20678231b/" target="_blank" rel="noopener noreferrer"
               className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
              <Linkedin size={24} />
            </a>
            <a href="mailto:ismailbahngobi@gmail.com"
               className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
              <Mail size={24} />
            </a>
          </div>

          <a href="#about" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors">
            <span>En savoir plus</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
