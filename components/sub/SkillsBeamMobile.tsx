"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import Image from "next/image";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; bgColor?: string }
>(({ className, children, bgColor = "bg-white" }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-14 items-center justify-center rounded-full border-2 p-2 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        bgColor,
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function SkillsBeamMobile() {
  const containerRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  
  // Frontend refs
  const frontendRef = useRef<HTMLDivElement>(null);
  const reactRef = useRef<HTMLDivElement>(null);
  const jsRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const tailwindRef = useRef<HTMLDivElement>(null);
  
  // Backend refs
  const backendRef = useRef<HTMLDivElement>(null);
  const expressRef = useRef<HTMLDivElement>(null);
  const nodeRef = useRef<HTMLDivElement>(null);
  const tsRef = useRef<HTMLDivElement>(null);
  const pythonRef = useRef<HTMLDivElement>(null);
  
  // Database refs
  const databaseRef = useRef<HTMLDivElement>(null);
  const mongoRef = useRef<HTMLDivElement>(null);
  const mysqlRef = useRef<HTMLDivElement>(null);
  const postgresRef = useRef<HTMLDivElement>(null);
  const prismaRef = useRef<HTMLDivElement>(null);
  
  // Tools refs
  const toolsRef = useRef<HTMLDivElement>(null);
  const githubRef = useRef<HTMLDivElement>(null);
  const postmanRef = useRef<HTMLDivElement>(null);
  const dockerRef = useRef<HTMLDivElement>(null);
  const vercelRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex flex-col w-full items-center justify-start py-10 overflow-hidden min-h-[1500px]"
      ref={containerRef}
    >
      {/* Avatar at top */}
      <div className="mb-12 relative" style={{ zIndex: 100 }}> {/* Using style for max z-index */}
        <Circle 
          ref={avatarRef} 
          bgColor="bg-black" 
          className="size-20 shadow-xl"
        >
          <Icons.myAvatar />
        </Circle>
      </div>
      
      {/* Frontend Section */}
      <div className="mb-16 w-full">
        <h3 className="text-center text-gray-400 mb-6 font-medium">Frontend</h3>
        <div ref={frontendRef} className="w-full">
          <div className="flex justify-center gap-6">
            <Circle ref={reactRef}>
              <Icons.react />
            </Circle>
            <Circle ref={jsRef}>
              <Icons.js />
            </Circle>
            <Circle ref={nextRef} bgColor="bg-gray-200">
              <Icons.next />
            </Circle>
            <Circle ref={tailwindRef}>
              <Icons.tailwind />
            </Circle>
          </div>
        </div>
      </div>
      
      {/* Backend Section */}
      <div className="mb-16 w-full">
        <h3 className="text-center text-gray-400 mb-6 font-medium">Backend</h3>
        <div ref={backendRef} className="w-full">
          <div className="flex justify-center gap-6">
            <Circle ref={expressRef}>
              <Icons.express />
            </Circle>
            <Circle ref={nodeRef}>
              <Icons.nodejs />
            </Circle>
            <Circle ref={tsRef}>
              <Icons.typescript />
            </Circle>
            <Circle ref={pythonRef}>
              <Icons.python />
            </Circle>
          </div>
        </div>
      </div>
      
      {/* Database Section */}
      <div className="mb-16 w-full">
        <h3 className="text-center text-gray-400 mb-6 font-medium">Database</h3>
        <div ref={databaseRef} className="w-full">
          <div className="flex justify-center gap-6">
            <Circle ref={mongoRef}>
              <Icons.mongodb />
            </Circle>
            <Circle ref={mysqlRef}>
              <Icons.mysql />
            </Circle>
            <Circle ref={postgresRef}>
              <Icons.postgres />
            </Circle>
            <Circle ref={prismaRef}>
              <Icons.prisma />
            </Circle>
          </div>
        </div>
      </div>
      
      {/* Tools Section */}
      <div className="mb-8 w-full">
        <h3 className="text-center text-gray-400 mb-6 font-medium">Tools</h3>
        <div ref={toolsRef} className="w-full">
          <div className="flex justify-center gap-6">
            <Circle ref={githubRef}>
              <Icons.github />
            </Circle>
            <Circle ref={postmanRef} bgColor="bg-gray-200">
              <Icons.postman />
            </Circle>
            <Circle ref={dockerRef} bgColor="bg-gray-100" className="p-2">
              <Icons.docker />
            </Circle>
            <Circle ref={vercelRef}>
              <Icons.vercel />
            </Circle>
          </div>
        </div>
      </div>
      
      {/* Vertical connections between sections */}
      <AnimatedBeam containerRef={containerRef} fromRef={avatarRef} toRef={frontendRef} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={frontendRef} toRef={backendRef} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={backendRef} toRef={databaseRef} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={databaseRef} toRef={toolsRef} duration={3} />
      
      {/* Connections from avatar to frontend skills */}
      <AnimatedBeam containerRef={containerRef} fromRef={avatarRef} toRef={reactRef} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={avatarRef} toRef={jsRef} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={avatarRef} toRef={nextRef} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={avatarRef} toRef={tailwindRef} duration={3} />
      
      {/* Frontend to backend connections */}
      <AnimatedBeam containerRef={containerRef} fromRef={reactRef} toRef={expressRef} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={jsRef} toRef={nodeRef} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={nextRef} toRef={tsRef} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={tailwindRef} toRef={pythonRef} duration={3} />
      
      {/* Backend to database connections */}
      <AnimatedBeam containerRef={containerRef} fromRef={expressRef} toRef={mongoRef} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={nodeRef} toRef={mysqlRef} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={tsRef} toRef={postgresRef} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={pythonRef} toRef={prismaRef} duration={3} />
      
      {/* Database to tools connections */}
      <AnimatedBeam containerRef={containerRef} fromRef={mongoRef} toRef={githubRef} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={mysqlRef} toRef={postmanRef} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={postgresRef} toRef={dockerRef} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={prismaRef} toRef={vercelRef} duration={3} />
    </div>
  );
}

// Icons object remains the same as your original component
const Icons = {

  express: () => (
    <Image src="/express.png" alt="Express" width={80} height={80} className="object-contain" />
  ),
  github: () => (
    <Image src="/github-142-svgrepo-com.svg" alt="GitHub" width={80} height={80} className="object-contain" />
  ),
  html: () => (
    <Image src="/html.png" alt="HTML" width={80} height={80} className="object-contain" />
  ),
  js: () => (
    <Image src="/js.png" alt="JavaScript" width={80} height={80} className="object-contain" />
  ),
  mongodb: () => (
    <Image 
      src="/mongodb.png" 
      alt="MongoDB" 
      width={30} // Even smaller
      height={30}
      className="object-contain scale-75" // Scale down further
    />
  ),
  mysql: () => (
    <Image src="/mysql.png" alt="MySQL" width={80} height={80} className="object-contain" />
  ),
  next: () => (
    <Image src="/next.png" alt="Next.js" width={80} height={80} className="object-contain" />
  ),
  nodejs: () => (
    <Image src="/node-js.png" alt="Node.js" width={80} height={80} className="object-contain" />
  ),
  postgres: () => (
    <Image src="/postger.png" alt="PostgreSQL" width={80} height={80} className="object-contain" />
  ),
  prisma: () => (
    <Image src="/prisma.webp" alt="Prisma" width={80} height={80} className="object-contain" />
  ),
  python: () => (
    <Image src="/Python.webp" alt="Python" width={80} height={80} className="object-contain" />
  ),
  react: () => (
    <Image src="/react.png" alt="React" width={80} height={80} className="object-contain" />
  ),
  tailwind: () => (
    <Image src="/tailwind.png" alt="Tailwind CSS" width={80} height={80} className="object-contain" />
  ),
  typescript: () => (
    <Image src="/ts.png" alt="TypeScript" width={80} height={80} className="object-contain" />
  ),
  myAvatar: () => (
    <Image src="/my-avatar.jpeg" alt="My Avatar" 
    width={120} 
    height={120} 
    className="object-cover scale-150 rounded-full"  /> // Adjusted size and scale
  ),

  docker: () => (
    <Image 
      src="/docker.png" 
      alt="Docker" 
      width={100} 
      height={100} 
      className="object-contain scale-125" 
    />
  ),
  postman: () => (
    <Image src="/postman.png" alt="Postman" width={80} height={80} className="object-contain" />
  ),
  vercel: () => (
    <Image src="/vercel.png" alt="Vercel" width={80} height={80} className="object-contain" />
  )
};


export default SkillsBeamMobile;