"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Image from "next/image";

interface Technology {
  name: string;
  description: string;
  logo: string;
  isBlack?: boolean;
}

interface TechCategory {
  name: string;
  technologies: Technology[];
}

const techStack: TechCategory[] = [
  {
    name: "Languages",
    technologies: [
      {
        name: "TypeScript",
        description: "JavaScript but better",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "Python",
        description: "Versatile programming language",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "C",
        description: "High-performance systems programming",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      },
    ],
  },
  {
    name: "Frontend",
    technologies: [
      {
        name: "React",
        description: "UI component library",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        description: "React framework for production",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Tailwind",
        description: "Utility-first CSS framework",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
    ],
  },
  {
    name: "Backend",
    technologies: [
      {
        name: "Node.js",
        description: "JavaScript runtime",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Django",
        description: "Python web framework",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
        isBlack: true,
      },
    ],
  },
  {
    name: "Databases",
    technologies: [
      {
        name: "Supabase",
        description: "Open-source Firebase alternative",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
      },
      {
        name: "SQLite",
        description: "Lightweight SQL database",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
      },
      {
        name: "MySQL",
        description: "Popular open-source relational database",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
    ],
  },
  {
    name: "Tools & Platforms",
    technologies: [
      {
        name: "GitHub",
        description: "Code hosting and collaboration platform",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        isBlack: true,
      },
      {
        name: "Figma",
        description: "Collaborative interface design tool",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
      {
        name: "Docker",
        description: "Containerization platform for development",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "Linux",
        description: "Open-source operating system",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      },
    ],
  },
];

// Accent colors for just the vertical pills
const pillColors = {
  Languages: "bg-blue-500",
  Frontend: "bg-green-500",
  Backend: "bg-purple-500",
  Databases: "bg-amber-500",
  "Tools & Platforms": "bg-gray-500",
};

export default function TechStack() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      className="py-12 px-4 border-b"
    >
      <h2 className="text-3xl font-semibold mb-8">Tech Stack</h2>
      <div className="space-y-5">
        {techStack.map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4 }}
            className="px-4 rounded-lg"
          >
            <div className="flex items-center mb-3">
              <div
                className={`h-6 w-1.5 mr-2 rounded-full ${
                  pillColors[category.name as keyof typeof pillColors] ||
                  "bg-primary"
                }`}
              ></div>
              <p className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
                {category.name}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.technologies.map((tech, techIndex) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{
                    duration: 0.3,
                    delay: categoryIndex * 0.1 + techIndex * 0.05,
                  }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="h-10"
                >
                  <Card className="p-3 w-fit flex items-center justify-center h-full bg-white/80 dark:bg-card hover:shadow-md transition-all duration-200">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 relative w-5 h-5">
                        <Image
                          src={tech.logo}
                          alt={tech.name}
                          fill
                          className={`object-contain ${tech.isBlack ? "dark:invert" : ""}`}
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{tech.name}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
