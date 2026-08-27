export interface EducationItem { degree: string; institution: string; year: string; cgpa: string; status: string; color: string; }

export const educationData: EducationItem[] = [
    {
      degree: "MCA (Master of Computer Applications)",
      institution: "KL University",
      year: "Completed",
      cgpa: "9.45 CGPA",
      status: "Completed",
      color: "from-purple-500 to-blue-600"
    },
    {
      degree: "B.Sc (Computer Science)",
      institution: "Chaithanya Bharathi Degree College",
      year: "Completed",
      cgpa: "7.02 GPA",
      status: "Completed",
      color: "from-blue-500 to-green-500"
    },
    {
      degree: "Intermediate (Inter)",
      institution: "College",
      year: "Completed",
      cgpa: "6.0 GPA",
      status: "Completed",
      color: "from-green-500 to-yellow-500"
    },
    {
      degree: "SSC (Secondary School Certificate)",
      institution: "B ZP High School",
      year: "Completed",
      cgpa: "5.5 GPA",
      status: "Completed",
      color: "from-orange-500 to-red-500"
    }
];
