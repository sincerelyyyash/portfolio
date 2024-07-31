"use client"

import { motion } from 'framer-motion';

const ProjectSection = () => {
  return (
    <div className="pt-10">
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className="flex flex-wrap justify-center mt-4"
      >
        <h4 className="pt-10 relative z-10 text-lg md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-neutral-200 mt-4 mb-2">
          Projects
        </h4>
      </motion.div>
      <div>
      </div>
    </div>
  )
}

export default ProjectSection;
