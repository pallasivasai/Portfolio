
import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpeg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-orange-400 via-purple-500 to-blue-600 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/10 rounded-full animate-bounce"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen">
          {/* Left Content */}
          <div className="lg:w-1/2 text-white space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Hello, I'm<br />
                <span className="text-yellow-300">PALLA SIVA SAI</span><br />
                <span className="text-3xl lg:text-4xl font-medium">
                  An Aspiring Software Developer
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 max-w-lg">
                Solving complex problems with clean code and elegant solutions.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 text-center"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200 transform hover:scale-105 text-center"
              >
                Get In Touch
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-6">
              <a
                href="https://github.com/pallasivasai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-300 transition-colors duration-200 transform hover:scale-110"
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/p-siva-sai-10686417a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-300 transition-colors duration-200 transform hover:scale-110"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="mailto:psairabel143@gmail.com"
                className="text-white hover:text-yellow-300 transition-colors duration-200 transform hover:scale-110"
              >
                <Mail size={28} />
              </a>
            </div>
          </div>
          
          {/* Right Content - Profile Image */}
          <div className="lg:w-1/2 mt-10 lg:mt-0 animate-fade-in">
            <div className="relative">
              {/* Profile image with circular mask */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 mx-auto relative">
                <img 
                  src={profilePhoto} 
                  alt="PALLA SIVA SAI" 
                  className="w-full h-full rounded-full border-4 border-white/30 shadow-2xl object-contain bg-gray-100"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-white/20"></div>
              </div>
              
              {/* Floating stats */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg animate-bounce">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">9.45</div>
                  <div className="text-sm text-gray-600">CGPA</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg animate-pulse">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">MCA</div>
                  <div className="text-sm text-gray-600">KL University</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
