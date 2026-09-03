import React, { useState } from 'react';
import { ExternalLink, Award, Shield, Code, Brain, TrendingUp, Video, Megaphone, Lock, Database, Globe, Server, FileCode, Laptop, Cloud, ChevronDown, ChevronUp } from 'lucide-react';
import { cybersecurityCerts, technicalCerts, googleCredentials, type CertType } from '@/data/certifications';

const INITIAL_VISIBLE = 6;

const Certifications = () => {
  const [visibleCounts, setVisibleCounts] = useState({
    cybersecurity: INITIAL_VISIBLE,
    technical: INITIAL_VISIBLE,
    google: INITIAL_VISIBLE,
  });

  const toggleShowMore = (key: 'cybersecurity' | 'technical' | 'google', total: number) => {
    setVisibleCounts((prev) => ({
      ...prev,
      [key]: prev[key] === INITIAL_VISIBLE ? total : INITIAL_VISIBLE,
    }));
  };

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

  const CertSection = ({
    title,
    gradient,
    certs,
    keyName,
  }: {
    title: string;
    gradient: string;
    certs: CertType[];
    keyName: 'cybersecurity' | 'technical' | 'google';
  }) => {
    const visible = visibleCounts[keyName];
    const hasMore = certs.length > INITIAL_VISIBLE;

    return (
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          <span className={`bg-gradient-to-r ${gradient} text-transparent bg-clip-text`}>
            {title}
          </span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certs.slice(0, visible).map((cert, index) => (
            <CertificationCard key={index} cert={cert} />
          ))}
        </div>
        {hasMore && (
          <div className="text-center mt-8">
            <button
              onClick={() => toggleShowMore(keyName, certs.length)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold transition-all duration-300"
            >
              {visible === INITIAL_VISIBLE ? (
                <>
                  <span>Show All {certs.length} Certifications</span>
                  <ChevronDown className="w-5 h-5" />
                </>
              ) : (
                <>
                  <span>Show Less</span>
                  <ChevronUp className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        )}
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
            href="https://www.linkedin.com/in/pallasivasai/details/certifications/"
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
