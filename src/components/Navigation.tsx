
import React, { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';

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
    // Create a simple text resume for demo purposes
    const resumeContent = `
UNNAVA JOTHI SAI
Aspiring Software Developer | Web Development Enthusiast

CONTACT:
Email: saiunnava61744@gmail.com
Phone: 8374067723
LinkedIn: linkedin.com/in/unnava-jothi-sai-0330102b1
GitHub: github.com/saiunnava01

EDUCATION:
MCA – KL University, Vaddeswaram (2025) – 8.62 CGPA
B.VOC (Web Technology & Software Development) – JKC College, Guntur (2023) – 7.19 CGPA
Intermediate (MPC) – NRI Junior College, Guntur (2020) – 6.49 CGPA
10th Standard – OXFORD School, Guntur (2018) – 7.8 CGPA

SKILLS:
Languages & Technologies: HTML, CSS, JavaScript, PHP, Java, Python, SQL, DBMS
Areas of Expertise: Web development

PROJECTS:
E-Learning Management System (E-LMS)
- Full-stack application for managing e-learning content
- Technologies: HTML, CSS, JavaScript, Python, MySQL, JWT, AWS
    `;
    
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'UNNAVA_JOTHI_SAI_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-gray-800">
            JS<span className="text-orange-500">.</span>
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
          
          {/* Download Resume Button */}
          <button
            onClick={handleDownloadResume}
            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-orange-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-200 transform hover:scale-105"
          >
            <Download size={16} />
            Download CV
          </button>
          
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
            <button
              onClick={handleDownloadResume}
              className="mt-4 flex items-center gap-2 bg-gradient-to-r from-orange-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium w-full justify-center"
            >
              <Download size={16} />
              Download CV
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
