import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function MyTimeLine() {
  const data = [
    {
      title: "April 2025",
      content: (
        <div>
          <p className="mb-4 text-sm font-normal text-neutral-300 md:text-base dark:text-neutral-100">
            Launched FinTrack 🚀, a personal finance tracker helping users manage budgets, expenses, and income with insightful charts 📊 and analytics 📈.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-400 md:text-sm dark:text-neutral-300">
            Built with React, Tailwind CSS, Express.js, and MongoDB, it features robust authentication 🔐, real-time state management, and interactive visualizations. Acquired over 60 active users shortly after launch! 🎉
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/Fintrack/1.jpeg"
              alt="FinTrack Dashboard"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/Fintrack/3.jpeg"
              alt="FinTrack Expense Tracking"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/Fintrack/4.jpeg"
              alt="FinTrack Budgeting"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/Fintrack/2.jpeg"
              alt="FinTrack Income Management"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Dec 2024",
      content: (
        <div>
          <p className="mb-4 text-sm font-normal text-neutral-300 md:text-base dark:text-neutral-100">
            Participated in the Smart India Hackathon (SIH) 2024 Grand Finale 🏆.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-400 md:text-sm dark:text-neutral-300">
            Collaborated intensively with my team 🤝 to develop and present innovative solutions under pressure, tackling real-world challenges and gaining invaluable experience in rapid prototyping and teamwork 💡.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/SIH/sih1.jpeg"
              alt="SIH Grand Finale Team"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/SIH/6.jpg"
              alt="SIH Presentation"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/SIH/5.jpg"
              alt="SIH Judging"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/SIH/2.jpg"
              alt="SIH Certificate"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Achievements & Projects",
      content: (
        <div>
          <p className="mb-2 text-sm font-normal text-neutral-300 md:text-base dark:text-neutral-100">
            Consistent problem-solving practice on LeetCode 💻.
          </p>
          <div className="mb-4">
            <div className="flex items-center gap-2 text-xs text-neutral-400 md:text-sm dark:text-neutral-300">
              ✅ Solved 500+ questions, strengthening understanding of data structures and algorithms.
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-400 md:text-sm dark:text-neutral-300">
              ✅ Achieved a competitive rating of 1700+ 🌟.
            </div>
          </div>

          <p className="mb-4 text-sm font-normal text-neutral-300 md:text-base dark:text-neutral-100">
            Developed TrailBlaze 🌲, a full-stack web application for discovering and reviewing campgrounds.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-400 md:text-sm dark:text-neutral-300">
            Built using Node.js, Express, and MongoDB, featuring user authentication, reviews, and campground management 🗺️.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="/Mentions/3.png"
              alt="LeetCode 500+ Questions Solved"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/Mentions/1.png"
              alt="LeetCode 1700+ Rating"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/project/TrailBlaze1.png"
              alt="TrailBlaze Project Screenshot"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
             <img
              src="/Mentions/2.png"
              alt="Leetcode Image" 
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
