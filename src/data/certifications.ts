import { ExternalLink, Award, Shield, Code, Brain, TrendingUp, Video, Megaphone, Lock, Database, Globe, Server, FileCode, Laptop } from 'lucide-react';
import type React from 'react';

export interface CertType { name: string; issuer: string; icon: React.ComponentType<{ className?: string }>; color: string; verificationUrl: string; category: string; description?: string; }

export const cybersecurityCerts: CertType[] = [
    {
      name: "Ethical Hacking Essentials (EHE)",
      issuer: "EC-Council",
      icon: Lock,
      color: "from-red-700 to-red-900",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Cybersecurity"
    },
    {
      name: "EC-Council Certified Security Analyst: Penetration Testing (ECSA)",
      issuer: "EC-Council",
      icon: Shield,
      color: "from-red-600 to-orange-600",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Cybersecurity"
    },
    {
      name: "Google Cybersecurity Certificate",
      issuer: "Google / Coursera",
      icon: Shield,
      color: "from-blue-600 to-green-600",
      verificationUrl: "https://www.coursera.org/account/accomplishments/professional-cert/WHB7Q4JLJCK5",
      category: "Cybersecurity"
    },
    {
      name: "IBM Cybersecurity Analyst Professional Certificate",
      issuer: "IBM / Coursera",
      icon: Shield,
      color: "from-blue-700 to-cyan-700",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Cybersecurity"
    },
    {
      name: "Cybersecurity Foundations",
      issuer: "National Association of State Boards of Accountancy (NASBA)",
      icon: Shield,
      color: "from-slate-700 to-slate-900",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Cybersecurity"
    },
    {
      name: "Cybersecurity Fundamentals",
      issuer: "IBM",
      icon: Lock,
      color: "from-blue-600 to-indigo-700",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Cybersecurity"
    },
    {
      name: "Cybersecurity IT Fundamentals Specialization",
      issuer: "Credly by Pearson",
      icon: Shield,
      color: "from-purple-600 to-blue-700",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Cybersecurity"
    },
    {
      name: "Network Security & Database Vulnerabilities",
      issuer: "IBM",
      icon: Database,
      color: "from-indigo-600 to-purple-700",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Cybersecurity"
    },
    {
      name: "Cybersecurity Compliance Framework & System Administration",
      issuer: "IBM",
      icon: Server,
      color: "from-cyan-600 to-blue-700",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Cybersecurity"
    },
    {
      name: "Cybersecurity Roles, Processes & Operating System Security",
      issuer: "IBM",
      icon: Shield,
      color: "from-teal-600 to-blue-700",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Cybersecurity"
    },
    {
      name: "Penetration Testing, Incident Response and Forensics",
      issuer: "IBM",
      icon: Lock,
      color: "from-orange-600 to-red-700",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Cybersecurity"
    },
    {
      name: "Cyber Threat Intelligence",
      issuer: "IBM",
      icon: Brain,
      color: "from-blue-600 to-cyan-600",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Cybersecurity"
    },
    {
      name: "ICSI | CNSS Certified Network Security Specialist",
      issuer: "DefensityOne",
      icon: Shield,
      color: "from-green-600 to-teal-700",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Cybersecurity"
    },
    {
      name: "Most Advanced Level Ethical Hacking Using Kali Linux",
      issuer: "Udemy",
      icon: Lock,
      color: "from-red-600 to-purple-700",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Cybersecurity"
    },
    {
      name: "Complete Python Hacking Course: Beginner To Advanced!",
      issuer: "Udemy",
      icon: Lock,
      color: "from-purple-700 to-red-700",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Cybersecurity"
    },
    {
      name: "White Hat Hacker And Pen Tester",
      issuer: "EDUONIX",
      icon: Shield,
      color: "from-orange-600 to-red-600",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Cybersecurity"
    },
    {
      name: "Penetration Testing",
      issuer: "Udemy",
      icon: Lock,
      color: "from-red-500 to-orange-600",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Cybersecurity"
    },
    {
      name: "Cyber security fundation",
      issuer: "Certiprof",
      icon: Shield,
      color: "from-blue-500 to-cyan-600",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Cybersecurity"
    },
    {
      name: "Security Monitoring and Governance",
      issuer: "Coursera",
      icon: Shield,
      color: "from-red-600 to-red-800",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Cybersecurity"
    },
    {
      name: "Office of the CISO Institute: Cybersecurity Essentials",
      issuer: "Google",
      icon: Shield,
      color: "from-emerald-600 to-blue-600",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Cybersecurity"
    },
    {
      name: "Put It to Work Prepare for Cybersecurity Jobs",
      issuer: "Google",
      icon: Shield,
      color: "from-blue-500 to-green-500",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Cybersecurity"
    },
    {
      name: "Automate Cybersecurity Tasks with Python",
      issuer: "Google",
      icon: Code,
      color: "from-yellow-500 to-green-500",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Cybersecurity"
    },
    {
      name: "Sound the Alarm: Detection and Response",
      issuer: "Google",
      icon: Shield,
      color: "from-orange-500 to-red-600",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Cybersecurity"
    },
    {
      name: "Assets, Threats, and Vulnerabilities",
      issuer: "Google",
      icon: Shield,
      color: "from-red-500 to-orange-600",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Cybersecurity"
    },
    {
      name: "Connect and Protect: Networks and Network Security",
      issuer: "Google",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Cybersecurity"
    },
    {
      name: "Tools of the Trade: Linux and SQL",
      issuer: "Google",
      icon: Database,
      color: "from-cyan-500 to-blue-600",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Cybersecurity"
    },
    {
      name: "Play It Safe: Manage Security Risks",
      issuer: "Google",
      icon: Shield,
      color: "from-green-500 to-teal-600",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Cybersecurity"
    },
    {
      name: "Foundations of Cybersecurity",
      issuer: "Google",
      icon: Shield,
      color: "from-blue-600 to-indigo-600",
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
    },
    {
      name: "Security Monitoring and Governance",
      issuer: "Microsoft",
      icon: Shield,
      color: "from-blue-600 to-slate-700",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Cybersecurity"
    },
    {
      name: "CompTIA A+ (220-1001 and 220-1002) Cert Prep",
      issuer: "LinkedIn Learning",
      icon: Laptop,
      color: "from-red-600 to-orange-600",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Cybersecurity"
    },
    {
      name: "Programming Foundations: Web Security",
      issuer: "LinkedIn Learning",
      icon: Code,
      color: "from-blue-600 to-cyan-600",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Cybersecurity"
    }
];

export const technicalCerts: CertType[] = [
    {
      name: "Machine Learning",
      issuer: "Stanford University",
      icon: Brain,
      color: "from-red-700 to-red-900",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "AI/ML"
    },
    {
      name: "DeepLearning.AI TensorFlow Developer",
      issuer: "DeepLearning.AI",
      icon: Brain,
      color: "from-orange-500 to-red-600",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "AI/ML"
    },
    {
      name: "Sequences, Time Series and Prediction",
      issuer: "DeepLearning.AI",
      icon: TrendingUp,
      color: "from-blue-500 to-purple-600",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "AI/ML"
    },
    {
      name: "Natural Language Processing in TensorFlow",
      issuer: "DeepLearning.AI",
      icon: Brain,
      color: "from-purple-500 to-pink-600",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "AI/ML"
    },
    {
      name: "Convolutional Neural Networks in TensorFlow",
      issuer: "DeepLearning.AI",
      icon: Brain,
      color: "from-indigo-500 to-purple-600",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "AI/ML"
    },
    {
      name: "Introduction to TensorFlow for AI, ML, and Deep Learning",
      issuer: "DeepLearning.AI",
      icon: Brain,
      color: "from-orange-500 to-yellow-500",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "AI/ML"
    },
    {
      name: "Complete Machine Learning",
      issuer: "Udemy",
      icon: Brain,
      color: "from-purple-500 to-indigo-600",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "AI/ML"
    },
    {
      name: "Machine learning",
      issuer: "Udemy",
      icon: Brain,
      color: "from-fuchsia-500 to-purple-600",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "AI/ML"
    },
    {
      name: "Artificial Intelligence",
      issuer: "Udemy",
      icon: Brain,
      color: "from-blue-500 to-indigo-600",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "AI/ML"
    },
    {
      name: "Data Science",
      issuer: "Udemy",
      icon: Database,
      color: "from-blue-600 to-cyan-600",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Data Science"
    },
    {
      name: "Data Analysis with R Programming",
      issuer: "Google",
      icon: TrendingUp,
      color: "from-blue-500 to-green-500",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Data Analytics"
    },
    {
      name: "Learning Data Analytics",
      issuer: "LinkedIn Learning",
      icon: TrendingUp,
      color: "from-cyan-500 to-blue-600",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Data Analytics"
    },
    {
      name: "Ai Fluency: Framework & Foundations",
      issuer: "Anthropic",
      icon: Brain,
      color: "from-orange-400 to-red-500",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "AI/ML"
    },
    {
      name: "AWS Cloud Architect",
      issuer: "Udemy",
      icon: Server,
      color: "from-orange-500 to-yellow-500",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Cloud Computing"
    },
    {
      name: "AWS Educate Getting Started with Compute",
      issuer: "Amazon Web Services (AWS)",
      icon: Server,
      color: "from-orange-500 to-red-500",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Cloud Computing"
    },
    {
      name: "Amazon Web Services",
      issuer: "Brainbench",
      icon: Cloud,
      color: "from-yellow-500 to-orange-500",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Cloud Computing"
    },
    {
      name: "DevOps",
      issuer: "Udemy",
      icon: Server,
      color: "from-blue-500 to-cyan-500",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Cloud Computing"
    },
    {
      name: "GoogleCloudReady Facilitator Program",
      issuer: "Google",
      icon: Cloud,
      color: "from-blue-500 to-red-500",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Cloud Computing"
    },
    {
      name: "Introduction to Enterprise Computing",
      issuer: "IBM",
      icon: Server,
      color: "from-blue-600 to-indigo-700",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Enterprise Computing"
    },
    {
      name: "Software Engineering and Agile software development",
      issuer: "Infosys",
      icon: Code,
      color: "from-blue-500 to-purple-600",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Software Engineering"
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
      name: "SQL fundamentals",
      issuer: "SoloLearn",
      icon: Database,
      color: "from-cyan-500 to-blue-600",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Database"
    },
    {
      name: "C++",
      issuer: "Udemy",
      icon: Code,
      color: "from-blue-600 to-indigo-600",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Programming"
    },
    {
      name: "Python Crash Course By Google",
      issuer: "Coursera",
      icon: Code,
      color: "from-yellow-500 to-blue-500",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Programming"
    },
    {
      name: "Javascript & JQuery for beginners",
      issuer: "Udemy",
      icon: Code,
      color: "from-yellow-500 to-orange-500",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Web Development"
    },
    {
      name: "Blockchain and Cryptocurrency",
      issuer: "Udemy",
      icon: Database,
      color: "from-purple-600 to-pink-600",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Blockchain"
    },
    {
      name: "Network Engineer",
      issuer: "Udemy",
      icon: Globe,
      color: "from-blue-600 to-cyan-600",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Networking"
    },
    {
      name: "Introduction to Microsoft Power Platform",
      issuer: "Microsoft",
      icon: Laptop,
      color: "from-blue-500 to-indigo-600",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Low-Code / No-Code"
    },
    {
      name: "Programming Foundations: Databases",
      issuer: "LinkedIn Learning",
      icon: Database,
      color: "from-indigo-500 to-purple-600",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Database"
    },
    {
      name: "Programming Foundations: Fundamentals",
      issuer: "LinkedIn Learning",
      icon: Code,
      color: "from-blue-500 to-cyan-600",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Programming"
    },
    {
      name: "Succeeding in Web Development: Full Stack and Front End",
      issuer: "LinkedIn Learning",
      icon: Globe,
      color: "from-green-500 to-blue-500",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Web Development"
    },
    {
      name: "IT Service Desk Careers and Certifications: First Steps",
      issuer: "LinkedIn Learning",
      icon: Laptop,
      color: "from-slate-500 to-slate-700",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "IT Support"
    },
    {
      name: "Remote Work Professional Certification - RWPC™",
      issuer: "Certiprof",
      icon: Award,
      color: "from-teal-500 to-blue-600",
      verificationUrl: "https://www.credly.com/badges/eb5826a1-7e54-4a3d-93a8-bf3a737a5619",
      category: "Professional Skills"
    },
    {
      name: "Tech Recruitment Certified Professional",
      issuer: "SkillPanel",
      icon: Megaphone,
      color: "from-purple-500 to-pink-600",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Recruitment"
    },
    {
      name: "Post Graduation Diploma In Computer applications",
      issuer: "Srinivasa institute of computer education",
      icon: Award,
      color: "from-blue-500 to-purple-600",
      verificationUrl: "https://www.linkedin.com/in/pallasivasai/details/certifications/",
      category: "Academic"
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
    }
];

