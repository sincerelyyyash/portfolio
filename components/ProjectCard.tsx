"use client"
import Image from "next/image";
import React, { useId, useState } from "react";
import { motion } from "framer-motion";
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
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <motion.div
      layoutId={`card-${project.projectName}-${id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative p-4 flex flex-col border border-transparent rounded-xl cursor-pointer transition-all duration-300 ${isHovered ? "border-blue-500" : ""
        }`}
    >
      <motion.div
        layoutId={`image-${project.projectName}-${id}`}
        className="flex flex-col w-full"
      >
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
          {project.description.split("\n")[0]}
        </motion.p>
      </div>

      {isHovered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="absolute inset-0 z-10 bg-black bg-opacity-90 flex items-center justify-center p-4 rounded-lg"
        >
          <motion.div
            layoutId={`card-expanded-${project.projectName}-${id}`}
            className="bg-neutral-900 rounded-lg w-full h-full flex flex-col justify-center items-center"
          >
            <motion.div
              layoutId={`expanded-image-${project.projectName}-${id}`}
              className="w-full h-60 sm:h-72 md:h-80 lg:h-80"
            >
              <Image
                priority
                width={1200}
                height={800}
                src={project.imgSrc}
                alt={project.projectName}
                className="w-full h-full rounded-t-lg object-cover object-top"
              />
            </motion.div>

            <div className="p-4 flex flex-col items-center">
              <motion.h3
                layoutId={`expanded-title-${project.projectName}-${id}`}
                className="font-medium text-white text-lg sm:text-xl"
              >
                {project.projectName}
              </motion.h3>
              <motion.p
                layoutId={`expanded-description-${project.description}-${id}`}
                className="text-gray-200 text-sm sm:text-base mt-1 mb-2 text-center"
              >
                {project.description.split("\n")[0]}
              </motion.p>
            </div>

            <div className="flex space-x-4">
              <motion.a
                layout
                href={project.repoLink}
                target="_blank"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a
                layout
                href={project.deployedLink}
                target="_blank"
                className="text-gray-300 hover:text-white"
              >
                <FaLink size={24} />
              </motion.a>
            </div>

            <motion.div
              layout
              className="mt-4 text-gray-200 text-xs md:text-sm lg:text-base"
            >
              <ul className="list-disc list-inside space-y-2">
                {project.description.split("\n").slice(1).map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              <ul className="flex flex-wrap gap-2 mt-4">
                {project.techStack.map((tech, index) => (
                  <li
                    key={index}
                    className="bg-gray-800 rounded-full px-3 py-1 text-xs font-medium text-blue-500"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

