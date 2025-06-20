"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ProjectCard } from '@/components/ProjectCard';
import { Projects } from '@/utils/projectsData';
import Footer from '@/components/Footer';
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

const ProjectsPage = () => {
  return (
    <main className="w-full min-h-screen">
      <div className="max-w-4xl px-4 lg:px-2 mx-auto">
        

        <div className="my-12">
          <Link 
            href="/"
            className="text-neutral-400 hover:text-white transition-colors duration-200 text-lg font-medium group mb-6 inline-block"
          >
            <span className="inline-block mr-2 transition-transform duration-200 group-hover:-translate-x-1">
              ←
            </span>
            Back to Home
          </Link>
        </div>

        
        <section className="w-full">
          {/* Section Header */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            All Projects
          </motion.h1>

          {/* Projects List */}
          <div className="space-y-0">
            {Projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: 'easeOut',
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}

export default ProjectsPage; 