
export interface Projects {
  projectName: string,
  imgSrc: string;
  deployedLink: string;
  repoLink: string;
  description: string;
  techStack: string[];

}

export const Projects = [{
  projectName: "SneakHeads",
  imgSrc: "/assets/images/sneakheads.png",
  deployedLink: "https://sneakheads.netlify.app",
  repoLink: "https://github.com/sincerelyyyash/sneak_heads",
  description: "Full Stack Sneaker E-Commerce Web App built using MERN",
  techStack: ["React", "Express", "NodeJS", "MongoDB", "Cloudinary"],
},
{
  projectName: "PayU",
  imgSrc: "/assets/images/Wallet.png",
  deployedLink: "https://example.com",
  repoLink: "https://github.com/sincerelyyyash/wallet-app",
  description: "Wallet App built using NextJS & Turborepo with Prisma, Postgres and TypeScript",
  techStack: ["NextJS", "Turborepo", "Prisma", "TypeScript", "Tailwind CSS"],
},
{
  projectName: "Anonymous Opinions",
  imgSrc: "/assets/images/opinions.png",
  deployedLink: "https://anonymous-opinions.vercel.app",
  repoLink: "https://github.com/sincerelyyyash/anonymous-opinions",
  description: "Full Stack Web App built with NextJS for sharing Anonymous Feedback",
  techStack: ["Next.js", "TypeScript", "MongoDB", "NextAuth"],
},
{
  projectName: "Portfolio",
  imgSrc: "/assets/images/portfolio.png",
  deployedLink: "https://yashthakur.dev",
  repoLink: "https://github.com/sincerelyyyash/portfolio",
  description: "My Personal Portfolio Website built using NextJS, TypeScript and Framer Motion",
  techStack: ["Next.js", "MongoDB", "NextAuth", "TypeScript", "Framer Motion"],
},

];
