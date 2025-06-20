"use client";
import { FC } from "react";

interface CardProps {
  name: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  skills: string[];
}

const WorkExCard: FC<CardProps> = ({
  name,
  title,
  location,
  startDate,
  endDate,
  description,
  skills,
}) => {
  return (
    <div className="group py-2 transition-all duration-300 hover:bg-neutral-900/20 -mx-6 px-6 rounded-lg">
      
      {/* Header with company and dates/location */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-white group-hover:text-neutral-200 transition-colors duration-300 mb-1">
            {name}
          </h3>
          <h4 className="text-lg font-medium text-neutral-300 mb-3 md:mb-0">
            {title}
          </h4>
        </div>
        
        <div className="text-sm text-neutral-400 md:text-right flex flex-col space-y-1">
          <span>{location}</span>
          <span>{startDate} - {endDate}</span>
        </div>
      </div>

      {/* Description */}
      <div className="mb-4 space-y-2">
        {description.map((line, index) => (
          <p key={index} className="text-neutral-400 leading-relaxed">
            {line}
          </p>
        ))}
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-neutral-500 text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-neutral-800 mt-8 group-hover:bg-neutral-700 transition-colors duration-300" />
    </div>
  );
};

export default WorkExCard;

