"use client";
import React, { useState, useEffect, ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export interface HoverBorderGradientProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** outer wrapper classes */
  containerClassName?: string;
  /** inner content classes */
  className?: string;
  /** rotation interval in seconds */
  duration?: number;
  /** direction of rotation */
  clockwise?: boolean;
}

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  duration = 1,
  clockwise = true,
  ...props
}: HoverBorderGradientProps) {
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = (dir: Direction): Direction => {
    const map: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const idx = map.indexOf(dir);
    const next = clockwise
      ? (idx - 1 + map.length) % map.length
      : (idx + 1) % map.length;
    return map[next];
  };

  const movingMap: Record<Direction, string> = {
    TOP: "radial-gradient(20% 50% at 50% 0%, white 0%, transparent 100%)",
    LEFT: "radial-gradient(20% 50% at 0% 50%, white 0%, transparent 100%)",
    BOTTOM: "radial-gradient(20% 50% at 50% 100%, white 0%, transparent 100%)",
    RIGHT: "radial-gradient(20% 50% at 100% 50%, white 0%, transparent 100%)",
  };

  const highlight =
    "radial-gradient(75% 180% at 50% 50%, #3275F8 0%, transparent 100%)";

  useEffect(() => {
    if (!hovered) {
      const id = setInterval(
        () => setDirection((d) => rotateDirection(d)),
        duration * 1000
      );
      return () => clearInterval(id);
    }
  }, [hovered, duration, clockwise]);

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex rounded-full p-px overflow-visible w-fit h-min items-center justify-center",
        containerClassName
      )}
      {...props}
    >
      {/* inner black content */}
      <div
        className={cn(
          "z-10 bg-black text-white px-4 py-2 rounded-full",
          className
        )}
      >
        {children}
      </div>

      {/* animated gradient border behind */}
      <motion.div
        className="absolute inset-0 z-0 rounded-full overflow-hidden"
        style={{ filter: "blur(2px)" }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ duration, ease: "linear" }}
      />

      {/* inner mask to hide center */}
      <div className="absolute inset-[2px] z-0 bg-black rounded-full" />
    </button>
  );
}
