
"use client";

import React from 'react';
import { skills, Skill } from '../utils/skillsData';

const Skills = () => {
  const displayedSkills: Skill[] = skills['default'] || [];

  return (
    <div className="pt-2" id='skills'>
      <h4 className="text-lg md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-neutral-200 mt-4 mb-2">
        Skills
      </h4>

      <div className=" flex flex-wrap gap-2 justify-center">
        {displayedSkills.map((skill, index) => (
          <span
            key={index}
            className="bg-zinc-900 text-white px-3 py-1 text-md rounded-full italic"
          >
            {skill.skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;

