// WorkExperience.tsx
import React from "react";

interface WorkExperienceProps {
  logoSrc: string;
  logoAlt: string;
  title: string;
  date: string;
  description: string;
  details: string[];
}

const WorkExperience: React.FC<WorkExperienceProps> = ({
  logoSrc,
  logoAlt,
  title,
  date,
  description,
  details,
}) => {
  return (
    <div className="flex py-4 flex-col justify-between  lg:flex-row lg:items-start lg:space-x-8">
      <div className="flex-shrink-0 my-4 lg:my-0">
        <img
          src={logoSrc}
          alt={logoAlt}
          className="h-20 w-20 rounded-full border"
        />
      </div>
      <div className="">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            {title}
          </h3>
          <span className="mt-2 lg:mt-0 self-start rounded bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
            {date}
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        <div className="space-y-2">
          {details.map((detail, index) => (
            <p key={index} className="text-gray-600 dark:text-gray-400">
              {detail}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
