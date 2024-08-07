
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
          <div className="fixed inset-0 grid place-items-center z-[100]">
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
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-black dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${project.projectName}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={project.imgSrc}
                  alt={project.projectName}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${project.projectName}-${id}`}
                      className="font-medium text-white text-base"
                    >
                      {project.projectName}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${project.description}-${id}`}
                      className="text-gray-200 text-base"
                    >
                      {project.description}
                    </motion.p>
                  </div>

                  <div className="flex space-x-2">
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
                    <ul className="flex flex-row gap-2">
                      {project.techStack.map((tech, index) => (
                        <li key={index} className="text-gray-300">{tech}</li>
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
        <div className="flex gap-4 flex-col w-full">
          <motion.div layoutId={`image-${project.projectName}-${id}`}>
            <Image
              width={100}
              height={100}
              src={project.imgSrc}
              alt={project.projectName}
              className="h-60 w-full rounded-lg object-cover object-top"
            />
          </motion.div>
          <div className="flex justify-center items-center flex-col">
            <motion.h3
              layoutId={`title-${project.projectName}-${id}`}
              className="font-medium text-neutral-100 dark:text-neutral-300 text-center md:text-left text-base" // Brighter text for collapsed state
            >
              {project.projectName}
            </motion.h3>
            <motion.p
              layoutId={`description-${project.description}-${id}`}
              className="text-neutral-200 dark:text-neutral-500 text-center md:text-left text-base" // Brighter text for collapsed state
            >
              {project.description}
            </motion.p>
          </div>
        </div>
        {hovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold">
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

