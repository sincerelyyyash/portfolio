interface Publication {
  title: string;
  journal: string;
  date: string;
  description: string;
  link: string;
}


export const publications: Publication[] = [
  {
    "title": "Integrated Framework Of AES, RSA And Steganography Technique For Data Security",
    "journal": "IOSR Journal of Computer Engineering (IOSR-JCE)",
    "date": "June, 2023",
    "description": "Developed a high-security encryption framework combining AES, RSA, and Steganography after extensive research on encryption techniques. Built a Python program utilizing AES and RSA. The paper includes encryption methods, literature review, and the proposed framework.",
    "link": "https://www.iosrjournals.org/iosr-jce/papers/Vol25-issue3/Ser-2/E2503023340.pdf",
  },{
    "title": "Optimizing Stock Portfolio Allocation with Deep Reinforcement Learning",
    "journal": "Kronika Journal",
    "date": "May, 2025",
    "description": "Developed a DRL-based stock portfolio optimization framework using PPO, A2C, and SAC, focusing on risk-adjusted returns. Built a custom OpenAI Gym environment with transaction costs and technical indicators. PPO showed strong performance in managing risk and drawdowns.",
    "link": "https://kronika.ac/wp-content/uploads/19-KKJ2564.pdf",
  }
]
