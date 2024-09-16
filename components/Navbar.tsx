
"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

export function Navbar(): JSX.Element {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 flex items-center justify-end p-4">
      <div className="flex space-x-6 bg-black rounded-full p-2 px-4 shadow-lg border border-white/[0.40]">
        <button
          onClick={() => handleNavigation('/home')}
          className="text-teal-500 font-bold hover:text-white transition duration-300"
        >
          Home
        </button>
        <button
          onClick={() => handleNavigation('/blog')}
          className="text-white hover:text-teal-500 transition duration-300"
        >
          Blog
        </button>
        <button
          onClick={() => handleNavigation('/projects')}
          className="text-white hover:text-teal-500 transition duration-300"
        >
          Projects
        </button>
      </div>
    </div>
  );
}

