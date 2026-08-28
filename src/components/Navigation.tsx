
import React, { useState } from 'react';
import { Menu, X, Download, Link, User, FileText } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Research', href: '#research' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Services', href: '#services' },
    { name: 'Get Touch', href: 'mailto:imsivasai01@gmail.com', isEmail: true },
    { name: 'Contact', href: '#contact' },
  ];

  const handleDownloadResume = () => {
    window.open('https://drive.google.com/file/d/1O6aVJ7BkqImQwgR-sDWz8I3c5zDbHTCc/view?usp=sharing', '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-gray-800">
            PSS<span className="text-orange-500">.</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-4 xl:space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="whitespace-nowrap text-gray-700 hover:text-orange-500 px-1 py-2 text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>
          
          {/* Social Links & Download Resume Button */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href="https://about.me/psivasai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-orange-500 transition-colors duration-200"
              title="About.me"
            >
              <User size={20} />
            </a>
            <a
              href="https://linktr.ee/psivasai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-orange-500 transition-colors duration-200"
              title="Linktree"
            >
              <Link size={20} />
            </a>
            <RouterLink
              to="/resume"
              className="flex items-center gap-2 whitespace-nowrap border border-orange-500 text-orange-600 px-3 py-2 rounded-full text-sm font-medium hover:bg-orange-50 transition-all duration-200"
            >
              <FileText size={16} />
              Resume
            </RouterLink>
            <button
              onClick={handleDownloadResume}
              className="flex items-center gap-2 whitespace-nowrap bg-gradient-to-r from-orange-500 to-purple-600 text-white px-3 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              <Download size={16} />
              CV
            </button>
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <RouterLink
              to="/resume"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 flex items-center gap-2 border border-orange-500 text-orange-600 px-4 py-2 rounded-full text-sm font-medium w-full justify-center"
            >
              <FileText size={16} />
              Resume
            </RouterLink>
            <button
              onClick={handleDownloadResume}
              className="mt-3 flex items-center gap-2 bg-gradient-to-r from-orange-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium w-full justify-center"
            >
              <Download size={16} />
              CV
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
