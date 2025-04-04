"use client";

import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  SiGoland,
  SiPython,
  SiRazorpay,
  SiDjango,
  SiGitlab,
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
    title: "Software Engineering Intern",
    company: "HexmosTech",
    duration: "April 2024 to November 2024",
    description: [
      "Built a dynamic pricing page from scratch (React with Typescript and NodeJS), showing pricing cards based on app name parameters",
      "Integrated Razorpay for payment and used Shadcn for UI",
      "Contributed to frontend (React.js) and Backend (Golang/Python/Node) of 'Feedback By Hexmos'",
      "Contributed to Ansika, a tool for streamlining new engineer onboarding",
      "Gained valuable teamwork skills through MR reviews and cross-functional collaboration",
      "Developed comprehensive understanding of app development lifecycle from planning to deployment",
    ],
    techStack: [
      { name: "React.js", icon: <SiReact className="text-blue-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "Django", icon: <SiDjango className="text-green-500" /> },
      { name: "Razorpay", icon: <SiRazorpay className="text-indigo-600" /> },
      { name: "Gitlab", icon: <SiGitlab className="text-orange-400" /> },
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="py-8 md:py-16" ref={sectionRef}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 md:px-6"
      >
        <h2 className="text-3xl font-semibold mb-8 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
          Experience
        </h2>

        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} index={index} />
        ))}
      </motion.div>
    </section>
  );
}

function ExperienceCard({
  experience,
  index,
}: {
  experience: ExperienceProps;
  index: number;
}) {
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: false, margin: "-50px" });

  const techStackVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: -20 }}
      animate={isCardInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="max-w-3xl"
    >
      <Card className="dark:border-2 mb-6 border border-border/40 hover:border-border/80 transition-colors duration-200">
        <CardHeader className="space-y-1">
          <CardTitle className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <span className="text-xl font-normal">{experience.title}</span>
            <span className="text-sm text-muted-foreground">
              {experience.company} | {experience.duration}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-none space-y-3 mb-4">
            {experience.description.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0 }}
                animate={isCardInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.1 + idx * 0.1 }}
                className="flex items-start gap-2"
              >
                <span className="text-primary mt-1.5">•</span>
                <span className="text-muted-foreground">{item}</span>
              </motion.li>
            ))}
          </ul>

          <motion.div
            className="flex mt-4 gap-3 flex-wrap items-center"
            initial="hidden"
            animate={isCardInView ? "visible" : "hidden"}
          >
            <TooltipProvider>
              {experience.techStack.map((tech, idx) => (
                <motion.div key={idx} custom={idx} variants={techStackVariants}>
                  <Tooltip>
                    <TooltipTrigger className="p-2 bg-muted rounded-lg shadow-md hover:bg-muted/80 transition-all">
                      {tech.icon}
                    </TooltipTrigger>
                    <TooltipContent>
                      <span className="text-sm">{tech.name}</span>
                    </TooltipContent>
                  </Tooltip>
                </motion.div>
              ))}
            </TooltipProvider>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
