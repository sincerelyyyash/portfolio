"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../components/techIconCard';
import { skills, Skill } from '../utils/skillsData';

type SkillCategory = keyof typeof skills;

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>('default');

  const handleCategoryChange = (category: SkillCategory) => {
    if (category === selectedCategory) {
      setSelectedCategory('default');
    } else {
      setSelectedCategory(category);
    }
  };

  const displayedSkills: Skill[] = skills[selectedCategory] || [];

  return (
    <div className="pt-10" id='skills'>
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
          My Tech Stack
        </h4>
      </motion.div>

      <div className="relative flex flex-col items-center">
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
          <div className="flex flex-wrap justify-center bg-black z-10 py-4 px-2 w-full">
            <div className="flex flex-wrap justify-center space-x-2 md:space-x-4">
              {Object.keys(skills).filter((category) => category !== 'default').map((category) => (
                <div key={category} className="relative inline-flex items-center">
                  <button
                    onClick={() => handleCategoryChange(category as SkillCategory)}
                    className={`flex items-center rounded-full px-3 py-1 font-medium transition-colors duration-300 ${selectedCategory === category
                      ? 'bg-gray-800 text-blue-500'
                      : 'bg-gradient-to-b from-neutral-200 to-neutral-600 text-transparent bg-clip-text'
                      }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                    {selectedCategory === category && (
                      <span
                        className="ml-2 text-white text-xl cursor-pointer mb-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCategoryChange(category as SkillCategory);
                        }}
                      >
                        x
                      </span>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="pt-8" />

        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4" // Adjust the grid layout here
        >
          {displayedSkills.map((skill, index) => (
            <Card key={index} name={skill.skill} imagePath={skill.img} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;

