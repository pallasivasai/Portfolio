
import React from 'react';
import { Github, Code } from 'lucide-react';

const Projects = () => {
  const project = {
    title: "E-Learning Management System (E-LMS)",
    description: "A comprehensive full-stack application designed for managing and delivering e-learning content with modern web technologies.",
    features: [
      "User authentication and authorization with JWT",
      "Interactive course management system",
      "Secure database integration with MySQL",
      "Responsive frontend design",
      "Cloud deployment on AWS"
    ],
    technologies: {
      frontend: ["HTML", "CSS", "JavaScript"],
      backend: ["Python"],
      database: ["MySQL"],
      auth: ["JWT"],
      deployment: ["AWS"]
    },
    image: "/lovable-uploads/c6adf40f-00c0-4101-8bcc-f9f31dc9429e.png"
  };

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
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Project Image/Visual */}
              <div className="relative bg-gradient-to-br from-purple-500 via-blue-500 to-green-500 p-8 lg:p-12 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                  <div className="text-6xl lg:text-8xl text-white font-bold mb-4">E-LMS</div>
                  <div className="text-white/80 text-lg">Learning Management System</div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-8 right-8 bg-white/20 rounded-full p-4 backdrop-blur-sm">
                  <Code className="text-white" size={24} />
                </div>
                <div className="absolute bottom-8 left-8 bg-white/20 rounded-full p-4 backdrop-blur-sm">
                  <Github className="text-white" size={24} />
                </div>
              </div>
              
              {/* Project Details */}
              <div className="p-8 lg:p-12">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                  {project.title}
                </h3>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {project.description}
                </p>
                
                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Key Features:</h4>
                  <ul className="space-y-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Technologies Used:</h4>
                  <div className="space-y-4">
                    <div>
                      <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Frontend:</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.technologies.frontend.map((tech, index) => (
                          <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Backend:</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.technologies.backend.map((tech, index) => (
                          <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Database & Others:</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {[...project.technologies.database, ...project.technologies.auth, ...project.technologies.deployment].map((tech, index) => (
                          <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://github.com/pallasivaisai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-700 transition-all duration-200 transform hover:scale-105"
                  >
                    <Github size={20} />
                    View Code
                  </a>
                  <button className="flex items-center justify-center gap-2 border-2 border-gray-800 text-gray-800 px-6 py-3 rounded-full font-medium hover:bg-gray-800 hover:text-white transition-all duration-200 transform hover:scale-105">
                    <Code size={20} />
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
