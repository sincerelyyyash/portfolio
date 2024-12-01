
export interface Skill {
  skill: string;
  img: string;
}

export interface SkillsData {
  [key: string]: Skill[];
}

export const skills = {
  default: [
    { skill: 'NextJS', img: '/assets/logo/nextjs-svgrepo-com.svg' },
    { skill: 'React', img: '/assets/logo/react-svgrepo-com.svg' },
    { skill: 'Django', img: '/assets/logo/react-svgrepo-com.svg' },
    { skill: 'PostgreSQL', img: '/assets/logo/postgresql-svgrepo-com.svg' },
    { skill: 'MongoDB', img: '/assets/logo/mongodb-svgrepo-com.svg' },
    { skill: 'NodeJS', img: '/assets/logo/nodejs-svgrepo-com.svg' },
    { skill: 'Typescript', img: '/assets/logo/typescript-official-svgrepo-com.svg' },
    { skill: 'Javascript', img: '/assets/logo/javascript-svgrepo-com.svg' },
    { skill: 'Github', img: '/assets/logo/github-svgrepo-com.svg' },
    { skill: 'Docker', img: '/assets/logo/docker-svgrepo-com.svg' },
    { skill: 'AWS', img: '/assets/logo/aws-svgrepo-com.svg' },
    { skill: 'Java', img: '/assets/logo/java-svgrepo-com.svg' },
    { skill: 'Python', img: '/assets/logo/python-svgrepo-com.svg' },
  ],
  frontend: [
    { skill: 'React', img: '/assets/logo/react-svgrepo-com.svg' },
    { skill: 'NextJS', img: '/assets/logo/nextjs-svgrepo-com.svg' },
    { skill: 'Flutter', img: '/assets/logo/flutter-svgrepo-com.svg' },
    { skill: 'TailwindCSS', img: '/assets/logo/tailwind-svgrepo-com.svg' },
  ],
  backend: [
    { skill: 'Node.js', img: '/assets/logo/nodejs-svgrepo-com.svg' },
    { skill: 'Express.js', img: '/assets/logo/express-svgrepo-com.svg' },
    { skill: 'Workers', img: '/assets/logo/cloudflare-svgrepo-com.svg' },
    { skill: 'Firebase', img: '/assets/logo/firebase-svgrepo-com.svg' },
  ],
  database: [
    { skill: 'MongoDB', img: '/assets/logo/mongodb-svgrepo-com.svg' },
    { skill: 'PostgreSQL', img: '/assets/logo/postgresql-svgrepo-com.svg' },
    { skill: 'Firebase', img: '/assets/logo/firebase-svgrepo-com.svg' },
  ],
  tools: [
    { skill: 'Docker', img: '/assets/logo/docker-svgrepo-com.svg' },
    { skill: 'Git', img: '/assets/logo/git-svgrepo-com.svg' },
    { skill: 'Github', img: '/assets/logo/github-svgrepo-com.svg' },
    { skill: 'Vscode', img: '/assets/logo/vs-code-svgrepo-com.svg' },
    { skill: 'Neovim', img: '/assets/logo/neovim-svgrepo-com.svg' },
    { skill: 'Bash', img: '/assets/logo/bash-icon-svgrepo-com.svg' },
    { skill: 'Prisma', img: '/assets/logo/prisma-svgrepo-com.svg' },
  ],
  devops: [
    { skill: 'AWS', img: '/assets/logo/aws-svgrepo-com.svg' },
    { skill: 'Cloudflare', img: '/assets/logo/cloudflare-svgrepo-com.svg' },
    { skill: 'CI/CD', img: '/assets/logo/ci-cd-svgrepo-com.svg' },
  ],
};

