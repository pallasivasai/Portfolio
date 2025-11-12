
import React, { useState } from 'react';
import { Menu, X, Download, Mail } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleDownloadResume = () => {
    // Direct download link from Google Drive
    const driveUrl = 'https://drive.google.com/uc?export=download&id=1ve4TV1RnxzS0wwOesnF5oTlZy2ZNsVhm';
    const a = document.createElement('a');
    a.href = driveUrl;
    a.target = '_blank';
    a.download = 'PALLA_SIVA_SAI_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-gray-800">
            PSS<span className="text-orange-500">.</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>
          
          {/* Contact and Download Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="mailto:psairabel143@gmail.com"
              className="flex items-center gap-2 bg-white border-2 border-orange-500 text-orange-500 px-4 py-2 rounded-full text-sm font-medium hover:bg-orange-500 hover:text-white transition-all duration-200 transform hover:scale-105"
            >
              <Mail size={16} />
              Get In Touch
            </a>
            <button
              onClick={handleDownloadResume}
              className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              <Download size={16} />
              Download CV
            </button>
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
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
            <div className="space-y-3 mt-4">
              <a
                href="mailto:psairabel143@gmail.com"
                className="flex items-center gap-2 bg-white border-2 border-orange-500 text-orange-500 px-4 py-2 rounded-full text-sm font-medium w-full justify-center hover:bg-orange-500 hover:text-white transition-all duration-200"
              >
                <Mail size={16} />
                Get In Touch
              </a>
              <button
                onClick={handleDownloadResume}
                className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium w-full justify-center"
              >
                <Download size={16} />
                Download CV
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
