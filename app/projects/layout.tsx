import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Yash Thakur",
  description: "Explore my full stack development projects built with React, Next.js, TypeScript, and modern web technologies.",
  openGraph: {
    title: "Projects - Yash Thakur",
    description: "Explore my full stack development projects built with React, Next.js, TypeScript, and modern web technologies.",
    url: "https://sincerelyyyash.com/projects", 
  },
  twitter: {
    title: "Projects - Yash Thakur",
    description: "Explore my full stack development projects built with React, Next.js, TypeScript, and modern web technologies.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 