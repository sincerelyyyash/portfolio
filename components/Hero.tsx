
"use client";
import React, { useState } from 'react';
import { GithubIcon, TwitterIcon, EmailIcon, LinkedInIcon, LeetCodeIcon } from '@/utils/Icons';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const [tooltip, setTooltip] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setTooltip('Email copied');
      setTimeout(() => setTooltip(null), 500);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  return (
    <section className="flex flex-col md:flex-row justify-between w-full min-h-[15rem] space-y-4 md:space-y-0 md:space-x-8 p-8 mt-20">

      <div className="block md:hidden w-full flex justify-start mb-4">
        <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-md overflow-hidden">
          <Image
            src="/assets/images/profile-photo.jpeg"
            alt="Profile Image"
            width={100}
            height={100}
            className="rounded-md object-cover"
          />
        </div>
      </div>

      <div className="flex-1 md:flex-[3/4] space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Yash Thakur
        </h1>

        <p className="text-xl text-neutral-400">
          Building{" "}
          <span className="text-white font-semibold">
            cool things
          </span>
        </p>

        <p className="text-md text-neutral-400">
          Full Stack Engineering Intern at a Stealth Startup.<br /> Find me
          on{" "}
          <Link
            href="https://twitter.com/sincerelyyyash"
            className="text-white font-semibold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            twitter
          </Link>{" "}
          for updates.
          <br />
          <span className="text-neutral-400">Mail me at:  </span>
          <span
            className="text-white font-semibold cursor-pointer hover:underline relative group"
            onClick={() => copyToClipboard('yashthakur0526@gmail.com')}
          >
            yashthakur0526@gmail.com
            {tooltip && (
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-30px] bg-gray-800 text-white text-xs rounded px-2 py-1">
                {tooltip}
              </span>
            )}
          </span>
        </p>

        <div className='flex space-x-4'>
          <div className='relative group'>
            <a href='https://github.com/sincerelyyyash' target='_blank' rel='noopener noreferrer'>
              <GithubIcon />
            </a>
            <span className='absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              sincerelyyyash
            </span>
          </div>

          <div className='relative group'>
            <a href='https://x.com/sincerelyyyash' target='_blank' rel='noopener noreferrer'>
              <TwitterIcon />
            </a>
            <span className='absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              sincerelyyyash
            </span>
          </div>

          <div className='relative group'>
            <a href='https://www.linkedin.com/in/sincerelyyyash/' target='_blank' rel='noopener noreferrer'>
              <LinkedInIcon />
            </a>
            <span className='absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              sincerelyyyash
            </span>
          </div>

          <div className='relative group'>
            <a href='https://leetcode.com/sincerelyyyash/' target='_blank' rel='noopener noreferrer'>
              <LeetCodeIcon />
            </a>
            <span className='absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              sincerelyyyash
            </span>
          </div>
        </div>
      </div>

      <div className="hidden md:block w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto rounded-md overflow-hidden">
        <Image
          src="/assets/images/profile-photo.jpeg"
          alt="Profile Image"
          width={100}
          height={100}
          className="rounded-md object-cover"
        />
      </div>
    </section>
  );
}

