import React from 'react';
import { ExternalLink, Award, Shield, Code, Brain, TrendingUp, Video, Megaphone, Lock, Database, Globe, Server, FileCode, Laptop } from 'lucide-react';

const Certifications = () => {
  // Cybersecurity Certifications (Priority - Top)
  const cybersecurityCerts = [
    {
      name: "Security Monitoring and Governance",
      issuer: "Coursera",
      icon: Shield,
      color: "from-red-600 to-red-800",
      verificationUrl: "https://www.linkedin.com/in/p-siva-sai-10686417a/details/certifications/",
      category: "Cybersecurity"
    },
    {
      name: "PwC Cybersecurity Virtual Case Experience",
      issuer: "PwC / Forage",
      icon: Lock,
      color: "from-orange-600 to-red-600",
      verificationUrl: "https://www.linkedin.com/in/p-siva-sai-10686417a/details/certifications/",
      category: "Cybersecurity",
      description: "Integrated Information Defense, Risk Assessment, IT System Security Baseline, Network Segmentation"
    },
    {
      name: "Clifford Chance Cyber Security Global Virtual Internship",
      issuer: "Clifford Chance / Forage",
      icon: Shield,
      color: "from-purple-600 to-red-600",
      verificationUrl: "https://www.linkedin.com/in/p-siva-sai-10686417a/details/certifications/",
      category: "Cybersecurity",
      description: "ICO Dawn Raid, Data Leak Assessment, Data-related Damages Response"
    },
    {
      name: "Tata Consultancy Services Cyber Security Analyst",
      issuer: "TCS / Forage",
      icon: Server,
      color: "from-blue-700 to-purple-700",
      verificationUrl: "https://www.linkedin.com/in/p-siva-sai-10686417a/details/certifications/",
      category: "Cybersecurity"
    },
    {
      name: "Prodigy InfoTech Cyber Security Internship",
      issuer: "Prodigy InfoTech",
      icon: Lock,
      color: "from-green-600 to-teal-600",
      verificationUrl: "https://www.linkedin.com/in/p-siva-sai-10686417a/details/certifications/",
      category: "Cybersecurity"
    }
  ];

  // Technical/Development Certifications
  const technicalCerts = [
    {
      name: "Complete Machine Learning",
      issuer: "Udemy",
      icon: Brain,
      color: "from-purple-500 to-indigo-600",
      verificationUrl: "https://www.linkedin.com/in/p-siva-sai-10686417a/details/certifications/",
      category: "AI/ML"
    },
    {
      name: "HTML Fundamentals Certification",
      issuer: "SoloLearn",
      icon: Code,
      color: "from-blue-500 to-cyan-600",
      verificationUrl: "https://www.linkedin.com/in/p-siva-sai-10686417a/details/certifications/",
      category: "Web Development"
    },
    {
      name: "JPMorgan Chase Software Engineering Virtual Experience",
      issuer: "JPMorgan Chase & Co. / Forage",
      icon: FileCode,
      color: "from-blue-600 to-blue-800",
      verificationUrl: "https://www.linkedin.com/in/p-siva-sai-10686417a/details/certifications/",
      category: "Software Engineering",
      description: "Stock Price Data Feed, JPMC Frameworks, Data Visualization for Traders"
    },
    {
      name: "Microsoft Engineering Virtual Experience Program",
      issuer: "Microsoft / Forage",
      icon: Laptop,
      color: "from-blue-500 to-green-500",
      verificationUrl: "https://www.linkedin.com/in/p-siva-sai-10686417a/details/certifications/",
      category: "Software Engineering",
      description: "SMART Goal Setting, Microsoft Values, Cultural Transformation"
    },
    {
      name: "Accenture Discovery Program",
      issuer: "Accenture / Forage",
      icon: Globe,
      color: "from-purple-600 to-purple-800",
      verificationUrl: "https://www.linkedin.com/in/p-siva-sai-10686417a/details/certifications/",
      category: "Technology Consulting",
      description: "User Journey Redesign, Outcomes Analysis, Prioritisation & Impact Assessment"
    },
    {
      name: "PHP-MySQL Internship",
      issuer: "Suven Consultants and Technology",
      icon: Database,
      color: "from-indigo-500 to-purple-600",
      verificationUrl: "https://www.linkedin.com/in/p-siva-sai-10686417a/details/certifications/",
      category: "Backend Development"
    }
  ];

  // Google Credentials
  const googleCredentials = [
    {
      name: "Google Ads Display Certification",
      issuer: "Google",
      icon: Megaphone,
      color: "from-green-500 to-emerald-600",
      verificationUrl: "https://www.skills.google/public_profiles/79b60659-bb15-42dd-852a-9ba427a0158c",
      category: "Digital Marketing"
    },
    {
      name: "Campaign Manager Certification",
      issuer: "Google",
      icon: TrendingUp,
      color: "from-blue-600 to-blue-800",
      verificationUrl: "https://www.skills.google/public_profiles/79b60659-bb15-42dd-852a-9ba427a0158c",
      category: "Digital Marketing"
    },
    {
      name: "YouTube Music Certification",
      issuer: "Google",
      icon: Video,
      color: "from-red-600 to-red-800",
      verificationUrl: "https://www.skills.google/public_profiles/79b60659-bb15-42dd-852a-9ba427a0158c",
      category: "Content"
    },
    {
      name: "Google Digital Workshop",
      issuer: "Google",
      icon: Award,
      color: "from-yellow-500 to-orange-500",
      verificationUrl: "https://www.skills.google/public_profiles/79b60659-bb15-42dd-852a-9ba427a0158c",
      category: "Digital Skills"
    },
    {
      name: "Google Digital Garage",
      issuer: "Google",
      icon: Award,
      color: "from-teal-500 to-green-600",
      verificationUrl: "https://learndigital.withgoogle.com/digitalgarage/validate-certificate-code",
      category: "Digital Skills"
    }
  ];

  interface CertType {
    name: string;
    issuer: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
    verificationUrl: string;
    category: string;
    description?: string;
  }

  const CertificationCard = ({ cert }: { cert: CertType }) => {
    const IconComponent = cert.icon;
    
    return (
      <div
        className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
      >
        <div className={`h-2 bg-gradient-to-r ${cert.color}`}></div>
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className={`p-3 rounded-xl bg-gradient-to-r ${cert.color} text-white shadow-lg flex-shrink-0`}>
              <IconComponent className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 bg-gradient-to-r ${cert.color} text-white`}>
                {cert.category}
              </span>
              <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 transition-all line-clamp-2">
                {cert.name}
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                Issued by {cert.issuer}
              </p>
              {cert.description && (
                <p className="text-gray-500 text-xs mb-3 line-clamp-2">
                  {cert.description}
                </p>
              )}
              <a
                href={cert.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${cert.color} text-white text-sm font-medium hover:shadow-lg transition-all duration-300 hover:scale-105`}
              >
                <span>Verify Credential</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Certifications & Credentials
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional certifications validating my expertise in technology and digital skills
          </p>
        </div>

        {/* Cybersecurity Certifications - Top Priority */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            <span className="bg-gradient-to-r from-red-600 to-orange-600 text-transparent bg-clip-text">
              🔒 Cybersecurity Certifications
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {cybersecurityCerts.map((cert, index) => (
              <CertificationCard key={index} cert={cert} />
            ))}
          </div>
        </div>

        {/* Technical Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
              💻 Technical & Development Certifications
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {technicalCerts.map((cert, index) => (
              <CertificationCard key={index} cert={cert} />
            ))}
          </div>
        </div>

        {/* Google Credentials */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            <span className="bg-gradient-to-r from-blue-600 to-green-600 text-transparent bg-clip-text">
              🏆 Google Certifications & Awards
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {googleCredentials.map((cert, index) => (
              <CertificationCard key={index} cert={cert} />
            ))}
          </div>
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <a
            href="https://www.linkedin.com/in/p-siva-sai-10686417a/details/certifications/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span>View All Certifications on LinkedIn</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
