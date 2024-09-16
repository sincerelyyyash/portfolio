
"use client";
import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";

export interface Project {
  projectName: string;
  description: string;
  techStack: string[];
  repoLink: string;
  deployedLink: string;
}

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-zinc-900 p-4 rounded-lg w-full h-64">
      <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-neutral-200 mb-2 md:mb-0">{project.projectName}</h2>
      <p className="text-neutral-300 text-sm mb-4">{project.description}</p>

      <div className="flex space-x-4 mb-4">
        <a
          href={project.repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white"
        >
          <FaGithub size={20} />
        </a>
        <a
          href={project.deployedLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white"
        >
          <FaLink size={20} />
        </a>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech, index) => (
          <span key={index} className="bg-gray-800 text-blue-500 px-3 py-1 text-sm rounded-full italic">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

