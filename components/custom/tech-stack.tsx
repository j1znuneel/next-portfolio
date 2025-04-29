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
        isBlack:true
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

export default function TechStack() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-12 px-4 border-b"
    >
      <h2 className="text-3xl font-semibold mb-8">Tech Stack</h2>
      <div className="space-y-5">
        {techStack.map((category) => (
          <div key={category.name}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.technologies.map((tech) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-4 flex flex-row items-center gap-4 hover:shadow-md transition">
                    {tech.isBlack ? (
                      <Image
                        src={tech.logo}
                        alt={tech.name}
                        width={40}
                        height={40}
                        className="object-contain w-10 h-10 dark:invert"
                      />
                    ):(
                      <Image
                        src={tech.logo}
                        alt={tech.name}
                        width={40}
                        height={40}
                        className="object-contain w-10 h-10"
                      />
                    )}

                    <div>
                      <h4 className="font-bold text-lg">{tech.name}</h4>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
