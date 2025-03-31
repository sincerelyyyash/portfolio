export interface Experience {
  name: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  skills: string[];
}

export const experiences: Experience[] =
  [
    {
      "name": "Stealth Startup",
      "title": "Full Stack Engineering Intern",
      "location": "Remote",
      "startDate": "March 2025",
      "endDate": "Present",
      "description": [
        "• Architecting & developing a full-stack MVP from scratch, designing scalable system architecture and implementing backend, frontend, and mobile applications for seamless cross-platform functionality.",
        "• Integrating a core Machine Learning algorithm into the system, optimizing data flow, model deployment, and API interactions to enhance product intelligence.",
        "• Leading end-to-end development, managing backend services, frontend interfaces, API integrations, and cloud deployment to ensure a high-performance, scalable, and production-ready solution."
      ],
      "skills": ["FastAPI", "NextJS", "React-Native", "Python", "Machine Learning", "Postgres"]
    },
    {
      "name": "Cogent Web Services",
      "title": "Software Developer Intern",
      "location": "Remote",
      "startDate": "November 2023",
      "endDate": "April 2024",
      "description": [
        "• Delivered high availability and scalability for RESTful APIs.",
        "• Improved API response efficiency by 25% and reduced downtime by 15%.",
        "• Achieved these results by developing with Node.js and Express, integrating Flutter for mobile applications, and applying Agile practices for effective project management."
      ],
      "skills": ["Node.js", "Express", "React", "RESTful API", "Flutter"]
    },
    {
      "name": "Aquaria Solutions",
      "title": "Software Developer Intern",
      "location": "Remote",
      "startDate": "April 2023",
      "endDate": "August 2023",
      "description": [
        "• Achieved significant improvements in web application performance and delivery rate.",
        "• Performance increased by 40%, and delivery rate enhanced by 30%.",
        "• Accomplished this through end-to-end development using Flutter and React, combined with Agile methodologies to streamline processes."
      ],
      "skills": ["Flutter", "React", "Firebase", "Java", "REST API"]
    },
  ]

