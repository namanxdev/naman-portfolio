import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        // Base styles: white background, dark text, border
        "group relative w-auto cursor-pointer overflow-hidden rounded-full border border-gray-300 bg-white p-2 px-6 text-center font-semibold text-gray-900",
        // Transition for smooth color and opacity changes
        "transition-all duration-300 ease-in-out", // Use transition-all
        // Hover styles: gradient background, white text, remove border (Applied after base and transition)
        "hover:bg-gradient-to-r hover:from-indigo-500 hover:to-blue-500 hover:text-white hover:border-transparent",
        className, // User-provided classes last
      )}
      {...props}
    >
      {/* Initial state content (Circle + Text) */}
      {/* Use opacity for fade-out */}
      <div className="flex items-center justify-center gap-2 opacity-100 transition-opacity duration-300 group-hover:opacity-0">
        {/* Circle: Keep initial color on hover */}
        <div className="h-2 w-2 rounded-full bg-indigo-500 transition-colors duration-300"></div> {/* Removed group-hover:bg-white */}
        {/* Initial Text */}
        <span>
          {children}
        </span>
      </div>

      {/* Hover state content (Text + Arrow) */}
      {/* Use opacity for fade-in */}
      <div className="absolute inset-0 z-10 flex h-full w-full items-center justify-center gap-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span>{children}</span>
        <ArrowRight className="h-4 w-4" />
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
