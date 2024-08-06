export interface Experience {
  name: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: string[];
}

export const experiences: Experience[] = [
  {
    name: "Alice Johnson",
    title: "Frontend Developer",
    location: "San Francisco, CA",
    startDate: "June 2023",
    endDate: "Present",
    description: "Developed user-friendly web applications using React and TypeScript, improving performance by 40%.",
    skills: ["JavaScript", "React", "TypeScript", "CSS", "HTML"]
  },
  {
    name: "Bob Smith",
    title: "Backend Developer",
    location: "New York, NY",
    startDate: "January 2022",
    endDate: "December 2023",
    description: "Built and maintained RESTful APIs using Node.js and Express, ensuring high availability and scalability.",
    skills: ["Node.js", "Express", "MongoDB", "RESTful API", "GraphQL"]
  },
  {
    name: "Charlie Brown",
    title: "UI/UX Designer",
    location: "Austin, TX",
    startDate: "March 2021",
    endDate: "November 2022",
    description: "Designed intuitive user interfaces and user experiences for mobile and web applications, enhancing user satisfaction.",
    skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping", "Usability Testing"]
  },
  {
    name: "Dana Lee",
    title: "Software Engineer Intern",
    location: "Remote, India",
    startDate: "May 2024",
    endDate: "Present",
    description: "Built a Next.js based landing page for the company, resulting in a 30% increase in user engagement.",
    skills: ["JavaScript", "TypeScript", "Python", "WebSockets", "RESTful API", "Node.js", "Figma", "Next.js"]
  },
];
