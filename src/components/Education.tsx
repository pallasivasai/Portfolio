
import React from 'react';

const Education = () => {
  const educationData = [
    {
      degree: "MCA (Master of Computer Applications)",
      institution: "KL University, Vaddeswaram",
      year: "2025",
      cgpa: "8.62 CGPA",
      status: "Current",
      color: "from-purple-500 to-blue-600"
    },
    {
      degree: "B.VOC (Web Technology & Software Development)",
      institution: "JKC College, Guntur",
      year: "2023",
      cgpa: "7.19 CGPA",
      status: "Completed",
      color: "from-orange-500 to-red-500"
    },
    {
      degree: "Intermediate (MPC)",
      institution: "NRI Junior College, Guntur",
      year: "2020",
      cgpa: "6.49 CGPA",
      status: "Completed",
      color: "from-green-500 to-teal-500"
    },
    {
      degree: "10th Standard",
      institution: "OXFORD School, Guntur",
      year: "2018",
      cgpa: "7.8 CGPA",
      status: "Completed",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My academic journey in technology and software development
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${edu.color}`}></div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          edu.status === 'Current' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        {edu.degree}
                      </h3>
                      
                      <p className="text-lg text-gray-600 mb-4">
                        {edu.institution}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${edu.color} text-white font-semibold`}>
                          {edu.cgpa}
                        </div>
                        <div className="text-gray-500 font-medium">
                          Year: {edu.year}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 lg:mt-0 lg:ml-8">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${edu.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                        {edu.year}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
