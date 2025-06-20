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
  const handleCardClick = () => {
    window.open(project.deployedLink, '_blank', 'noopener,noreferrer');
  };

  const handleButtonClick = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      onClick={handleCardClick}
      className="group py-2 cursor-pointer transition-all duration-300 hover:bg-neutral-900/20 -mx-6 px-6 rounded-lg"
    >
      
      {/* Header with title and links */}
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-2xl font-bold text-white group-hover:text-neutral-200 transition-colors duration-300">
          {project.projectName}
        </h3>
        
        <div className="flex space-x-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={(e) => handleButtonClick(e, project.repoLink)}
            className="text-neutral-400 hover:text-white transition-colors duration-200"
            aria-label="View repository"
          >
            <FaGithub size={20} />
          </button>
          <button
            onClick={(e) => handleButtonClick(e, project.deployedLink)}
            className="text-neutral-400 hover:text-white transition-colors duration-200"
            aria-label="View live demo"
          >
            <FaLink size={20} />
          </button>
        </div>
      </div>

      {/* Description */}
      <p className="text-neutral-400 leading-relaxed mb-4 max-w-4xl">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-3">
        {project.techStack.map((tech, index) => (
          <span 
            key={index} 
            className="text-neutral-500 text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-neutral-800 mt-8 group-hover:bg-neutral-700 transition-colors duration-300" />
    </div>
  );
};

