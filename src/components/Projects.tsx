
import React from 'react';
import { Github, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "DDoS Attack Detection System (Sai algorithm)",
      description: "A comprehensive machine learning solution for detecting Distributed Denial of Service (DDoS) attacks using my own SAI algorithm with advanced data analysis techniques. Achieves approximately 99% accuracy in threat detection.",
      technologies: ["Python", "Machine Learning", "SAI Algorithm", "Jupyter Notebook", "Cybersecurity"],
      github: "https://github.com/pallasivasai/Comprehensive-Approach-to-Detecting-DDoS-Attacks-using-Machine-Learning",
      demo: "https://colab.research.google.com/github/pallasivasai/Comprehensive-Approach-to-Detecting-DDoS-Attacks-using-Machine-Learning/blob/main/project.ipynb",
      color: "from-red-500 to-orange-500",
      icon: "🔐"
    },
    {
      title: "SAI Game",
      description: "A fascinating math magic trick game that demonstrates algebraic principles. You choose a number, the program performs a series of arithmetic operations (doubling, adding an imaginary number, halving, and subtracting), and mathematically predicts the result will always be half your imaginary number - showcasing Python programming and mathematical thinking.",
      technologies: ["Python", "Game Development", "Jupyter Notebook"],
      github: "https://github.com/pallasivasai/My_own_game",
      demo: "https://colab.research.google.com/drive/1edrBGixKoIsSJ7DbaXo8S9Yyt9nDChdj?usp=sharing",
      color: "from-purple-600 to-blue-600",
      icon: "🎮"
    },
    {
      title: "SAI Search Algorithm",
      description: "An innovative perfect hashing algorithm that implements a two-level universal hashing scheme with cryptographic security. Uses SHA-256 and collision-free data structures to achieve O(1) lookup time. Supports bidirectional search - find values by keys or keys by values. Features include cryptographic randomness and guaranteed collision-free storage, making it ideal for high-performance data retrieval applications.",
      technologies: ["Python", "Algorithm Design", "Data Structures", "Cryptography"],
      github: "https://github.com/pallasivasai/Searching_Algorithm_By_Me",
      demo: "https://colab.research.google.com/drive/1zjPs60ea85VchQRWU1IQjpIA3ejoRAFl?usp=sharing",
      color: "from-cyan-500 to-blue-600",
      icon: "🔍"
    },
    {
      title: "Password Cracker",
      description: "A comprehensive Python-based password cracking tool demonstrating multiple attack methodologies including brute force, dictionary attacks, and hash cracking techniques. Features customizable character sets, wordlist integration, and support for common hash algorithms (MD5, SHA-1, SHA-256). Built for educational purposes to help cybersecurity enthusiasts understand password vulnerabilities and the importance of strong password policies.",
      technologies: ["Python", "Cybersecurity", "Hash Algorithms", "Brute Force", "Educational"],
      github: "https://github.com/pallasivasai/Password-Cracker",
      demo: "https://colab.research.google.com/drive/1Y2qRXzUFSR_JgRjYLc1gRdiq9Iu3unN2?usp=sharing",
      color: "from-red-600 to-pink-600",
      icon: "🔓"
    },
    {
      title: "Authentication System with Database",
      description: "A complete signup and login system with working database integration, featuring secure user authentication and session management.",
      technologies: ["HTML", "PHP", "MySQL", "Authentication"],
      github: "https://github.com/pallasivasai/Signup-login-system-with-working-data-base",
      color: "from-purple-500 to-pink-500",
      icon: "🔑"
    },
    {
      title: "Vote Management System",
      description: "A voting system application built with PHP for managing elections and polls with database-driven functionality.",
      technologies: ["PHP", "MySQL", "Database Design"],
      github: "https://github.com/pallasivasai/votesystem",
      color: "from-indigo-500 to-blue-500",
      icon: "🗳️"
    },
    {
      title: "Instagram Phishing Attack (Learning)",
      description: "An educational demonstration of phishing attack techniques for cybersecurity awareness and ethical hacking learning purposes. Features GitHub API integration to store captured data directly to a GitHub repository, showcasing API usage and data handling.",
      technologies: ["Security Research", "Ethical Hacking", "HTML", "CSS", "GitHub API"],
      github: "https://github.com/Psivasai970/Psivasai970.github.io",
      demo: "https://psivasai970.github.io/",
      color: "from-orange-600 to-red-600",
      icon: "🎣"
    },
    {
      title: "SAIBANK - Basic Banking System",
      description: "A revolutionary banking system featuring a unique 30-minute payment reversal mechanism using SQL triggers. If a wrong payment is made, it can be automatically reversed within 30 minutes through intelligent trigger-based transaction monitoring. This innovative concept demonstrates advanced database automation, time-based validation, and seamless rollback functionality for enhanced banking security.",
      technologies: ["SQL Triggers", "Database", "MySQL", "TypeScript", "React", "Tailwind CSS", "Lovable Cloud"],
      github: "https://github.com/pallasivasai/saibank",
      demo: "https://saibank.lovable.app/",
      color: "from-teal-500 to-cyan-600",
      icon: "🏦"
    },
    {
      title: "Recipe Ideas App",
      description: "A modern web application that helps users discover and explore various recipe ideas with an intuitive and responsive interface.",
      technologies: ["TypeScript", "React", "Tailwind CSS"],
      github: "https://github.com/pallasivasai/Recipe-Ideas-App",
      demo: "https://recipe-ideas-app-for-ss4q.bolt.host/",
      color: "from-green-500 to-emerald-500",
      icon: "🍳"
    },
    {
      title: "Book Finder Application",
      description: "A specialized application for college students to easily search, discover, and find books relevant to their courses and interests.",
      technologies: ["TypeScript", "React", "API Integration"],
      github: "https://github.com/pallasivasai/Book-Finder-Application-for-College-Students",
      demo: "https://book-finder-applicat-v34g.bolt.host/",
      color: "from-blue-500 to-cyan-500",
      icon: "📚"
    }
  ];

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
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* Project Header with Icon */}
                <div className={`bg-gradient-to-r ${project.color} p-8 text-center`}>
                  <div className="text-6xl mb-4">{project.icon}</div>
                  <h3 className="text-2xl font-bold text-white">
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
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
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
                      className="flex-1 flex items-center justify-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-700 transition-all duration-200"
                    >
                      <Github size={18} />
                      Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 border-2 border-gray-800 text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-gray-800 hover:text-white transition-all duration-200"
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
