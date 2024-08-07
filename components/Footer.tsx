import React from 'react';
import { GithubIcon, LinkedInIcon, TwitterIcon } from './Navbar';

function Footer() {
  return (
    <div className='flex justify-between w-full p-4 border-t mt-20'>
      <div>
        <div className='flex flex-row'>
          <div className='flex flex-row items-center mr-2'>
            <GithubIcon />
          </div>
          <div className='flex flex-row items-center mr-2'>
            <TwitterIcon />
          </div>
          <div className='flex flex-row items-center ml-1'>
            <LinkedInIcon />
          </div>
        </div>
      </div>
      <div className='flex items-center text-lg'>
        <p>Made with <span className='text-red-500'>&lt;3</span> by Yash Thakur</p>
      </div>    </div>
  );
}

export default Footer;

