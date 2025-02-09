"use client";
import { publications } from '@/utils/publicationData';
import React from 'react';
import PublicationCard from './PublicationCard';

export function PublicationSection() {
  return (
    <div id='work'>
      <h4 className="pt-10 relative z-10 text-lg md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-neutral-200 mt-4 mb-2">
        Publications
      </h4>

      <div className="flex flex-wrap justify-start gap-4">
        {publications.map((pub, index) => (
          <PublicationCard
            key={index}
            title={pub.title}
            journal={pub.journal}
            date={pub.date}
            link={pub.link}
            description={pub.description}
          />
        ))

        }
      </div>
    </div>
  );
}


