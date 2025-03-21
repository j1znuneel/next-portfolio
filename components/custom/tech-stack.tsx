"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface Technology {
  name: string;
  description: string;
  logo: string;
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-12"
    >
      <h2 className="text-3xl text-left md:px-4 font-semibold mb-6">Tech Stack</h2>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2500, 
          }),
        ]}
        className="w-full max-w-3xl mx-auto"
      >
        <CarouselContent>
          {techStack.map((category) => (
            <CarouselItem
              key={category.name}
              className="flex flex-col items-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl text-left mb-4">{category.name}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.technologies.map((tech) => (
                    <Card
                      key={tech.name}
                      className="p-4 hover:shadow-lg transition-shadow h-full flex "
                    >
                      <div className="flex items-center  mx-5  ">
                        <div className="w-12 h-12 rounded-lg">
                          <img
                            src={tech.logo}
                            alt={`${tech.name} logo`}
                            className="w-8 h-8 object-contain"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg">{tech.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {tech.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:block" />
        <CarouselNext className="hidden md:block"/>
      </Carousel>
    </motion.section>
  );
}
