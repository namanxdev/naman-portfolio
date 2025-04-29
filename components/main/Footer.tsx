import React from 'react';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/naman411/',
    // LinkedIn SVG path
    svgPath: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z",
    svgPath2: "M4 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
  },
  {
    name: 'GitHub',
    url: 'https://github.com/namanxdev',
    // GitHub SVG path
    svgPath: "M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6 0-1.2-.5-2.3-1.3-3.1.1-.3.5-1.5-.1-3.1 0 0-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1c-.6 1.6-.2 2.8-.1 3.1-.8.8-1.3 1.9-1.3 3.1 0 4.6 2.7 5.7 5.5 6-.6.5-.9 1.3-.9 2.5v3.5"
  },
  {
    name: 'Twitter', // Or 'X'
    url: 'https://x.com/Naman_411/', // Replace with your URL
    // Twitter/X SVG path (This path is generally for a filled logo)
    svgPath: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
  },
  {
    name: 'Resume',
    url: 'https://drive.google.com/file/d/1_f_q_2MLN7wCZ4oZu8mZQwkAR7Oc1tFW/view?usp=drive_link',
    // FileText SVG path (This one works well with stroke)
    svgPath: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z",
    svgPath2: "M14 2v6h6M16 13H8M16 17H8M10 9H8"
  },
];

const Footer = () => {
  return (
    // Add backdrop blur and background transparency
    <footer className="relative z-20 w-full bg-black/80 backdrop-blur-sm py-12 px-6 text-center text-neutral-400"> {/* Changed bg-black to bg-black/80 and added backdrop-blur-sm */}
      <div className="container mx-auto flex flex-col items-center gap-8">

        {/* Social Media Links - Enhanced Styling */}
        <div className="flex justify-center gap-5 md:gap-8">
          {socialLinks.map((link) => {
            // Determine if the icon should be filled or stroked
            const useFill = ['LinkedIn', 'GitHub', 'Twitter'].includes(link.name); // Add other filled icons here

            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit my ${link.name} profile`}
                className={
                  "group relative flex h-12 w-12 items-center justify-center rounded-full border border-gray-800 bg-gray-900 text-neutral-400" +
                  " hover:border-transparent hover:bg-gradient-to-br hover:from-indigo-600 hover:via-purple-600 hover:to-blue-600 hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30" +
                  " transition-all duration-300 ease-out"
                }
              >
                {/* Inline SVG - Adjusted for fill vs stroke */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  // Apply fill or stroke based on the icon type
                  fill={useFill ? "currentColor" : "none"}
                  stroke={useFill ? "none" : "currentColor"}
                  strokeWidth={useFill ? undefined : "1.5"} // Only apply strokeWidth if using stroke
                  strokeLinecap={useFill ? undefined : "round"}
                  strokeLinejoin={useFill ? undefined : "round"}
                  className="h-6 w-6 transition-transform duration-300 ease-out group-hover:scale-110"
                >
                  <path d={link.svgPath}></path>
                  {/* Only render path2 if it exists AND we are using stroke (common for multi-part outlined icons) */}
                  {link.svgPath2 && !useFill && <path d={link.svgPath2}></path>}
                  {/* Special case for LinkedIn dot (needs fill even if main icon is stroke - though we set LinkedIn to fill now) */}
                  {link.name === 'LinkedIn' && link.svgPath2 && <path fill="currentColor" d={link.svgPath2}></path>}

                </svg>
                {/* Enhanced Tooltip */}
                <span
                  className="absolute -top-10 left-1/2 -translate-x-1/2 scale-90 opacity-0 rounded bg-gradient-to-r from-indigo-600 to-blue-600 px-2 py-1 text-xs font-medium text-white shadow-md transition-all duration-300 ease-out group-hover:-top-12 group-hover:scale-100 group-hover:opacity-100"
                >
                  {link.name}
                </span>
              </a>
            );
          })}
        </div>

        {/* Gradient Copyright Text */}
        <p className="text-sm font-medium bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 bg-clip-text text-transparent">
          &copy; {new Date().getFullYear()} Naman Gupta. Made with ❤️ & ✨
        </p>
      </div>
    </footer>
  );
};

export default Footer;