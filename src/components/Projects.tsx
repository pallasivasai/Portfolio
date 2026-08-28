
import React from 'react';
import { Github, Code } from 'lucide-react';
import saiGptIcon from '@/assets/sai-gpt-icon.png';
import saiEncryptionIcon from '@/assets/sai-encryption-icon.png';
import sSecretChatIcon from '@/assets/s-secret-chat-icon.png';

const Projects = () => {

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing my technical expertise through real-world applications
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden hover:border-transparent"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Project Header with Icon */}
                <div className={`bg-gradient-to-r ${project.color} p-8 text-center relative overflow-hidden`}>
                  {/* Animated floating particles */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
                        style={{
                          left: `${15 + i * 15}%`,
                          top: `${20 + (i % 3) * 25}%`,
                          animationDelay: `${i * 0.5}s`,
                          animationDuration: `${3 + i * 0.5}s`
                        }}
                      />
                    ))}
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={`star-${i}`}
                        className="absolute w-1 h-1 bg-white/50 rounded-full animate-twinkle"
                        style={{
                          left: `${10 + i * 25}%`,
                          top: `${30 + (i % 2) * 40}%`,
                          animationDelay: `${i * 0.3}s`
                        }}
                      />
                    ))}
                    {/* Floating rings */}
                    <div className="absolute w-16 h-16 border border-white/20 rounded-full animate-pulse-slow" style={{ top: '10%', right: '10%' }} />
                    <div className="absolute w-8 h-8 border border-white/15 rounded-full animate-pulse-slow" style={{ bottom: '20%', left: '15%', animationDelay: '1s' }} />
                  </div>
                  
                  {/* Animated background overlay */}
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-500" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 via-transparent to-transparent" />
                  </div>
                  
                  <div className="text-6xl mb-4 relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                    {project.isImage ? (
                      <img 
                        src={project.icon} 
                        alt={project.title} 
                        className="w-20 h-20 mx-auto rounded-full object-cover ring-4 ring-white/30 group-hover:ring-white/60 transition-all duration-500 group-hover:shadow-xl" 
                      />
                    ) : (
                      <span className="drop-shadow-lg">{project.icon}</span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-white relative z-10 group-hover:tracking-wide transition-all duration-300">
                    {project.title}
                  </h3>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gradient-to-r hover:from-orange-500 hover:to-purple-600 hover:text-white transition-all duration-300 cursor-default transform hover:scale-105"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-900 hover:shadow-lg hover:shadow-gray-800/25 transition-all duration-300 transform hover:scale-105 active:scale-95"
                    >
                      <Github size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                      Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 border-2 border-gray-800 text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-gradient-to-r hover:from-orange-500 hover:to-purple-600 hover:text-white hover:border-transparent hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
                      >
                        <Code size={18} />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* View More Projects Link */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/pallasivasai?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              <Github size={24} />
              View More Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
