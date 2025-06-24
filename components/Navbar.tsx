"use client";

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';

export function Navbar(): JSX.Element {
  const pathname = usePathname();
  const router = useRouter();
  const isProjectsPage = pathname === '/projects';

  const handleNavigation = (sectionId: string) => {
    if (isProjectsPage) {

      router.push(`/#${sectionId}`);
    } else {
      
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleHomeClick = () => {
    if (isProjectsPage) {
      router.push('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 py-6 px-4 md:px-8 lg:px-16 bg-black/80 backdrop-blur-md border-b border-neutral-800/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-end">
          <div className="flex space-x-8">
            <button
              onClick={handleHomeClick}
              className="text-neutral-400 hover:text-white transition-colors duration-200 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation('projects')}
              className="text-neutral-400 hover:text-white transition-colors duration-200 font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => handleNavigation('work')}
              className="text-neutral-400 hover:text-white transition-colors duration-200 font-medium"
            >
              Work
            </button>
            <button
              onClick={() => handleNavigation('skills')}
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

