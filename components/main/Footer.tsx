import React from 'react';
import { EmailButton } from '../sub/EmailButton';
import { cn } from '@/lib/utils'; // Import cn utility

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/naman411/',
    svgPath: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z",
    svgPath2: "M4 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
  },
  {
    name: 'GitHub',
    url: 'https://github.com/namanxdev',
    svgPath: "M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6 0-1.2-.5-2.3-1.3-3.1.1-.3.5-1.5-.1-3.1 0 0-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1c-.6 1.6-.2 2.8-.1 3.1-.8.8-1.3 1.9-1.3 3.1 0 4.6 2.7 5.7 5.5 6-.6.5-.9 1.3-.9 2.5v3.5"
  },
  {
    name: 'Twitter',
    url: 'https://x.com/Naman_411/',
    svgPath: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
  },
  {
    name: 'Resume',
    url: 'https://drive.google.com/file/d/1_f_q_2MLN7wCZ4oZu8mZQwkAR7Oc1tFW/view?usp=drive_link',
    svgPath: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z",
    svgPath2: "M14 2v6h6M16 13H8M16 17H8M10 9H8"
  },
];

const Footer = () => {
  const heading = "Get In Touch"; // Define heading here

  return (
    <footer
      className={cn(
        "relative w-full text-center text-neutral-400 overflow-hidden", // Added relative, overflow-hidden
        "bg-black" // Ensure base background is black
      )}
      id='socials'
    >
      {/* Static Aurora-Style Background (z-0) */}
      <div
        className={cn(
          `
          absolute inset-0 overflow-hidden z-0
          [--aurora-color-1:theme(colors.purple.600)] [--aurora-color-2:theme(colors.indigo.600)] [--aurora-color-3:theme(colors.blue.600)] [--aurora-color-4:theme(colors.cyan.600)]
          [background-image:radial-gradient(40%_50%_at_10%_20%,hsl(var(--aurora-color-1)/0.3)_0%,transparent_100%),radial-gradient(40%_50%_at_90%_80%,hsl(var(--aurora-color-2)/0.3)_0%,transparent_100%),radial-gradient(30%_40%_at_50%_50%,hsl(var(--aurora-color-3)/0.2)_0%,transparent_100%),radial-gradient(20%_30%_at_20%_80%,hsl(var(--aurora-color-4)/0.2)_0%,transparent_100%)]
          `
        )}
        aria-hidden="true" // Hide decorative background from screen readers
      ></div>

      {/* Optional: Blur Overlay (z-10) */}
      <div className="absolute inset-0 backdrop-blur-sm z-10" aria-hidden="true"></div>

      {/* Content Container (z-20) */}
      <div className="relative z-20 container mx-auto flex flex-col items-center gap-8 py-16 px-6"> {/* Added more padding */}

        {/* Heading Text */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400 pb-4"> {/* Adjusted padding */}
          {heading}
        </h2>

        {/* Combined Socials and Email Section */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          {/* Social Media Links */}
          <div className="flex justify-center gap-5">
            {socialLinks.map((link) => {
              const useFill = ['LinkedIn', 'GitHub', 'Twitter'].includes(link.name);
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${link.name} profile`}
                  className={
                    "group relative flex h-11 w-11 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900/80 text-neutral-400" + // Slightly transparent button bg
                    " hover:border-purple-500/50 hover:bg-gradient-to-br hover:from-indigo-600/30 hover:via-purple-600/30 hover:to-blue-600/30 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30" + // Adjusted hover bg opacity
                    " transition-all duration-300 ease-out"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={useFill ? "currentColor" : "none"}
                    stroke={useFill ? "none" : "currentColor"}
                    strokeWidth={useFill ? undefined : "1.5"}
                    strokeLinecap={useFill ? undefined : "round"}
                    strokeLinejoin={useFill ? undefined : "round"}
                    className="h-5 w-5 transition-transform duration-300 ease-out group-hover:scale-110"
                  >
                    <path d={link.svgPath}></path>
                    {link.svgPath2 && !useFill && <path d={link.svgPath2}></path>}
                    {link.name === 'LinkedIn' && link.svgPath2 && <path fill="currentColor" d={link.svgPath2}></path>}
                  </svg>
                  {/* Tooltip */}
                  <span
                    className="absolute -top-9 left-1/2 -translate-x-1/2 scale-90 opacity-0 rounded bg-gradient-to-r from-indigo-600 to-blue-600 px-2 py-1 text-xs font-medium text-white shadow-md transition-all duration-300 ease-out group-hover:-top-10 group-hover:scale-100 group-hover:opacity-100 whitespace-nowrap"
                  >
                    {link.name}
                  </span>
                </a>
              );
            })}
          </div>

          {/* Email Button */}
          {/* Ensure EmailButton's inner div also has sufficient z-index if needed, though z-20 on parent should suffice */}
          <EmailButton />
        </div>

        {/* Divider */}
        <div className="w-1/3 h-px bg-gradient-to-r from-transparent via-neutral-600 to-transparent my-4"></div> {/* Adjusted margin */}

        {/* Copyright Text */}
        <p className="text-sm font-medium bg-gradient-to-r from-neutral-400 via-neutral-300 to-neutral-400 bg-clip-text text-transparent">
          &copy; {new Date().getFullYear()} Naman Gupta. Made with ❤️ & ✨
        </p>
      </div>
    </footer>
  );
};

export default Footer;