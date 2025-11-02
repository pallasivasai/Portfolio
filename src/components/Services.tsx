
import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom website creation using modern technologies with responsive design and optimal performance.",
      features: [
        "Responsive web design",
        "Modern UI/UX implementation",
        "Performance optimization",
        "Cross-browser compatibility"
      ],
      icon: "💻",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Frontend Development",
      description: "Creating engaging user interfaces with HTML, CSS, JavaScript and modern frameworks.",
      features: [
        "Interactive user interfaces",
        "Modern JavaScript frameworks",
        "CSS animations and transitions",
        "Mobile-first approach"
      ],
      icon: "🎨",
      color: "from-orange-500 to-pink-500"
    },
    {
      title: "Backend Integration",
      description: "Robust backend solutions with secure APIs and efficient database management.",
      features: [
        "RESTful API development",
        "Database design and optimization",
        "Server-side logic implementation",
        "Third-party integrations"
      ],
      icon: "⚙️",
      color: "from-green-500 to-blue-500"
    },
    {
      title: "Authentication & Security",
      description: "Implementing secure user authentication and authorization systems.",
      features: [
        "JWT token implementation",
        "User authentication systems",
        "Data encryption and security",
        "Access control management"
      ],
      icon: "🔒",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cloud Deployment",
      description: "Deploying applications on cloud platforms for scalability and reliability.",
      features: [
        "AWS cloud deployment",
        "Server configuration",
        "Performance monitoring",
        "Scalable architecture"
      ],
      icon: "☁️",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Problem Solving",
      description: "Analyzing complex technical challenges and providing elegant solutions.",
      features: [
        "Technical problem analysis",
        "Algorithm optimization",
        "Code refactoring",
        "Performance improvements"
      ],
      icon: "🧩",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive software development services to bring your ideas to life
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Service Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl mb-6 shadow-lg`}>
                  {service.icon}
                </div>
                
                {/* Service Title */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>
                
                {/* Service Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                {/* Service Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mt-2 flex-shrink-0`}></div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <div className="mt-8">
                  <a
                    href="#contact"
                    className={`inline-flex items-center justify-center w-full py-3 px-6 bg-gradient-to-r ${service.color} text-white font-medium rounded-full hover:shadow-lg transition-all duration-200 transform hover:scale-105`}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-orange-500 to-purple-600 rounded-3xl p-12 text-white">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-xl mb-8 text-white/90">
                Let's discuss how I can help bring your ideas to life with clean, efficient code.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
