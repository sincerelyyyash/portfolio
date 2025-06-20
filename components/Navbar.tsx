"use client";

import React from 'react';

export function Navbar(): JSX.Element {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 py-6 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-end">
          <div className="flex space-x-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-neutral-400 hover:text-white transition-colors duration-200 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-neutral-400 hover:text-white transition-colors duration-200 font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="text-neutral-400 hover:text-white transition-colors duration-200 font-medium"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-neutral-400 hover:text-white transition-colors duration-200 font-medium"
            >
              Skills
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

