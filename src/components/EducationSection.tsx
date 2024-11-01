// components/EducationSection.tsx
import React from "react";
import BlurFade from "@/components/ui/blur-fade";

// types/education.ts
export interface EducationData {
  college: string;
  batch: string;
  topic: string;
}
const BLUR_FADE_DELAY = 0.04;

interface EducationSectionProps {
  education: EducationData[];
  blurFadeDelay?: number;
}

const EducationSection: React.FC<EducationSectionProps> = ({
  education,
  blurFadeDelay = 300, // Default delay value
}) => {
  return (
    <section className="container py-8">
      <div className="flex min-h-0 flex-col ">
        <h2 className="text-3xl font-bold">Education</h2>
        {education.map((edu, index) => (
          <EducationItem key={index} education={edu} />
        ))}
      </div>
    </section>
  );
};

interface EducationItemProps {
  education: EducationData;
}

const EducationItem: React.FC<EducationItemProps> = ({ education }) => (
  <>
    <div className="flex flex-col justify-between items-start lg:flex-row lg:items-center lg:-mt-2">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-4">
        {education.college}
      </h3>
      <span className="inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
        {education.batch}
      </span>
    </div>
    <p className="dark:text-gray-500">{education.topic}</p>
  </>
);

export default EducationSection;
