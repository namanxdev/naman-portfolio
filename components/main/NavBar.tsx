import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX, // Assuming this is Twitter/X
  IconHome,
  IconCode, // For Skills
  IconLayoutGrid, // For Projects
  IconTimeline, // For Timeline/Experience
} from "@tabler/icons-react";

export function NavBar() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#home", // Points to the Hero section ID
    },
    {
      title: "Skills",
      icon: (
        <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#skills", // Points to the Skills section ID
    },
    {
      title: "Projects",
      icon: (
        <IconLayoutGrid className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects", // Points to the Projects section ID
    },
    {
      title: "Timeline",
      icon: (
        <IconTimeline className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#timeline", // Points to the Timeline section ID
    },
    // Separator or Spacer could be added if the component supports it, otherwise just group links
    {
      title: "Socials",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#socials", 
    },
  ];

  // Render the FloatingDock directly, usually it positions itself fixed to the bottom
  return (
      <FloatingDock
        // mobileClassName="translate-y-20" // Remove demo class if not needed
        items={links}
      />
  );
}
