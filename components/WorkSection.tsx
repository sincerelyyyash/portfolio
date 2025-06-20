"use client";
import React from 'react';
import WorkExCard from './WorkDetailCard';
import { experiences } from '../utils/WorkExData';
import { motion } from 'framer-motion';

function WorkSection() {
  return (
    <section className="w-full px-4 md:px-8 " id='work'>
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Work Experience
          </h2>
        </div>

        {/* Experience List */}
        <div className="space-y-0">
          {experiences.map((exp, index) => (
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
              <WorkExCard
                name={exp.name}
                title={exp.title}
                location={exp.location}
                startDate={exp.startDate}
                endDate={exp.endDate}
                description={exp.description}
                skills={exp.skills}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkSection;

