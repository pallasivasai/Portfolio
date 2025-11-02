
import React from 'react';
import profilePhoto from '@/assets/profile-photo.jpeg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="relative">
              <img 
                src={profilePhoto} 
                alt="PALLA SIVA SAI" 
                className="w-80 h-80 rounded-2xl mx-auto object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-400 rounded-full opacity-20"></div>
            </div>
            
            {/* About Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Designing Solutions, Not Just Visuals
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                My name is <span className="font-semibold text-purple-600">PALLA SIVA SAI</span> and I am searching for a Software Developer role. My interests include learning new languages, listening to podcasts, exploring new skills, and watching movies.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                My career goal is to settle in a high position in the IT sector. I'm genuinely excited by intricate technical puzzles and enjoy breaking down large problems into structured, elegant solutions.
              </p>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-orange-500">
                <h4 className="font-semibold text-gray-800 mb-2">My Mission</h4>
                <p className="text-gray-600">
                  To leverage my technical skills and passion for problem-solving to create innovative software solutions that make a meaningful impact in the technology sector.
                </p>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-gradient-to-r from-orange-500 to-purple-600 rounded-xl p-4 text-white text-center">
                  <div className="text-2xl font-bold">B.Sc CS</div>
                  <div className="text-sm">Degree</div>
                </div>
                <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-xl p-4 text-white text-center">
                  <div className="text-2xl font-bold">7.02</div>
                  <div className="text-sm">GPA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
