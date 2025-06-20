"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { skills, Skill } from '../utils/skillsData';

const Skills = () => {
  const displayedSkills: Skill[] = skills['default'] || [];

  return (
    <section className="w-full px-2 md:px-8 mb-4 " id='skills'>
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Skills
          </h2>
        </div>

        {/* Skills List */}
        <div className="flex flex-wrap gap-4">
          {displayedSkills.map((skill, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: 'easeOut',
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-neutral-400 text-lg font-medium hover:text-white transition-colors duration-200"
            >
              {skill.skill}
            </motion.span>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-neutral-800 mt-8" />
      </div>
    </section>
  );
};
export default Skills;

