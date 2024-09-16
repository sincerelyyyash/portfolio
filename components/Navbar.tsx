
"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

export function Navbar(): JSX.Element {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="fixed top-0 inset-x-0 max-w-3xl mx-auto z-50 p-4 bg-black rounded-full flex items-center justify-end">
      <div className="flex flex-col h-full justify-between">
        <div className="flex space-x-6 bg-black rounded-full p-2 px-4 shadow-lg border border-white/[0.40]">
          <button
            onClick={() => handleNavigation('/')}
            className="text-blue-500 font-bold hover:text-white transition duration-300"
          >
            Home
          </button>
          <button
            onClick={() => handleNavigation('#projects')}
            className="text-white hover:text-blue-500 transition duration-300"
          >
            Projects
          </button>
          <button
            onClick={() => handleNavigation('#work')}
            className="text-white hover:text-blue-500 transition duration-300"
          >
            Work
          </button>
        </div>
      </div>
    </div>
  );
}

