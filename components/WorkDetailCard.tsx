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
    <div
      className="bg-zinc-900 rounded-xl shadow-lg p-6 text-white relative overflow-hidden mb-4 w-full max-w-2xl"
    // style={{ border: "1px solid #E2CBFF" }}
    >
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row justify-between items-start mb-4">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-neutral-200 mb-2 md:mb-0">
            {name}
          </h2>
          <div className="text-sm font-light md:text-right flex flex-col md:items-end">
            <div className="text-left md:text-right">{location}</div>
            <div className="text-left md:text-right">
              {startDate} - {endDate}
            </div>
          </div>
        </div>
        <h3 className="text-lg font-semibold mt-2">{title}</h3>
        <div className="text-sm mt-2">
          {description.map((line, index) => (
            <p key={index} className="mb-2 break-words">
              {line}
            </p>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-gray-800 rounded-full px-3 py-1 text-sm font-medium text-blue-500 italic"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExCard;

