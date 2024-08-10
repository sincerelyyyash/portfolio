import { FC } from 'react';

interface CardProps {
  name: string;
  imagePath: string;
}

const Card: FC<CardProps> = ({ name, imagePath }) => {
  return (
    <button className="relative inline-flex w-50 h-24 overflow-hidden rounded-lg p-[1px] m-4 bg-slate-950">
      <span className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] animate-spin-slow" />
      <span className="relative flex h-full w-full items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        <div className="shadow-lg flex flex-col items-center justify-center m-4">
          <div className="w-14 h-14 flex items-center justify-center">
            <img src={imagePath} alt={name} width={64} height={64} className="object-cover" />
          </div>
          <p className="text-white text-lg">{name}</p>
        </div>
      </span>
    </button>
  );
};

export default Card;

