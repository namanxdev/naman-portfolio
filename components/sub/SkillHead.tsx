"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

export function SkillHead() {
  const words = [
    {
      text: "My",
      className: "text-neutral-200 text-xl sm:text-2xl md:text-3xl lg:text-4xl",
    },
    {
      text: "Technical",
      className: "text-xl sm:text-2xl md:text-3xl lg:text-4xl",
    },
    {
      text: "Skills",
      className: "text-blue-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl",
    },
    {
      text: "&",
      className: "text-xl sm:text-2xl md:text-3xl lg:text-4xl",
    },
    {
      text: "Expertise",
      className: "text-indigo-400 text-xl sm:text-2xl md:text-3xl lg:text-4xl",
    },
  ];
  
  return (
    <div className="flex flex-col items-center justify-center h-[10rem] sm:h-[12rem] md:h-[14rem] lg:h-[16rem]">
      <p className="text-neutral-200 text-xs sm:text-sm md:text-base lg:text-lg mb-2 sm:mb-4 px-4">
        The technologies I work with to build amazing experiences
      </p>
      
      <TypewriterEffectSmooth words={words} />
      
      <div className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 text-center max-w-2xl px-4">
        <p className="text-neutral-300 text-xs sm:text-sm md:text-base lg:text-lg">
          Below is a visual representation of my technical stack and how different technologies
          connect in my development workflow.
        </p>
      </div>
    </div>
  );
}
