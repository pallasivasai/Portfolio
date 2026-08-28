import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-purple-600 mx-auto mb-4"></div>
            <p className="text-muted-foreground text-lg">
              My journey through various roles and organizations
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group relative bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
              >
                {/* Timeline dot */}
                <div className="absolute -left-4 top-10 w-8 h-8 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full border-4 border-background hidden lg:block"></div>
                
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-lg font-semibold mb-2">
                      <Briefcase className="w-5 h-5 text-primary" />
                      <span className={`bg-gradient-to-r ${exp.color} text-transparent bg-clip-text`}>
                        {exp.company}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Key Responsibilities:</h4>
                  <ul className="list-none space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">▸</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;