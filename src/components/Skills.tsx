
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "HTML", level: 90, color: "bg-orange-500" },
        { name: "CSS", level: 85, color: "bg-blue-500" },
        { name: "JavaScript", level: 80, color: "bg-yellow-500" }
      ]
    },
    {
      title: "Backend Technologies",
      skills: [
        { name: "PHP", level: 75, color: "bg-purple-500" },
        { name: "Java", level: 70, color: "bg-red-500" },
        { name: "Python", level: 85, color: "bg-green-500" }
      ]
    },
    {
      title: "Database & Others",
      skills: [
        { name: "SQL", level: 80, color: "bg-indigo-500" },
        { name: "DBMS", level: 75, color: "bg-pink-500" }
      ]
    }
  ];

  const expertise = [
    {
      title: "Web Development",
      description: "Full-stack web application development with modern technologies",
      icon: "🌐",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Problem Solving",
      description: "Breaking down complex problems into elegant, structured solutions",
      icon: "🧩",
      color: "from-green-500 to-blue-500"
    },
    {
      title: "Database Design",
      description: "Designing efficient database schemas and optimizing queries",
      icon: "🗄️",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies and skills I use to bring ideas to life
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Skills Progress Bars */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className={`${skill.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Areas of Expertise */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Areas of Expertise
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {expertise.map((area, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
                >
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${area.color} flex items-center justify-center text-3xl mx-auto mb-6 shadow-lg`}>
                    {area.icon}
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-800 mb-4">
                    {area.title}
                  </h4>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
