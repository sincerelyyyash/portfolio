
"use client";
import React from 'react';
import { EmailIcon, GithubIcon, LinkedInIcon, TwitterIcon } from '../utils/Icons';

function Footer() {
  return (
    <div className='flex flex-col items-start p-4 border-t mt-20'>
      <div className='flex flex-wrap gap-4 justify-center'>
        <div className='relative flex flex-col items-center group'>
          <a href='https://github.com/sincerelyyyash' target='_blank' rel='noopener noreferrer'>
            <GithubIcon />
          </a>
          <span className='absolute top-full mt-2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            sincerelyyyash
          </span>
        </div>
        <div className='relative flex flex-col items-center group'>
          <a href='https://x.com/sincerelyyyash' target='_blank' rel='noopener noreferrer'>
            <TwitterIcon />
          </a>
          <span className='absolute top-full mt-2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            sincerelyyyash
          </span>
        </div>
        <div className='relative flex flex-col items-center group'>
          <a href='https://www.linkedin.com/in/sincerelyyyash/' target='_blank' rel='noopener noreferrer'>
            <LinkedInIcon />
          </a>
          <span className='absolute top-full mt-2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            sincerelyyyash
          </span>
        </div>
        {/* <div className='relative flex flex-col items-center group'> */}
        {/*   <a href='mailto:yashthakur0526@gmail.com'> */}
        {/*     <EmailIcon /> */}
        {/*   </a> */}
        {/*   <span className='absolute top-full mt-2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300'> */}
        {/*     yashthakur0526@gmail.com */}
        {/*   </span> */}
        {/* </div> */}
      </div>

      {/* <div className='flex items-center text-lg mt-8 md:mt-0 justify-center'> */}
      {/*   <p> */}
      {/*     Portfolio inspired by{' '} */}
      {/*     <a */}
      {/*       href="https://manuarora.in/" */}
      {/*       target="_blank" */}
      {/*       rel="noopener noreferrer" */}
      {/*       className="text-white hover:text-blue-500" */}
      {/*     > */}
      {/*       Manu Arora */}
      {/*     </a> */}
      {/*   </p> */}
      {/* </div> */}
    </div>
  );
}

export default Footer;

