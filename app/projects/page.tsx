"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/custom/project-card";

const personalProjects = [
  {
    title: "EXACT - Structured Question Paper Generator",
    href: "#",
    description:
      "A SaaS platform for LaTeX question paper generation.AI integration for question creation",
    dates: "2024 - Present",
    technologies: ["Next.js", "Django", "LaTeX", "OpenAI"],
    image: "/exact-preview2.png",
  },
  {
    title: "EXACT Landing page",
    href: "#",
    description: "A Landing Page created for the software Exact",
    dates: "2024 - Present",
    technologies: ["Next.js", "Django", "LaTeX", "OpenAI"],
    image: "/exact-landingpage.png",
  },
  {
    title: "Personal Portfolio",
    href: "https://j1znu-portfolio.vercel.app/",
    description:
      "The portfolio you are looking at rn . Made with Next JS,tailwind and love",
    dates: "2024",
    technologies: ["Next.js", "Tailwind", "TypeScript"],
    image: "/personal portfolio.png",
  },
];

const openSourceContributions = [
  {
    title: "Components Contributions",
    href: "https://github.com/brijr/components/pull/9",
    description: "Added 3 Pricing components to the collection.",
    dates: "2024",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    image: "/pricing.png",
  },
];

export default function ProjectsPage() {
  return (
    <section className="container mx-auto px-4 py-12">
      {/* Personal Projects Section */}
      <BlurFade>
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
            Personal Projects
          </div>
          <h2 className="text-3xl font-bold sm:text-5xl">Things I’ve Built</h2>
          <p className="text-muted-foreground md:text-xl lg:text-base xl:text-xl">
            Some projects I’ve worked on—either to solve real problems or just
            to learn something new.
          </p>
        </div>
      </BlurFade>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-10">
        {personalProjects.map((project, index) => (
          <BlurFade key={index} delay={0.1 * index}>
            <ProjectCard {...project} />
          </BlurFade>
        ))}
      </div>

      {/* Open Source Contributions Section */}
      <BlurFade>
        <div className="flex flex-col items-center text-center space-y-4 mt-16">
          <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
            Open Source Contributions
          </div>
          <h2 className="text-3xl font-bold sm:text-5xl">
            Giving Back to the Community
          </h2>
          <p className="text-muted-foreground md:text-xl lg:text-base xl:text-xl">
            I enjoy contributing to open-source projects,just software projects in general tbh.
          </p>
        </div>
      </BlurFade>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-10">
        {openSourceContributions.map((project, index) => (
          <BlurFade key={index} delay={0.1 * index}>
            <ProjectCard {...project} />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
