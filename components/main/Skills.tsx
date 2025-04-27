"use client"

import React, { useEffect, useState } from 'react'
import SkillsShowcase from '../sub/SkillsBeam'
import { SkillsBeamMobile } from '../sub/SkillsBeamMobile'
import { SkillHead } from '../sub/SkillHead'

const Skills = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Check if we're on the client side
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
      
      // Initial check
      handleResize();
      
      // Add event listener
      window.addEventListener('resize', handleResize);
      
      // Clean up
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className="w-full pt-10">
      <SkillHead/>  
      <div className="-mt-8 md:-mt-16 lg:-mt-24">
        {isMobile ? <SkillsBeamMobile /> : <SkillsShowcase />}
      </div>
    </div>
  )
}

export default Skills