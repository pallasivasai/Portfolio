
import React from 'react';
import { Github, Linkedin, Mail, Cloud, GraduationCap, Shield, Code, Building2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-3xl font-bold">
              PALLA SIVA SAI<span className="text-orange-500">.</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Aspiring Software Developer passionate about creating elegant solutions 
              to complex problems through clean, efficient code.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/pallasivasai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                title="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/p-siva-sai-10686417a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                title="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:psairabel143@gmail.com"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                title="Email"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://www.skills.google/public_profiles/79b60659-bb15-42dd-852a-9ba427a0158c"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                title="Google Cloud Skills"
              >
                <Cloud size={24} />
              </a>
              <a
                href="https://www.hackerrank.com/profile/Psivasai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                title="HackerRank"
              >
                <Code size={24} />
              </a>
              <a
                href="https://tryhackme.com/p/psivasai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                title="TryHackMe"
              >
                <Shield size={24} />
              </a>
              <a
                href="https://www.salesforce.com/trailblazer/pssai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                title="Salesforce Trailblazer"
              >
                <Building2 size={24} />
              </a>
              <a
                href="https://www.coursera.org/user/8060386efadd322754c7edd16383b43d"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                title="Coursera"
              >
                <GraduationCap size={24} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <div className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Education', href: '#education' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Services', href: '#services' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-400 hover:text-orange-500 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Github size={18} className="text-orange-500" />
                <a
                  href="https://github.com/pallasivasai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  github.com/pallasivasai
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin size={18} className="text-orange-500" />
                <a
                  href="https://www.linkedin.com/in/p-siva-sai-10686417a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Cloud size={18} className="text-orange-500" />
                <a
                  href="https://www.skills.google/public_profiles/79b60659-bb15-42dd-852a-9ba427a0158c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Google Cloud Skills
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Code size={18} className="text-orange-500" />
                <a
                  href="https://www.hackerrank.com/profile/Psivasai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  HackerRank
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Shield size={18} className="text-orange-500" />
                <a
                  href="https://tryhackme.com/p/psivasai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  TryHackMe
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Building2 size={18} className="text-orange-500" />
                <a
                  href="https://www.salesforce.com/trailblazer/pssai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Salesforce Trailblazer
                </a>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap size={18} className="text-orange-500" />
                <a
                  href="https://www.coursera.org/user/8060386efadd322754c7edd16383b43d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Coursera
                </a>
              </div>
            </div>
            
            <div className="mt-6">
              <p className="text-gray-400 text-sm leading-relaxed">
                Available for full-time opportunities and exciting projects. 
                Let's build something amazing together!
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} PALLA SIVA SAI. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Designed and developed with ❤️ using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
