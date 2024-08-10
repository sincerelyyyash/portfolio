"use client";

import React from 'react';

export function Navbar(): JSX.Element {
  return (
    <div className='flex flex-col md:flex-row justify-between w-full p-4'>
      <div className='text-2xl mb-4 md:mb-0'>
        {/* Yash Thakur */}
      </div>
      <div className='flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8'>
        <div className='hidden md:flex space-x-4 bg-clip-text text-transparent text-xl bg-gradient-to-b from-neutral-200 to-neutral-600'>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#work" className="hover:underline">Work</a>
          <a href="#projects" className="hover:underline">Projects</a>
        </div>
        <div className='text-md p-2 hidden md:block'>|</div> {/* Divider line */}
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
          <div className='relative group'>
            <a href='mailto:yashthakur0526@gmail.com' target='_blank' rel='noopener noreferrer'>
              <EmailIcon />
            </a>
            <span className='absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              yashthakur0526@gmail.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}


export function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.208 11.385.6.11.793-.261.793-.577v-2.014c-3.34.726-4.033-1.61-4.033-1.61-.545-1.385-1.333-1.754-1.333-1.754-1.09-.743.083-.728.083-.728 1.206.087 1.842 1.24 1.842 1.24 1.072 1.846 2.809 1.31 3.495.999.108-.776.42-1.31.764-1.61-2.67-.299-5.467-1.336-5.467-5.94 0-1.314.47-2.387 1.24-3.23-.124-.3-.54-1.527.12-3.183 0 0 1.01-.323 3.3 1.23A11.503 11.503 0 0 1 12 6.198c.99.005 1.986.134 2.914.395 2.29-1.553 3.299-1.23 3.299-1.23.663 1.656.246 2.883.122 3.183.77.843 1.238 1.916 1.238 3.23 0 4.617-2.803 5.636-5.477 5.93.43.373.81 1.103.81 2.22v3.297c0 .318.19.692.802.575C20.566 21.8 24 17.3 24 12c0-6.627-5.373-12-12-12"></path>
    </svg>
  );
}

export function LeetCodeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.303 16.047h-9.561c-.936 0-1.697-.803-1.697-1.79s.762-1.79 1.697-1.79h9.561c.936 0 1.697.803 1.697 1.79s-.762 1.79-1.697 1.79zm-9.561-2.58c-.385 0-.697.354-.697.79s.312.79.697.79h9.561c.385 0 .697-.354.697-.79s-.312-.79-.697-.79h-9.561z"></path>
      <path d="M11.618 24c-1.604 0-2.977-.533-3.97-1.541L3.55 18.278C2.551 17.262 2 15.819 2 14.215c0-1.578.551-3.008 1.552-4.025L13.071.509c.66-.67 1.829-.652 2.506.036.694.706.71 1.839.034 2.524l-1.762 1.816a5.25 5.25 0 0 1 1.739 1.159l2.463 2.53c.672.684.655 1.815-.039 2.521a1.79 1.79 0 0 1-1.284.545c-.464 0-.896-.181-1.219-.509l-2.536-2.492c-.321-.327-.779-.49-1.367-.49-.606 0-1.069.157-1.375.469l-4.067 4.194c-.342.349-.521.831-.521 1.4 0 .577.189 1.101.519 1.436l4.083 4.182c.315.321.774.484 1.362.484s1.045-.163 1.36-.484l2.549-2.505a1.687 1.687 0 0 1 1.209-.503h.002c.483 0 .939.194 1.286.546.693.705.71 1.837.036 2.522l-2.457 2.525C14.586 23.438 13.176 24 11.618 24zM14.29 1a.703.703 0 0 0-.507.21l-9.519 9.681C3.449 11.72 3 12.9 3 14.215c0 1.341.449 2.535 1.265 3.363l.001.001 4.097 4.18C9.162 22.57 10.288 23 11.618 23c1.288 0 2.444-.455 3.258-1.282l2.457-2.525c.295-.301.279-.804-.034-1.122a.801.801 0 0 0-.573-.247h-.001a.703.703 0 0 0-.502.209l-2.549 2.505c-.497.507-1.214.778-2.068.778s-1.572-.271-2.076-.784L5.446 16.35c-.519-.527-.805-1.286-.805-2.136 0-.824.286-1.57.806-2.099l4.067-4.194c.503-.512 1.206-.771 2.091-.771.854 0 1.571.271 2.074.783l2.536 2.492a.705.705 0 0 0 .512.216.798.798 0 0 0 .571-.246c.313-.319.33-.822.037-1.121l-2.461-2.528a4.238 4.238 0 0 0-2.028-1.137c-.175-.041-.331-.176-.382-.349s-.021-.363.104-.492l2.325-2.398c.298-.302.282-.805-.031-1.124A.799.799 0 0 0 14.29 1z"></path>
    </svg>
  );
}

export function TwitterIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 512 512" fill="currentColor">
      <path fill="#fff" d="M355.904 100H408.832L293.2 232.16L429.232 412H322.72L239.296 302.928L143.84 412H90.8805L214.56 270.64L84.0645 100H193.28L268.688 199.696L355.904 100ZM337.328 380.32H366.656L177.344 130.016H145.872L337.328 380.32Z"></path>
    </svg>
  );
}

export function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 6.002c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2zM5.5 24.002h-5a.5.5 0 0 1-.5-.5v-15a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5zm-4.5-1h4v-14H1v14zM23.5 24.002h-5a.5.5 0 0 1-.5-.5v-9c0-1.135-.473-1.987-1.299-2.336-.853-.362-1.894-.14-2.701.556v10.78a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-15a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .484.375c1.604-1.154 4.276-1.796 6.413-1.064 1.613.553 3.546 2.073 3.603 6.183v10.007a.5.5 0 0 1-.5.499zm-4.5-1h4v-9.5c-.038-2.785-1.051-4.601-2.927-5.243-2.33-.798-5.266.407-6.183 1.555a.501.501 0 0 1-.89-.312v-.5H9v14h4v-10.5a.5.5 0 0 1 .151-.358c1.118-1.086 2.667-1.436 3.939-.899 1.214.514 1.91 1.701 1.909 3.257v8.5z"></path>
    </svg>
  );
}

export function EmailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  );
}

