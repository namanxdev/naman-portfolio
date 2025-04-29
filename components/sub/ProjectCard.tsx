"use client"

import React from 'react'
import "./ProjectCard.css"
import Image from 'next/image'

interface ProjectCardProps {
  title?: string;
  description: string;
  imgSrc: string; 
  href?: string; 
  accentColor?: string; 
}

// Helper function to convert hex to RGB
const hexToRgb = (hex: string): string => {
  // Remove # if present
  hex = hex.replace('#', '');
  
  // Parse the hex values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  // Return as comma-separated string
  return `${r}, ${g}, ${b}`;
};

const ProjectCard = ({
  title,
  description,
  imgSrc,
  href,
  accentColor = '#ff0000'
}: ProjectCardProps) => {

  const rgbColor = accentColor.startsWith('#') ? hexToRgb(accentColor) : accentColor;
  const cardStyles = { '--accent-color': rgbColor } as React.CSSProperties;

  return (
    <div
      onClick={() => {
        // console.log("Attempting to open:", href); Add console log for debugging
        if (href) window.open(href, '_blank', 'noopener,noreferrer');
      }}
      // Add relative and a high z-index here
      className='relative z-50 size-[350px] rounded-xl border border-dashed border-white/5 flex items-center justify-center p-1 hover:shadow-xl hover:shadow-white/5 transition-shadow duration-300'
      style={{...cardStyles, cursor: href ? 'pointer' : 'default'}}
    >
      {/* Inner structure remains the same, but the parent div is now definitively on top */}
      <div className='h-full w-full p-px rounded-lg relative overflow-hidden'>
        <div className='card-wrapper h-full relative'>
          {/* The z-[1] here is okay because its parent (clickable div) now has z-50 */}
          <div className='relative bg-gray-900 h-full rounded-[7px] ring-[0.5px] ring-white/10 overflow-hidden z-[1]'>
            <div className='h-full flex items-center justify-center flex-col p-4'>
              <div className='w-full h-[60%] relative mb-3 rounded-md overflow-hidden'>
                <Image
                  src={imgSrc}
                  alt={title || 'Project image'}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className='text-xs text-center text-[#eae6e66d]'>
                {title && (
                  <h3 className='text-white font-medium text-base mb-2'>{title}</h3>
                )}
                <p className='line-clamp-3'>
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard