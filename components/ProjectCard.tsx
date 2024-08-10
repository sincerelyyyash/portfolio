
"use client";

import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { FaGithub, FaLink } from "react-icons/fa";

export interface Project {
  projectName: string;
  imgSrc: string;
  deployedLink: string;
  repoLink: string;
  description: string;
  techStack: string[];
}

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const id = useId();
  const [active, setActive] = useState<boolean>(false);
  const [hovered, setHovered] = useState<boolean>(false);
  const [iconHovered, setIconHovered] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(false));

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0 grid place-items-center z-[100] p-4">
            <motion.button
              key={`button-${project.projectName}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(false)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${project.projectName}-${id}`}
              ref={ref}
              className="w-full max-w-[90%] md:max-w-[80%] lg:max-w-[70%] h-full max-h-[90%] md:max-h-[80%] lg:max-h-[70%] flex flex-col bg-black dark:bg-neutral-900 sm:rounded-3xl overflow-hidden border border-blue-500"
            >
              <motion.div layoutId={`image-${project.projectName}-${id}`}>
                <Image
                  priority
                  width={1200}
                  height={800}
                  src={project.imgSrc}
                  alt={project.projectName}
                  className="w-full h-60 sm:h-72 md:h-80 lg:h-80 rounded-t-lg object-cover object-top"
                />
              </motion.div>

              <div className="p-4">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${project.projectName}-${id}`}
                      className="font-medium text-white text-lg sm:text-xl"
                    >
                      {project.projectName}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${project.description}-${id}`}
                      className="text-gray-200 text-sm sm:text-base mt-1"
                    >
                      {project.description}
                    </motion.p>
                  </div>

                  <div className="flex space-x-2 relative">
                    <div
                      onMouseEnter={() => setIconHovered('github')}
                      onMouseLeave={() => setIconHovered(null)}
                      className="relative"
                    >
                      <motion.a
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        href={project.repoLink}
                        target="_blank"
                        className="text-gray-300 hover:text-white"
                      >
                        <FaGithub size={24} />
                      </motion.a>
                      {iconHovered === 'github' && (
                        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 px-2 py-1 bg-black text-white text-xs rounded">
                          View GitHub Repo
                        </div>
                      )}
                    </div>
                    <div
                      onMouseEnter={() => setIconHovered('link')}
                      onMouseLeave={() => setIconHovered(null)}
                      className="relative"
                    >
                      <motion.a
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        href={project.deployedLink}
                        target="_blank"
                        className="text-gray-300 hover:text-white"
                      >
                        <FaLink size={24} />
                      </motion.a>
                      {iconHovered === 'link' && (
                        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 px-2 py-1 bg-black text-white text-xs rounded">
                          Live Link
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-gray-200 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    <ul className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, index) => (
                        <li key={index} className="bg-gray-800 rounded-full px-3 py-1 text-xs font-medium text-blue-500">{tech}</li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <motion.div
        layoutId={`card-${project.projectName}-${id}`}
        onClick={() => setActive(true)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative p-4 flex flex-col border border-transparent hover:border-blue-500 hover:border-solid rounded-xl cursor-pointer"
      >
        <div className="flex flex-col w-full">
          <motion.div layoutId={`image-${project.projectName}-${id}`}>
            <Image
              width={300}
              height={200}
              src={project.imgSrc}
              alt={project.projectName}
              className="h-48 w-full rounded-lg object-cover object-top"
            />
          </motion.div>
          <div className="flex flex-col items-center mt-2">
            <motion.h3
              layoutId={`title-${project.projectName}-${id}`}
              className="font-medium text-neutral-100 dark:text-neutral-300 text-center text-lg"
            >
              {project.projectName}
            </motion.h3>
            <motion.p
              layoutId={`description-${project.description}-${id}`}
              className="text-neutral-200 dark:text-neutral-500 text-center text-sm"
            >
              {project.description}
            </motion.p>
          </div>
        </div>
        {hovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white font-bold">
            Click to expand
          </div>
        )}
      </motion.div>
    </>
  );
};

const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

