"use client";
import { FC } from "react";

interface PublicationCardProps {
  title: string;
  journal: string;
  date: string;
  description: string;
  link: string;
}

const PublicationCard: FC<PublicationCardProps> = ({
  title,
  journal,
  date,
  description,
  link,
}) => {
  const handleCardClick = () => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      onClick={handleCardClick}
      className="group py-2 cursor-pointer transition-all duration-300 hover:bg-neutral-900/20 -mx-6 px-6 rounded-lg"
    >
      
      {/* Header with title */}
      <div className="flex flex-col md:items-start md:justify-between mb-3">
      <h3 className="text-2xl font-bold text-white group-hover:text-neutral-200 transition-colors duration-300">
          {title}
        </h3>
        
        <div className="text-sm text-neutral-400">
          <span>{journal} • {date}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-neutral-400 leading-relaxed mb-4">
        {description}
      </p>

      {/* Click indicator */}
      <div className="flex items-center text-neutral-500 text-sm font-medium mb-8">
        <span className="group-hover:text-neutral-400 transition-colors duration-300">
          Click to view publication →
        </span>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-neutral-800 group-hover:bg-neutral-700 transition-colors duration-300" />
    </div>
  );
};

export default PublicationCard;

