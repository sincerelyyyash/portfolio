
"use client";

import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { Projects } from '@/utils/projectsData';

const ProjectSection = () => {
  return (
    <div id='projects'>
      {/* <motion.div */}
      {/*   initial={{ opacity: 0.5, y: 100 }} */}
      {/*   whileInView={{ opacity: 1, y: 0 }} */}
      {/*   transition={{ */}
      {/*     delay: 0.1, */}
      {/*     duration: 0.5, */}
      {/*     ease: 'easeInOut', */}
      {/*   }} */}
      {/*   className="flex flex-wrap justify-center mt-4" */}
      {/* > */}
      <h4 className="pt-10 relative z-10 text-lg md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-neutral-200 mt-4 mb-2">
        Projects
      </h4>
      {/* </motion.div> */}
      {/* <motion.div */}
      {/*   initial={{ opacity: 0.5, y: 100 }} */}
      {/*   whileInView={{ opacity: 1, y: 0 }} */}
      {/*   transition={{ */}
      {/*     delay: 0.1, */}
      {/*     duration: 0.5, */}
      {/*     ease: 'easeInOut', */}
      {/*   }} */}
      {/*   className="flex flex-wrap justify-center mt-4" */}
      {/* > */}
      <div className="max-w-3xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
        {Projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      {/* </motion.div> */}
    </div>
  )
}

export default ProjectSection;

