"use client";
import React from 'react';
import WorkExCard from './WorkDetailCard';
import { experiences } from '../utils/WorkExData';
import { motion } from 'framer-motion';

function WorkSection() {
  return (
    <div className="pt-10 my-20" id='work'>
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
        <h4 className="py-10 relative z-10 text-lg md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-neutral-200 mt-4 mb-2">
          Work Experience
        </h4>

        {experiences.map((exp, index) => (
          <WorkExCard
            key={index}
            name={exp.name}
            title={exp.title}
            location={exp.location}
            startDate={exp.startDate}
            endDate={exp.endDate}
            description={exp.description}
            skills={exp.skills}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default WorkSection;

