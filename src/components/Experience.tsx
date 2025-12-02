import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "OneSource Consulting",
      role: "Junior IT Recruiter",
      period: "September 2024 - Present",
      location: "Hyderabad, Telangana, India",
      description: "As an EU Technical Recruiter, my role combines both talent expertise and business growth. I specialize in connecting top IT professionals with opportunities across Europe while driving recruitment sales and building long-term client relationships.",
      responsibilities: [
        "Partner with clients to understand their hiring needs and deliver tailored recruitment strategies",
        "Source, engage, and place skilled IT professionals by aligning talent with business goals",
        "Develop new business opportunities through market research, lead generation, and client outreach",
        "Drive the end-to-end recruitment sales cycle, from pitching services to negotiating contracts",
        "Act as a trusted advisor to clients and candidates by providing insights on market trends and salary benchmarks"
      ],
      color: "from-orange-500 to-purple-600"
    },
    {
      company: "GirlScript Summer of Code",
      role: "Open Source Contributor",
      period: "May 2024 - August 2024",
      location: "Remote",
      description: "Actively contributed to open source projects as part of GSSOC'24, achieving significant milestones in collaborative development.",
      responsibilities: [
        "Contributed to 10+ repositories in open source GSSOC'24",
        "38 pull requests accepted and merged",
        "Achieved Global rank 80 in the program",
        "Technologies used: HTML, CSS, JavaScript, Python, MySQL"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      company: "Unified Mentor",
      role: "Web Development Intern",
      period: "June 2024 - July 2024",
      location: "Remote",
      description: "Worked on web development projects, enhancing frontend and backend development skills.",
      responsibilities: [
        "Developed responsive web applications",
        "Collaborated with team members on project deliverables",
        "Implemented modern web technologies and best practices"
      ],
      color: "from-green-500 to-teal-500"
    },
    {
      company: "Prodigy InfoTech",
      role: "Cyber Security Intern",
      period: "May 2024",
      location: "Remote",
      description: "Gained hands-on experience in cybersecurity practices and threat analysis.",
      responsibilities: [
        "Performed security assessments and vulnerability testing",
        "Learned about security monitoring and incident response",
        "Applied cybersecurity best practices in real-world scenarios"
      ],
      color: "from-red-500 to-pink-600"
    },
    {
      company: "TECHPLEMENT",
      role: "Java Developer Intern",
      period: "April 2024",
      location: "Remote",
      description: "Developed Java-based applications and enhanced programming skills in an enterprise environment.",
      responsibilities: [
        "Developed a Currency Converter application",
        "Worked on multiple Java development tasks",
        "Followed organization coding standards and best practices"
      ],
      color: "from-yellow-500 to-orange-500"
    },
    {
      company: "Tata Consultancy Services",
      role: "Cyber Security Analyst (Job Simulation)",
      period: "November 2023 - February 2024",
      location: "Virtual Experience",
      description: "Participated in a comprehensive cybersecurity job simulation program.",
      responsibilities: [
        "Analyzed security threats and vulnerabilities",
        "Implemented security monitoring and governance practices",
        "Gained exposure to enterprise-level cybersecurity operations"
      ],
      color: "from-indigo-500 to-blue-600"
    },
    {
      company: "Abhyaz",
      role: "Software Engineer Intern",
      period: "March 2023 - May 2023",
      location: "Chennai, Tamil Nadu, India",
      description: "Worked as a software engineering intern, contributing to various development projects.",
      responsibilities: [
        "Developed and maintained software applications",
        "Collaborated with cross-functional teams",
        "Participated in code reviews and testing processes"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      company: "JPMorgan Chase & Co.",
      role: "Software Engineering Virtual Experience",
      period: "July 2022 - October 2022",
      location: "Virtual Experience",
      description: "Completed a virtual software engineering program focusing on financial technology solutions.",
      responsibilities: [
        "Interfaced with a stock price data feed",
        "Used JPMorgan Chase frameworks and tools",
        "Displayed data visually for traders"
      ],
      color: "from-blue-600 to-indigo-600"
    },
    {
      company: "KMAC Talent Management",
      role: "Talent Acquisition Recruiter",
      period: "May 2022 - June 2022",
      location: "Work from Home",
      description: "Gained initial experience in talent acquisition and recruitment processes.",
      responsibilities: [
        "Met with managers to discuss job profiles and requirements",
        "Posted job openings on various platforms like Naukri, Monster, LinkedIn",
        "Screened resumes and matched candidates to client requirements",
        "Conducted candidate interviews and assessments based on relevant skills and experience",
        "Updated company Excel sheets visible to managers for candidate tracking",
        "Participated in multi-level interviews and onboarding processes"
      ],
      color: "from-teal-500 to-green-600"
    },
    {
      company: "The Sparks Foundation",
      role: "Web Development & Designing Intern",
      period: "November 2021 - December 2021",
      location: "Remote",
      description: "Worked on web development and design projects, gaining practical experience in frontend technologies.",
      responsibilities: [
        "Developed responsive web applications",
        "Applied design principles to create user-friendly interfaces",
        "Collaborated on various web development projects"
      ],
      color: "from-cyan-500 to-blue-500"
    },
    {
      company: "Internshala",
      role: "Internshala Student Partner (ISP)",
      period: "September 2021 - December 2021",
      location: "Remote",
      description: "Represented Internshala on campus, promoting internship opportunities and career development programs.",
      responsibilities: [
        "Promoted Internshala training programs and internship opportunities",
        "Organized campus awareness campaigns",
        "Connected students with career development resources"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      company: "PrepBytes",
      role: "Campus Business Manager",
      period: "September 2021 - December 2021",
      location: "Remote",
      description: "Managed campus outreach and business development activities for PrepBytes coding platform.",
      responsibilities: [
        "Promoted coding programs and courses on campus",
        "Organized technical events and workshops",
        "Developed partnerships with student communities"
      ],
      color: "from-violet-500 to-purple-500"
    },
    {
      company: "Unschool",
      role: "Human Resources Intern",
      period: "September 2021 - October 2021",
      location: "Andhra Pradesh, India",
      description: "Working as HR for an organization fulfilled a dream. Learned the end-to-end hiring process and essential HR skills including empathy, passion, research, sourcing, and data collection tools.",
      responsibilities: [
        "Participated in end-to-end hiring process",
        "Conducted research and candidate sourcing",
        "Used HR tools for data collection and management",
        "Developed empathy and communication skills essential for HR"
      ],
      color: "from-pink-500 to-rose-500"
    },
    {
      company: "Topper Technologies Pvt Ltd",
      role: "Intern",
      period: "September 2021 - October 2021",
      location: "Andhra Pradesh, India",
      description: "Gained practical experience in technology solutions and business operations.",
      responsibilities: [
        "Worked on technology projects",
        "Collaborated with team on various assignments",
        "Applied technical skills in real-world scenarios"
      ],
      color: "from-amber-500 to-orange-500"
    },
    {
      company: "The Sparks Foundation",
      role: "Talent Acquisition (Human Resource)",
      period: "June 2021 - July 2021",
      location: "Guntur, Andhra Pradesh, India",
      description: "Focused on talent acquisition and recruitment activities for The Sparks Foundation.",
      responsibilities: [
        "Managed talent acquisition processes",
        "Screened and evaluated candidates",
        "Coordinated recruitment activities"
      ],
      color: "from-sky-500 to-blue-500"
    },
    {
      company: "CodeSpeedy Technology Private Limited",
      role: "Java Programmer",
      period: "April 2021 - July 2021",
      location: "Guntur, Andhra Pradesh, India",
      description: "Developed Java-based applications and enhanced programming skills.",
      responsibilities: [
        "Wrote and maintained Java code",
        "Developed software applications",
        "Collaborated on programming projects"
      ],
      color: "from-red-500 to-orange-600"
    },
    {
      company: "PwC",
      role: "Cybersecurity Virtual Case Experience",
      period: "January 2021 - February 2021",
      location: "Guntur, Andhra Pradesh, India",
      description: "Completed virtual cybersecurity training covering integrated information defense, risk assessment, and network security.",
      responsibilities: [
        "Integrated Information Defense",
        "Risk Assessment",
        "IT System Security Baseline",
        "Network Segmentation"
      ],
      color: "from-orange-600 to-red-600"
    },
    {
      company: "Clifford Chance",
      role: "Cyber Security Global Virtual Internship",
      period: "December 2020 - February 2021",
      location: "Guntur, Andhra Pradesh, India",
      description: "Completed a comprehensive virtual internship focused on cybersecurity and data protection in legal contexts.",
      responsibilities: [
        "Practical guidance on an ICO Dawn Raid",
        "Assess the legal situation after a data leak and take the necessary steps",
        "Respond to a data-related damages claim"
      ],
      color: "from-blue-600 to-cyan-600"
    },
    {
      company: "Suven Consultants and Technology Pvt.Ltd.",
      role: "PHP-MySQL Intern",
      period: "December 2020 - January 2021",
      location: "Karempudi, Andhra Pradesh, India",
      description: "Gained hands-on experience in backend development using PHP and MySQL technologies.",
      responsibilities: [
        "Developed web applications using PHP and MySQL",
        "Worked on database design and management",
        "Implemented backend functionality for web projects"
      ],
      color: "from-purple-600 to-indigo-600"
    },
    {
      company: "Microsoft",
      role: "Engineering: Undergraduate & Masters Asia Virtual Experience Program",
      period: "May 2020 - June 2020",
      location: "Karempudi, Andhra Pradesh, India",
      description: "Participated in Microsoft's comprehensive virtual experience program covering professional development and Microsoft's cultural values.",
      responsibilities: [
        "Learned Microsoft's values – Respect, Integrity, and Accountability",
        "Used SMART goal setting to build career development plans",
        "Explored Microsoft's commitment to putting values into action",
        "Discovered Microsoft's Four Solutions that enable digital transformation",
        "Developed Growth Mindset and professional branding skills"
      ],
      color: "from-sky-500 to-blue-600"
    },
    {
      company: "Accenture",
      role: "Accenture Discovery Program",
      period: "April 2020 - June 2020",
      location: "Work From Home",
      description: "Completed Accenture's Discovery Program focused on project management, user experience, and problem-solving skills.",
      responsibilities: [
        "Assembled project plans",
        "User Journey Redesign",
        "Outcomes Analysis",
        "Fixed errors and debugged issues",
        "Prioritisation & Impact Assessment",
        "Set Project Priorities"
      ],
      color: "from-violet-600 to-purple-600"
    }
  ];

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