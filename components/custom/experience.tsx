"use client";

import { motion, useInView } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { JSX, useRef } from "react";
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiRazorpay,
  SiDjango,
  SiGitlab,
  SiPython,
  SiOpenai,
} from "react-icons/si";

interface ExperienceProps {
  title: string;
  company: string;
  duration: string;
  description: string[];
  techStack: { name: string; icon: JSX.Element }[];
}

const experiences: ExperienceProps[] = [
  {
    title: "ai engineer intern",
    company: "jobpylot ai",
    duration: "feb 2026 — present",
    description: [
      "revamped the ats feature, reducing response time by 67% (60s → 20s).",
      "optimized resume pdf-to-json parsing by 50% (60s → 30s).",
      "implemented real-time spell-check and intelligent text suggestion feature.",
    ],
    techStack: [
      { name: "Python", icon: <SiPython className="text-zinc-500" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-zinc-500" /> },
      { name: "OpenAI", icon: <SiOpenai className="text-zinc-500" /> },
    ],
  },
  {
    title: "software engineering intern",
    company: "hexmos tech",
    duration: "apr 2024 — nov 2024",
    description: [
      "built a dynamic pricing engine using react and nodejs, streamlining app monetization.",
      "integrated razorpay for payments and implemented a modular ui using shadcn.",
      "contributed to the frontend and backend of 'feedback by hexmos' using react and golang.",
      "assisted in developing ansika to automate engineer onboarding processes.",
    ],
    techStack: [
      { name: "React.js", icon: <SiReact className="text-zinc-500" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-zinc-500" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-zinc-500" /> },
      { name: "Django", icon: <SiDjango className="text-zinc-500" /> },
      { name: "Razorpay", icon: <SiRazorpay className="text-zinc-500" /> },
      { name: "Gitlab", icon: <SiGitlab className="text-zinc-500" /> },
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="py-12 md:py-20" ref={sectionRef}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <h2 className="text-lg font-semibold mb-10 tracking-tighter text-zinc-900 dark:text-zinc-100 uppercase">
          experience
        </h2>

        <div className="relative">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            style={{ originY: 0 }}
            className="absolute left-0 top-3 bottom-3 w-px bg-zinc-200 dark:bg-zinc-800"
          />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function ExperienceItem({
  experience,
  index,
}: {
  experience: ExperienceProps;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isActive = experience.duration.includes("present");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -8 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 group"
    >
      {/* Timeline node */}
      <div className="absolute left-[-5px] top-1.5">
        {isActive ? (
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
        ) : (
          <span className="block h-2.5 w-2.5 rounded-full border-2 border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-950 group-hover:border-zinc-500 dark:group-hover:border-zinc-400 transition-colors duration-200" />
        )}
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-500">
            {experience.company}
          </div>
          <h3 className="text-sm font-semibold tracking-tight text-zinc-800 dark:text-zinc-200 mt-0.5">
            {experience.title}
          </h3>
        </div>
        <span className="text-[11px] font-medium text-zinc-400 dark:text-zinc-500 tabular-nums shrink-0 sm:mt-0.5">
          {experience.duration}
        </span>
      </div>

      {/* Description */}
      <ul className="space-y-2">
        {experience.description.map((item, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: index * 0.1 + idx * 0.06 + 0.25 }}
            className="text-sm text-zinc-500 dark:text-zinc-400 flex gap-3 leading-snug"
          >
            <span className="shrink-0 text-zinc-300 dark:text-zinc-700 mt-px">◦</span>
            {item}
          </motion.li>
        ))}
      </ul>

      {/* Tech stack */}
      <div className="flex gap-4 mt-5 items-center">
        <TooltipProvider delayDuration={0}>
          {experience.techStack.map((tech, idx) => (
            <Tooltip key={idx}>
              <TooltipTrigger asChild>
                <div className="opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-default">
                  {tech.icon}
                </div>
              </TooltipTrigger>
              <TooltipContent
                side="bottom"
                className="text-[10px] px-2 py-1 bg-zinc-900 text-zinc-100 border-none"
              >
                {tech.name}
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </motion.div>
  );
}
