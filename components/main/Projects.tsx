"use client";
import React, { useEffect, useState } from 'react'

import ProjectHead from '../sub/ProjectHead'
import ProjectCard from '../sub/ProjectCard'
import { ProjectCard2 } from '../sub/ProjectCard2'

// Updated projectsData with premium gradients
const projectsData = [
  {
    id: 1, 
    title: "FinTrack",
    href: "https://fintracker-3jn2.onrender.com/",
    description: "FinTrack is a modern finance tracking web application designed to help users analyze expense",
    imgSrc: "/project/FinTrack1.png",
    accentColor: "32, 217, 210" // Teal
  },
  {
    id: 2,
    title: "TrailBlaze",
    href: "https://trailblaze-l1td.onrender.com/", 
    description: "Trailblaze is a full-stack web application designed to help users discover, review, and share campgrounds. ",
    imgSrc: "/project/TrailBlaze1.png",
    accentColor: "255, 111, 97" // Sunset coral
  },
  {
    id: 3,
    title: "RAG-BOT",
    href: "https://github.com/namanxdev/RAG_chatbot", 
    description: "Built a Retrieval-Augmented Generation (RAG) chatbot at SIH 2024 that retrieved  data and generated fast, accurate responses using langchain.",
    imgSrc: "/project/RAG.png",
    accentColor: "149, 128, 255" // Electric indigo
  },
];

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if we're on the client side before accessing window
  useEffect(() => {
    // Function to check if viewport is mobile sized
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typical md breakpoint
    };
    
    // Initial check
    checkIfMobile();
    
    // Update on resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <div className="w-full px-4 py-10"> 
        <ProjectHead/>
        <h2 className="text-center text-3xl md:text-4xl font-bold text-white mt-10 mb-12"
        id='projects'>
          My Projects
        </h2>
        
        {isMobile ? (
          /* Mobile View: Render ProjectCard in a scrollable container */
          <div className="flex flex-col pb-4 gap-4 ">
            {projectsData.map((project) => (
              <div key={project.id} className="snap-center ">
                <ProjectCard
                  title={project.title}
                  imgSrc={project.imgSrc}
                  description={project.description}
                  href={project.href}
                  accentColor={project.accentColor}
                />
              </div>
            ))}
          </div>
        ) : (
          /* Desktop View: Render ProjectCard2 in a flex wrap layout */
          <div className='flex flex-row flex-wrap justify-center items-start gap-8'>
            {projectsData.map((project) => (
              <ProjectCard2
                key={project.id}
                title={project.title}
                href={project.href}
                description={project.description}
                imgSrc={project.imgSrc}
              />
            ))}
          </div>
        )}
    </div>
  )
}

export default Projects