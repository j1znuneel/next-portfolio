"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Technology {
  name: string;
  logo: string;
  isBlack?: boolean;
}

interface TechCategory {
  name: string;
  technologies: Technology[];
}

const techStack: TechCategory[] = [
  {
    name: "languages",
    technologies: [
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    ],
  },
  {
    name: "frontend",
    technologies: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    ],
  },
  {
    name: "backend",
    technologies: [
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", isBlack: true },
    ],
  },
  {
    name: "databases",
    technologies: [
      { name: "Supabase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
      { name: "SQLite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
  },
];

export default function TechStack() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-12 md:py-20"
    >
      <h2 className="text-lg font-semibold mb-10 tracking-tighter text-zinc-900 dark:text-zinc-100 uppercase">
        tech stack
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8">
        {techStack.map((category) => (
          <div key={category.name} className="space-y-4">
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 font-bold">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-x-4 gap-y-3">
              {category.technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 group cursor-default"
                >
                  <div className="relative w-4 h-4 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      fill
                      className={`object-contain ${tech.isBlack ? "dark:invert" : ""}`}
                    />
                  </div>
                  <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400 tracking-tight group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
