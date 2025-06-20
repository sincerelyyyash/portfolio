"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
    <section className="w-full pt-20 pb-10 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        
        <div className="flex flex-col lg:flex-row items-start gap-12">
          
          {/* Content */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: 'easeOut',
            }}
          >
            
            {/* Name and Title */}
            <div className="mb-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-1">
                Yash Thakur
              </h1>
              
              <p className="text-xl text-neutral-400 mb-2">
                Building{" "}
                <span className="text-white font-medium">
                  cool things
                </span>
              </p>
            </div>

            {/* Description */}
            <div className="space-y-1 mb-4 text-neutral-400 leading-relaxed">
              <p>
                Full Stack Engineering Intern at a Stealth Startup.
              </p>
              
              <p>
                Find me on{" "}
                <Link
                  href="https://twitter.com/sincerelyyyash"
                  className="text-white font-medium hover:text-neutral-200 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </Link>{" "}
                for updates.
              </p>
              
              <p>
                <span className="text-neutral-500">Mail me at: </span>
                <span
                  className="text-white font-medium cursor-pointer hover:text-neutral-200 transition-colors duration-200 relative"
                  onClick={() => copyToClipboard('yashthakur0526@gmail.com')}
                >
                  yashthakur0526@gmail.com
                  {tooltip && (
                    <span className="absolute left-0 -top-8 bg-white text-black text-xs rounded px-2 py-1 shadow-lg">
                      {tooltip}
                    </span>
                  )}
                </span>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              {[
                { href: 'https://github.com/sincerelyyyash', icon: GithubIcon, label: 'GitHub' },
                { href: 'https://x.com/sincerelyyyash', icon: TwitterIcon, label: 'Twitter' },
                { href: 'https://www.linkedin.com/in/sincerelyyyash/', icon: LinkedInIcon, label: 'LinkedIn' },
                { href: 'https://leetcode.com/sincerelyyyash/', icon: LeetCodeIcon, label: 'LeetCode' }
              ].map(({ href, icon: Icon, label }) => (
                <a 
                  key={label}
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors duration-200"
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div 
            className="flex-shrink-0 order-first lg:order-last"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.5,
              ease: 'easeOut',
            }}
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden">
              <Image
                src="/assets/images/profile-photo.jpeg"
                alt="Yash Thakur"
                width={160}
                height={160}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

