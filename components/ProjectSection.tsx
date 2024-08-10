
"use client";

import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { Projects } from '@/utils/projectsData';

const ProjectSection = () => {
  return (
    <div className="pt-10 my-20" id="projects">
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className="flex flex-col items-center text-center"
      >
        <h4 className="text-lg md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-neutral-200 mb-8">
          Projects
        </h4>
      </motion.div>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className="flex flex-wrap justify-center gap-6"
      >
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          {Projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectSection;

