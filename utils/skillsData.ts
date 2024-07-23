
export interface Skill {
  skill: string;
  img: string;
}

export interface SkillsData {
  [key: string]: Skill[];
}

export const skills = {
  default: [
    { skill: 'NextJS', img: '/assets/logo/nextjs-icon.png' },
    { skill: 'React', img: '/assets/logo/react.png' },
    { skill: 'PostgreSQL', img: '/assets/logo/postgresql.png' },
    { skill: 'MongoDB', img: '/assets/logo/mongodb-icon.png' },
    { skill: 'NodeJS', img: '/assets/logo/nodejs.png' },
    { skill: 'Typescript', img: '/assets/logo/typescript-icon.png' },
    { skill: 'Javascript', img: '/assets/logo/javascript.png' },
    { skill: 'Turborepo', img: '/assets/logo/turborepo-icon.png' },
    { skill: 'Github', img: '/assets/logo/github-icon.png' },
    { skill: 'Docker', img: '/assets/logo/docker-icon.png' },
    { skill: 'AWS', img: '/assets/logo/aws.png' },
    { skill: 'Java', img: '/assets/logo/java.png' },
    { skill: 'Python', img: '/assets/logo/python.png' },
  ],
  frontend: [
    { skill: 'React', img: '/assets/logo/react.png' },
    { skill: 'NextJS', img: '/assets/logo/nextjs-icon.png' },
    { skill: 'Flutter', img: '/assets/logo/flutter.png' },
    { skill: 'Tailwind CSS', img: '/assets/logo/tailwindcss-icon.png' },
    { skill: 'ShadCN', img: '/assets/logo/shadcn.png' },
    { skill: 'Aceternity', img: '/assets/logo/aceternity.png' },
  ],
  backend: [
    { skill: 'Node.js', img: '/assets/logo/nodejs.png' },
    { skill: 'Express.js', img: '/assets/logo/express.png' },
    { skill: 'Cloudflare Workers', img: '/assets/logo/cloudflare-workers.png' },
    { skill: 'Firebase', img: '/assets/logo/firebase.png' },
  ],
  database: [
    { skill: 'MongoDB', img: '/assets/logo/mongodb-icon.png' },
    { skill: 'PostgreSQL', img: '/assets/logo/postgresql.png' },
    { skill: 'MySQL', img: '/assets/logo/mysql-icon.png' },
    { skill: 'Firebase', img: '/assets/logo/firebase.png' },
  ],
  tools: [
    { skill: 'Docker', img: '/assets/logo/docker-icon.png' },
    { skill: 'Git', img: '/assets/logo/git-icon.png' },
    { skill: 'Github', img: '/assets/logo/github-icon.png' },
    { skill: 'Vscode', img: '/assets/logo/visual-studio-code.png' },
    { skill: 'Neovim', img: '/assets/logo/neovim.png' },
    { skill: 'Bash', img: '/assets/logo/bash.png' },
    { skill: 'Prisma', img: '/assets/logo/prisma.png' },
  ],
  devops: [
    { skill: 'AWS', img: '/assets/logo/aws.png' },
    { skill: 'Cloudflare', img: '/assets/logo/cloudflare-icon.png' },
    { skill: 'CI/CD', img: '/assets/logo/ci-cd.png' },
  ],
};

