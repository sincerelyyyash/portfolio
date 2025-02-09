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
  return (
    <div className="bg-zinc-900 rounded-xl shadow-lg p-6 text-white relative overflow-hidden mb-4 w-full max-w-2xl">
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-neutral-200 mb-2">
          {title}
        </h2>
        <div className="text-sm font-light text-gray-400 mb-2">
          {journal} &bull; {date}
        </div>
        <p className="text-sm text-gray-300 leading-relaxed">
          {description}
        </p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="mt-4 px-4 py-2 bg-gray-800 text-blue-400 rounded-lg font-medium text-sm flex items-center gap-2 hover:bg-gray-700">
            Show publication &#8599;
          </button>
        </a>
      </div>
    </div>
  );
};

export default PublicationCard;

