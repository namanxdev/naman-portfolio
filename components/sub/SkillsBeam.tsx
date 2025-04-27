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
        "z-10 flex size-16 items-center justify-center rounded-full border-2 p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]", // Changed from size-12 to size-16
        bgColor,
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

const SkillsBeam = () => {
  return (
    <div className="w-full py-10">
      <AnimatedBeamMultipleOutputDemo />
    </div>
  );
};

export function AnimatedBeamMultipleOutputDemo({
  className,
}: {
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  const div8Ref = useRef<HTMLDivElement>(null);
  const div9Ref = useRef<HTMLDivElement>(null);
  const div10Ref = useRef<HTMLDivElement>(null);
  const div11Ref = useRef<HTMLDivElement>(null);
  const div12Ref = useRef<HTMLDivElement>(null);
  const div13Ref = useRef<HTMLDivElement>(null);
  const div14Ref = useRef<HTMLDivElement>(null);
  const div15Ref = useRef<HTMLDivElement>(null);
  const div16Ref = useRef<HTMLDivElement>(null);
  const div17Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex h-[700px] w-full items-center justify-center overflow-hidden p-10",
        className,
      )}
      ref={containerRef}
    >
      <div className="flex size-full max-w-4xl flex-row items-stretch justify-between gap-8">
        {/* User Avatar - Keeping as is */}
        <div className="flex flex-col justify-center">
          <Circle ref={div1Ref} bgColor="backdrop-blur-sm">
            <Icons.myAvatar />
          </Circle>
        </div>
        
        {/* Frontend Skills */}
        <div className="flex flex-col justify-center gap-2">
          <h4 className="text-sm text-center text-gray-400 mb-2">Frontend</h4>
          <Circle ref={div2Ref}>
            <Icons.react />
          </Circle>
          <Circle ref={div3Ref}>
            <Icons.js />
          </Circle>
          <Circle ref={div4Ref} bgColor="bg-gray-200">
            <Icons.next />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.tailwind />
          </Circle>
        </div>
        
        {/* Backend Skills */}
        <div className="flex flex-col justify-center gap-2">
          <h4 className="text-xs text-center text-gray-400 mb-1">Backend</h4>
          <Circle ref={div6Ref}>
            <Icons.express />
          </Circle>
          <Circle ref={div7Ref}>
            <Icons.nodejs />
          </Circle>
          <Circle ref={div8Ref}>
            <Icons.typescript />
          </Circle>
          <Circle ref={div9Ref}>
            <Icons.python />
          </Circle>
          
        </div>
        
        {/* Database Skills */}
        <div className="flex flex-col justify-center gap-2">
          <h4 className="text-xs text-center text-gray-400 mb-1">Database</h4>
          <Circle ref={div10Ref}>
            <Icons.mongodb />
          </Circle>
          <Circle ref={div11Ref}>
            <Icons.mysql />
          </Circle>
          <Circle ref={div12Ref}>
            <Icons.postgres />
          </Circle>
          <Circle ref={div13Ref}>
            <Icons.prisma />
          </Circle>
        </div>
        
        {/* Tools */}
        <div className="flex flex-col justify-center gap-2">
          <h4 className="text-xs text-center text-gray-400 mb-1">Tools</h4>
        
          <Circle ref={div14Ref} >
            <Icons.github />
          </Circle>

          <Circle ref={div15Ref} bgColor="bg-gray-200">
            <Icons.postman />
          </Circle>

          
          <Circle ref={div16Ref} bgColor="bg-gray-100" className="p-3">
            <Icons.docker />
          </Circle>

          {/* For normal white background */}
          <Circle ref={div17Ref}>
            <Icons.vercel />
          </Circle>
        </div>
      </div>

      {/* AnimatedBeams - existing ones */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
        duration={5}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div3Ref}
        duration={5}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        duration={5}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div5Ref}
        duration={5}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
        duration={5}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div7Ref}
        duration={5}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div8Ref}
        duration={5}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div9Ref}
        duration={5}
      />

      {/* Connect Backend to Database */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div10Ref}
        duration={5}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div11Ref}
        duration={5}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div8Ref}
        toRef={div12Ref}
        duration={5}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div9Ref}
        toRef={div13Ref}
        duration={5}
      />

      {/* Connect Database to Tools */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div10Ref}
        toRef={div14Ref}
        duration={5}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div11Ref}
        toRef={div15Ref}
        duration={5}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div12Ref}
        toRef={div16Ref}
        duration={5}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div13Ref}
        toRef={div17Ref}
        duration={5}
      />
    </div>
  );
}

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

export default SkillsBeam;