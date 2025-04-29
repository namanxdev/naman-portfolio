import React from "react";
import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse, IconX } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import { useRef, useState } from "react";

// 1. Define the item type including optional target - CHANGE HERE
type DockItem = {
  title: string;
  icon: React.ReactElement; // Changed from React.ReactNode
  href: string;
  target?: string;
};

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: DockItem[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      {/* Position the desktop dock fixed at the BOTTOM center - HIDE on mobile */}
      <div className="fixed bottom-10 left-0 right-0 z-50 hidden justify-center md:flex"> {/* Changed top-6 to bottom-10, Added hidden md:flex */}
        <FloatingDockDesktop items={items} className={desktopClassName} />
      </div>
      {/* Position the mobile dock fixed at the BOTTOM right - HIDE on desktop */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden"> {/* Changed top-6 to bottom-6 */}
        <FloatingDockMobile items={items} className={mobileClassName} />
      </div>
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: DockItem[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("block", className)}> {/* Keep this relative */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }} // Start slightly below
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }} // Exit slightly below
            transition={{ duration: 0.2, ease: "easeOut" }}
            // Position the expanded menu ABOVE the button
            className="absolute bottom-full right-0 mb-3 flex flex-col items-end gap-3 rounded-lg bg-neutral-900/80 p-3 shadow-lg backdrop-blur-md" // Changed top-full/mt-3 back to bottom-full/mb-3
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 10 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: idx * 0.05, ease: "easeOut" },
                }}
                exit={{
                  opacity: 0,
                  x: 10,
                  transition: { delay: (items.length - 1 - idx) * 0.05, ease: "easeIn" },
                }}
              >
                <a
                  href={item.href}
                  target={item.target}
                  rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                  key={item.title}
                  onClick={() => setOpen(false)} // Close menu on click
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800 text-neutral-300 transition-colors hover:bg-neutral-700 hover:text-white"
                >
                  <div className="h-5 w-5">{item.icon}</div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
       {/* Toggle Button Styling - Remains in the bottom-right */}
       <button
        onClick={() => setOpen(!open)}
        className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800/90 text-neutral-300 shadow-md backdrop-blur-sm transition-colors hover:bg-neutral-700 hover:text-white" // Added relative z-10
      >
        {open ? (
           <IconX className="h-6 w-6" />
        ) : (
           <IconLayoutNavbarCollapse className="h-6 w-6" />
        )}
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: DockItem[];
  className?: string;
}) => {
  let mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        // Adjusted padding for bottom position
        "mx-auto flex h-16 items-end gap-4 rounded-2xl bg-neutral-900/80 px-4 pb-3 backdrop-blur-md shadow-lg", // Changed pt-3 to pb-3, items-center to items-end
        className,
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
  target,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactElement; // This type is correct
  href: string;
  target?: string;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Transform ranges remain the same
  let widthTransform = useTransform(distance, [-100, 0, 100], [48, 80, 48]);
  let heightTransform = useTransform(distance, [-100, 0, 100], [48, 80, 48]);
  let widthTransformIcon = useTransform(distance, [-100, 0, 100], [24, 40, 24]);
  let heightTransformIcon = useTransform(distance, [-100, 0, 100], [24, 40, 24]);

  // Spring physics remain the same
  let width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  let height = useSpring(heightTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  let widthIcon = useSpring(widthTransformIcon, { mass: 0.1, stiffness: 150, damping: 12 });
  let heightIcon = useSpring(heightTransformIcon, { mass: 0.1, stiffness: 150, damping: 12 });

  const [hovered, setHovered] = useState(false);


  return (
    <a href={href} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-neutral-800"
      >
        {/* ... AnimatePresence ... */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 8, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 8, x: "-50%" }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute -top-10 left-1/2 w-fit whitespace-nowrap rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs font-medium text-neutral-200 shadow-lg"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {/* Apply type assertion to the props object */}
          {React.cloneElement(icon, {
             className: "h-full w-full text-neutral-300"
          } as React.HTMLAttributes<HTMLElement> )}
        </motion.div>
      </motion.div>
    </a>
  );
}
