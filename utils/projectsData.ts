
export interface Projects {
  projectName: string,
  imgSrc: string;
  deployedLink: string;
  repoLink: string;
  description: string;
  techStack: string[];

}

export const Projects = [
  {
    projectName: "Resume-AI",
    imgSrc: "/assets/images/sneakheads.png",
    deployedLink: "https://resume-ai.in",
    repoLink: "https://github.com/sincerelyyyash/resume-ai",
    description: "Resume-AI is an AI-powered agent that customizes your resume to match any job description, making job applications faster and more effective.",
    techStack: ["NextJS", "FastAPI", "PostgreSQL", "Langchain", "Gemini AI"],
  },
  {
    projectName: "Test.ai",
    imgSrc: "/assets/images/sneakheads.png",
    deployedLink: "https://test-ai.xyz",
    repoLink: "https://github.com/sincerelyyyash/test.ai",
    description: "Test.ai is an AI-driven platform that personalizes quizzes, provides real-time feedback, and tailors recommendations to enhance learning.",
    techStack: ["NextJS", "Gemini AI", "MongoDB",],
  }, {
    projectName: "Gitbot (like CodeRabbit)",
    imgSrc: "/assets/images/sneakheads.png",
    deployedLink: "https://github.com/apps/synapticbot",
    repoLink: "https://github.com/sincerelyyyash/gitbot",
    description: "gitbot is an AI-powered GitHub Assistant that automates Q&A, analyzes issues, and reviews and summarizes pull requests. It is designed for modularity, production-readiness, and easy extensibility.",
    techStack: ["FastAPI", "LangChain", "ChromaDB", "Gemini LLM", "Python"],
  },
  {
    projectName: "SneakHeads",
    imgSrc: "/assets/images/sneakheads.png",
    deployedLink: "https://sneakheads.netlify.app",
    repoLink: "https://github.com/sincerelyyyash/sneak_heads",
    description: "Full Stack Sneaker E-Commerce Web App built using MERN",
    techStack: ["React", "Express", "NodeJS", "MongoDB", "Cloudinary"],
  }, {
    projectName: "Transsacto",
    imgSrc: "/assets/images/transsacto.png",
    deployedLink: "https://transsacto.vercel.app/",
    repoLink: "https://github.com/sincerelyyyash/bank-app",
    description: "A Full Stack secure banking application.",
    techStack: ["Node.js", "Express", "PostgreSQL", "Prisma"],
  }, 
  {
    projectName: "Cryptic Wallet",
    imgSrc: "/assets/images/cryptic.png",
    deployedLink: "https://cryptic-wallet.vercel.app",
    repoLink: "https://github.com/sincerelyyyash/cryptic-wallet",
    description: "A Web Based Hierarchical Deterministic (HD) Wallet Built With NextJS",
    techStack: ["NextJS", "TypeScript", "Framer Motion", "Web3"],
  },
  // {
  //   projectName: "PayU",
  //   imgSrc: "/assets/images/Wallet.png",
  //   deployedLink: "https://example.com",
  //   repoLink: "https://github.com/sincerelyyyash/wallet-app",
  //   description: "Wallet App built using NextJS & Turborepo with Prisma, Postgres and TypeScript",
  //   techStack: ["NextJS", "Turborepo", "Prisma", "TypeScript", "Tailwind CSS"],
  // },
  {
    projectName: "Anonymous Opinions",
    imgSrc: "/assets/images/opinions.png",
    deployedLink: "https://anonymous-opinions.vercel.app",
    repoLink: "https://github.com/sincerelyyyash/anonymous-opinions",
    description: "Full Stack Web App built with NextJS for sharing Anonymous Feedback",
    techStack: ["Next.js", "TypeScript", "MongoDB", "NextAuth"],
  },
  {
    projectName: "Masonry Grid Portfolio with Deeplinking",
    imgSrc: "/assets/images/opinions.png",
    deployedLink: "https://deeplink-masonry.vercel.app/",
    repoLink: "https://github.com/sincerelyyyash/DeepLink-Masonry",
    description: "Portfolio with Masonry Grid Design with DeepLinking.",
    techStack: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
  },
  // {
  //   projectName: "NexFlow",
  //   imgSrc: "/assets/images/opinions.png",
  //   deployedLink: "https://nex-flow.vercel.app/",
  //   repoLink: "https://github.com/sincerelyyyash/NexFlow",
  //   description: "Workflow Builder with ReactFlow",
  //   techStack: ["Next.js", "ReactFlow", "TypeScript", "Framer Motion", "Tailwind CSS", "MongoDB"],
  // },
  
  // {
  //   projectName: "Portfolio",
  //   imgSrc: "/assets/images/portfolio.png",
  //   deployedLink: "https://yashthakur.dev",
  //   repoLink: "https://github.com/sincerelyyyash/portfolio",
  //   description: "My Personal Portfolio Website built using NextJS, TypeScript and Framer Motion",
  //   techStack: ["Next.js", "TypeScript", "Framer Motion", "Aceternity UI"],
  // },

];
