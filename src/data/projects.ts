import saiGptIcon from '@/assets/sai-gpt-icon.png';
import saiEncryptionIcon from '@/assets/sai-encryption-icon.png';
import sSecretChatIcon from '@/assets/s-secret-chat-icon.png';

export interface ProjectItem { title: string; description: string; technologies: string[]; github?: string; demo?: string; color: string; icon: string; isImage?: boolean; }

export const projects: ProjectItem[] = [
    {
      title: "DDoS Attack Detection System (Sai algorithm)",
      description: "A comprehensive machine learning solution for detecting Distributed Denial of Service (DDoS) attacks using my own SAI algorithm with advanced data analysis techniques. Achieves approximately 99% accuracy in threat detection.",
      technologies: ["Python", "Machine Learning", "SAI Algorithm", "Jupyter Notebook", "Cybersecurity"],
      github: "https://github.com/pallasivasai/Comprehensive-Approach-to-Detecting-DDoS-Attacks-using-Machine-Learning",
      demo: "https://colab.research.google.com/github/pallasivasai/Comprehensive-Approach-to-Detecting-DDoS-Attacks-using-Machine-Learning/blob/main/project.ipynb",
      color: "from-red-500 to-orange-500",
      icon: "🔐"
    },
    {
      title: "SAI-Encryption-Decryption Algorithm (Always O(1))",
      description: "A revolutionary encryption and decryption algorithm that achieves constant O(1) time complexity for all operations. This groundbreaking approach ensures consistent performance regardless of data size, making it ideal for high-performance cryptographic applications where speed and efficiency are critical.",
      technologies: ["Python", "Cryptography", "Algorithm Design", "Data Security"],
      github: "https://github.com/pallasivasai/SAI-Encryption-Decryption-Algorithm",
      demo: "https://colab.research.google.com/drive/1r97QtUcIuUiji6DTdmZNPrcfKyfskmEI?usp=sharing",
      color: "from-emerald-500 to-teal-600",
      icon: saiEncryptionIcon,
      isImage: true
    },
    {
      title: "SAI-GPT",
      description: "An AI-powered devotional assistant designed for everyone, including non-educational persons, to explore and learn about Grandhas, spiritual texts, devotional questions, and knowledge about Hindu gods. Built to make spiritual wisdom accessible to all through conversational AI.",
      technologies: ["TypeScript", "React", "AI", "Lovable Cloud", "Tailwind CSS"],
      github: "https://github.com/pallasivasai/sai-gpt",
      demo: "https://sai-gpt.lovable.app/",
      color: "from-amber-500 to-orange-600",
      icon: saiGptIcon,
      isImage: true
    },
    {
      title: "SAI Game",
      description: "A fascinating math magic trick game that demonstrates algebraic principles. You choose a number, the program performs a series of arithmetic operations (doubling, adding an imaginary number, halving, and subtracting), and mathematically predicts the result will always be half your imaginary number - showcasing Python programming and mathematical thinking.",
      technologies: ["Python", "Game Development", "Jupyter Notebook"],
      github: "https://github.com/pallasivasai/My_own_game",
      demo: "https://colab.research.google.com/drive/1edrBGixKoIsSJ7DbaXo8S9Yyt9nDChdj?usp=sharing",
      color: "from-purple-600 to-blue-600",
      icon: "🎮"
    },
    {
      title: "SAI Search Algorithm",
      description: "An innovative perfect hashing algorithm that implements a two-level universal hashing scheme with cryptographic security. Uses SHA-256 and collision-free data structures to achieve O(1) lookup time. Supports bidirectional search - find values by keys or keys by values. Features include cryptographic randomness and guaranteed collision-free storage, making it ideal for high-performance data retrieval applications.",
      technologies: ["Python", "Algorithm Design", "Data Structures", "Cryptography"],
      github: "https://github.com/pallasivasai/Searching_Algorithm_By_Me",
      demo: "https://colab.research.google.com/drive/1zjPs60ea85VchQRWU1IQjpIA3ejoRAFl?usp=sharing",
      color: "from-cyan-500 to-blue-600",
      icon: "🔍"
    },
    {
      title: "SAIBANK",
      description: "A revolutionary banking system featuring a unique 30-minute payment reversal mechanism using SQL triggers. If a wrong payment is made, it can be automatically reversed within 30 minutes through intelligent trigger-based transaction monitoring. This innovative concept demonstrates advanced database automation, time-based validation, and seamless rollback functionality for enhanced banking security.",
      technologies: ["SQL Triggers", "Database", "MySQL", "TypeScript", "React", "Tailwind CSS", "Lovable Cloud"],
      github: "https://github.com/pallasivasai/saibank",
      demo: "https://saibank.lovable.app/",
      color: "from-teal-500 to-cyan-600",
      icon: "🏦"
    },
    {
      title: "SIVA Trade AI",
      description: "An AI-powered trading assistant built to help Telugu-speaking users make informed stock market decisions. Simply enter a share name and time frame, and the assistant predicts potential profits with clear entry levels, target prices, stop-loss recommendations, confidence scores, supporting reasons, and risk warnings.",
      technologies: ["TypeScript", "React", "AI", "Lovable Cloud", "Tailwind CSS", "Trading Analysis"],
      github: "https://github.com/pallasivasai/siva-trade-ai",
      demo: "https://siva-trade-ai.lovable.app/",
      color: "from-emerald-600 to-green-500",
      icon: "📈"
    },
    {
      title: "Sai CRUD Operations Lab",
      description: "An interactive learning lab that teaches database CRUD operations in Telugu, so anyone can understand them easily. First you choose your own columns/fields, and the form plus table are generated automatically. Then when you press Insert, Fetch, Update or Delete, an animation shows exactly how your data travels from the browser to the database, along with the real SQL query running behind the scenes.",
      technologies: ["TypeScript", "React", "SQL", "Database Education", "Telugu Learning", "Tailwind CSS", "Lovable Cloud"],
      github: "https://github.com/pallasivasai/sai-crudop",
      demo: "https://sai-crudop.lovable.app",
      color: "from-violet-500 to-indigo-600",
      icon: "🗄️"
    },
    {
      title: "S-Secret Chat",
      description: "A private and secure chat application designed exclusively for couples who want complete privacy in their conversations. Each user sets their own password to protect their inbox—anyone wanting to message them must enter the correct password before the message box opens. Chat one-on-one with your loved one without any doubts or worries. Features end-to-end encryption ensuring only you and your partner can read messages, with password-protected access and a clean, intimate interface built for trust and love.",
      technologies: ["TypeScript", "React", "End-to-End Encryption", "Lovable Cloud", "Tailwind CSS", "Real-time Messaging"],
      github: "https://github.com/pallasivasai/sai-web",
      demo: "https://sai-web.lovable.app",
      color: "from-pink-500 to-rose-600",
      icon: sSecretChatIcon,
      isImage: true
    },
    {
      title: "Password Cracker",
      description: "A comprehensive Python-based password cracking tool demonstrating multiple attack methodologies including brute force, dictionary attacks, and hash cracking techniques. Features customizable character sets, wordlist integration, and support for common hash algorithms (MD5, SHA-1, SHA-256). Built for educational purposes to help cybersecurity enthusiasts understand password vulnerabilities and the importance of strong password policies.",
      technologies: ["Python", "Cybersecurity", "Hash Algorithms", "Brute Force", "Educational"],
      github: "https://github.com/pallasivasai/Password-Cracker",
      demo: "https://colab.research.google.com/drive/1Y2qRXzUFSR_JgRjYLc1gRdiq9Iu3unN2?usp=sharing",
      color: "from-red-600 to-pink-600",
      icon: "🔓"
    },
    {
      title: "Cyber Awareness Quiz By P Siva Sai",
      description: "An interactive cybersecurity awareness quiz application with a unique fullscreen enforcement feature—once the quiz starts, users cannot escape fullscreen mode until completion. This ensures focused learning and prevents cheating during assessments. Designed to educate users about cyber threats, safe online practices, and security best practices through engaging questions.",
      technologies: ["JavaScript", "HTML", "CSS", "Fullscreen API", "Cybersecurity Education"],
      github: "https://github.com/pallasivasai/s-quiz",
      demo: "https://s-quiz.lovable.app",
      color: "from-blue-600 to-indigo-600",
      icon: "🛡️"
    },
    {
      title: "Instagram Phishing Attack (Learning)",
      description: "An educational demonstration of phishing attack techniques for cybersecurity awareness and ethical hacking learning purposes. Features GitHub API integration to store captured data directly to a GitHub repository, showcasing API usage and data handling.",
      technologies: ["Security Research", "Ethical Hacking", "HTML", "CSS", "JavaScript", "GitHub API"],
      github: "https://github.com/Psivasai970/Psivasai970.github.io",
      demo: "https://psivasai970.github.io/",
      color: "from-orange-600 to-red-600",
      icon: "🎣"
    },
    {
      title: "Authentication System with Database",
      description: "A complete signup and login system with working database integration, featuring secure user authentication and session management.",
      technologies: ["HTML", "PHP", "MySQL", "Authentication"],
      github: "https://github.com/pallasivasai/Signup-login-system-with-working-data-base",
      color: "from-purple-500 to-pink-500",
      icon: "🔑"
    },
    {
      title: "Vote Management System",
      description: "A voting system application built with PHP for managing elections and polls with database-driven functionality.",
      technologies: ["PHP", "MySQL", "Database Design"],
      github: "https://github.com/pallasivasai/votesystem",
      color: "from-indigo-500 to-blue-500",
      icon: "🗳️"
    },
    {
      title: "Recipe Ideas App",
      description: "A modern web application that helps users discover and explore various recipe ideas with an intuitive and responsive interface.",
      technologies: ["TypeScript", "React", "Tailwind CSS"],
      github: "https://github.com/pallasivasai/Recipe-Ideas-App",
      demo: "https://recipe-ideas-app-for-ss4q.bolt.host/",
      color: "from-green-500 to-emerald-500",
      icon: "🍳"
    },
    {
      title: "Book Finder Application",
      description: "A specialized application for college students to easily search, discover, and find books relevant to their courses and interests.",
      technologies: ["TypeScript", "React", "API Integration"],
      github: "https://github.com/pallasivasai/Book-Finder-Application-for-College-Students",
      demo: "https://book-finder-applicat-v34g.bolt.host/",
      color: "from-blue-500 to-cyan-500",
      icon: "📚"
    }
];
