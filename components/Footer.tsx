"use client";
import React from 'react';
import { GithubIcon, LinkedInIcon, TwitterIcon } from '../utils/Icons';

function Footer() {
  return (
    <footer className="w-full pt-8 pb-4">
      <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16">
        
        {/* Divider */}
        {/* <div className="w-full h-px bg-neutral-800 mb-8" /> */}
        
        {/* Social Links */}
        <div className="flex space-x-6">
          <a 
            href='https://github.com/sincerelyyyash' 
            target='_blank' 
            rel='noopener noreferrer'
            className="text-neutral-400 hover:text-white transition-colors duration-200"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
          <a 
            href='https://x.com/sincerelyyyash' 
            target='_blank' 
            rel='noopener noreferrer'
            className="text-neutral-400 hover:text-white transition-colors duration-200"
            aria-label="Twitter"
          >
            <TwitterIcon />
          </a>
          <a 
            href='https://www.linkedin.com/in/sincerelyyyash/' 
            target='_blank' 
            rel='noopener noreferrer'
            className="text-neutral-400 hover:text-white transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

