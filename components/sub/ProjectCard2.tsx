"use client";
import { PinContainer } from "../ui/3d-pin";
// Correct the import name
import Image from "next/image";

export function ProjectCard2({title,href,description,imgSrc}:{title:string,href:string,description:string,imgSrc:string}) {
  const handleClick = () => {
    if (href) window.open(href, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className="h-[40rem] flex items-center justify-center cursor-pointer" 
      onClick={handleClick}
    >
      <PinContainer
        title={title} 
        href={href}
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
            {title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 line-clamp-3">
              {description}
            </span>
          </div>
          {/* Add relative and overflow-hidden to this specific div */}
          <div className="relative flex flex-1 w-full rounded-lg mt-4 border-2 border-gray-300 overflow-hidden">
            {/* Use fill and object-cover for the Image */}
            <Image
              src={imgSrc}
              alt={title} // Use project title for alt text
              fill // Make image fill this container
              className="object-cover" // Cover the container, maintain aspect ratio
            />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}