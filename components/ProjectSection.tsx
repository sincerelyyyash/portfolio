"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ProjectCard } from './ProjectCard';
import { Projects } from '@/utils/projectsData';

const ProjectSection = () => {
  // Show only first 4 projects
  const displayedProjects = Projects.slice(0, 4);

  return (
    <section id='projects' className="w-full px-4 md:px-8 ">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Projects
          </h2>
          
          <Link 
            href="/projects"
            className="text-neutral-400 hover:text-white transition-colors duration-200 text-lg font-medium group"
          >
            See All
            <span className="inline-block ml-2 transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Projects List */}
        <div className="space-y-0">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: 'easeOut',
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectSection;

