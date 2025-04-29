"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { ComponentPropsWithoutRef, FC, ReactNode, useRef } from "react";

import { cn } from "@/lib/utils";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string;
}

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null); // Define the ref
  const { scrollYProgress } = useScroll({
    target: targetRef, // Tell useScroll to track the element with this ref
  });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(" ");

  return (
    // 1. Keep the ref ONLY on this outer container div
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      <div
        className={
          "sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]"
        }
      >
        {/* 2. Ensure the ref is REMOVED from this inner span */}
        <span
          className={cn(
            "flex flex-wrap p-5 font-bold text-black/20 dark:text-white/20",
            // Re-apply desired text sizes (adjust base size for mobile)
            "text-3xl sm:text-4xl md:text-5xl lg:text-6xl", // Example sizes
            className // Allow overriding via props
          )}
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            // Pass the scrollYProgress down to each Word
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </span>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>; // Ensure this is received
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  // useTransform maps the scroll progress to opacity based on the word's range
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mx-1 lg:mx-1.5">
      <span className="absolute opacity-30">{children}</span>
      <motion.span
        style={{ opacity: opacity }} // Apply the calculated opacity
        className={"text-white"} // Make sure revealed text is visible
      >
        {children}
      </motion.span>
    </span>
  );
};
