"use client";
import { publications } from '@/utils/publicationData';
import React from 'react';
import PublicationCard from './PublicationCard';
import { motion } from 'framer-motion';

export function PublicationSection() {
  return (
    <section className="w-full px-4 md:px-8 lg: " id='publications'>
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Publications
          </h2>
        </div>

        {/* Publications List */}
        <div className="space-y-0">
          {publications.map((pub, index) => (
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
              <PublicationCard
                title={pub.title}
                journal={pub.journal}
                date={pub.date}
                link={pub.link}
                description={pub.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


