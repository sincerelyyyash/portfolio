"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { EmailIcon, GithubIcon, LinkedInIcon, TwitterIcon } from './Navbar';

function Footer() {
  return (
    <motion.div
      className='flex justify-between w-full p-4 border-t my-20'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <div className='flex flex-row'>
          <div className='relative flex flex-row items-center mr-2 group'>
            <a href='https://github.com/sincerelyyyash' target='_blank' rel='noopener noreferrer'>
              <GithubIcon />
            </a>
            <span className='absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              sincerelyyyash
            </span>
          </div>
          <div className='relative flex flex-row items-center mr-2 mt-1 group'>
            <a href='https://x.com/sincerelyyyash' target='_blank' rel='noopener noreferrer'>
              <TwitterIcon />
            </a>
            <span className='absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              sincerelyyyash
            </span>
          </div>
          <div className='relative flex flex-row items-center group'>
            <a href='https://www.linkedin.com/in/sincerelyyyash/' target='_blank' rel='noopener noreferrer'>
              <LinkedInIcon />
            </a>
            <span className='absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              sincerelyyyash
            </span>
          </div>
          <div className='relative flex flex-row items-center ml-2 mt-1 group'>
            <a href='mailto:yashthakur0526@gmail.com'>
              <EmailIcon />
            </a>
            <span className='absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              yashthakur0526@gmail.com
            </span>
          </div>
        </div>
      </div>
      <div className='flex items-center text-lg'>
        <p>Thank you for visiting! - Yash Thakur</p>
      </div>
    </motion.div>
  );
}

export default Footer;

