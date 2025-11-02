
import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-3xl font-bold">
              UNNAVA JOTHI SAI<span className="text-orange-500">.</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Aspiring Software Developer passionate about creating elegant solutions 
              to complex problems through clean, efficient code.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/saiunnava01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/unnava-jothi-sai-0330102b1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:saiunnava61744@gmail.com"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
              >
                <Mail size={24} />
              </a>
              <a
                href="tel:8374067723"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
              >
                <Phone size={24} />
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
                <Mail size={18} className="text-orange-500" />
                <a
                  href="mailto:saiunnava61744@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  saiunnava61744@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-orange-500" />
                <a
                  href="tel:8374067723"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  +91 8374067723
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
              © {currentYear} UNNAVA JOTHI SAI. All rights reserved.
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
