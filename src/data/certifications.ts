import { ExternalLink, Award, Shield, Code, Brain, TrendingUp, Video, Megaphone, Lock, Database, Globe, Server, FileCode, Laptop } from 'lucide-react';
import type React from 'react';

export interface CertType { name: string; issuer: string; icon: React.ComponentType<{ className?: string }>; color: string; verificationUrl: string; category: string; description?: string; }

export const cybersecurityCerts: CertType[] = [
    {
      name: "Security Monitoring and Governance",
      issuer: "Coursera",
      icon: Shield,
      color: "from-red-600 to-red-800",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Cybersecurity"
    },
    {
      name: "PwC Cybersecurity Virtual Case Experience",
      issuer: "PwC / Forage",
      icon: Lock,
      color: "from-orange-600 to-red-600",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Cybersecurity",
      description: "Integrated Information Defense, Risk Assessment, IT System Security Baseline, Network Segmentation"
    },
    {
      name: "Clifford Chance Cyber Security Global Virtual Internship",
      issuer: "Clifford Chance / Forage",
      icon: Shield,
      color: "from-purple-600 to-red-600",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Cybersecurity",
      description: "ICO Dawn Raid, Data Leak Assessment, Data-related Damages Response"
    },
    {
      name: "Tata Consultancy Services Cyber Security Analyst",
      issuer: "TCS / Forage",
      icon: Server,
      color: "from-blue-700 to-purple-700",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Cybersecurity"
    },
    {
      name: "Prodigy InfoTech Cyber Security Internship",
      issuer: "Prodigy InfoTech",
      icon: Lock,
      color: "from-green-600 to-teal-600",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Cybersecurity"
    }
];

export const technicalCerts: CertType[] = [
    {
      name: "Complete Machine Learning",
      issuer: "Udemy",
      icon: Brain,
      color: "from-purple-500 to-indigo-600",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "AI/ML"
    },
    {
      name: "HTML Fundamentals Certification",
      issuer: "SoloLearn",
      icon: Code,
      color: "from-blue-500 to-cyan-600",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Web Development"
    },
    {
      name: "JPMorgan Chase Software Engineering Virtual Experience",
      issuer: "JPMorgan Chase & Co. / Forage",
      icon: FileCode,
      color: "from-blue-600 to-blue-800",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Software Engineering",
      description: "Stock Price Data Feed, JPMC Frameworks, Data Visualization for Traders"
    },
    {
      name: "Microsoft Engineering Virtual Experience Program",
      issuer: "Microsoft / Forage",
      icon: Laptop,
      color: "from-blue-500 to-green-500",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Software Engineering",
      description: "SMART Goal Setting, Microsoft Values, Cultural Transformation"
    },
    {
      name: "Accenture Discovery Program",
      issuer: "Accenture / Forage",
      icon: Globe,
      color: "from-purple-600 to-purple-800",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Technology Consulting",
      description: "User Journey Redesign, Outcomes Analysis, Prioritisation & Impact Assessment"
    },
    {
      name: "PHP-MySQL Internship",
      issuer: "Suven Consultants and Technology",
      icon: Database,
      color: "from-indigo-500 to-purple-600",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Backend Development"
    }
];

export const googleCredentials: CertType[] = [

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
];
