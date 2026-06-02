"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/custom/project-card";
import { SiFigma } from "react-icons/si";
import { DesignCarouselRow } from "@/components/custom/carousel";

const personalProjects = [
  {
    title: "PrefetchAI",
    href: "https://prefetchai.vercel.app/",
    description:
      "A lightweight, dependency-free library that predicts user click intent in real-time. Combines mouse kinematics (velocity, acceleration, alignment) with Markov chains to trigger background data fetches before a user even clicks, significantly reducing perceived latency.",
    dates: "2025",
    technologies: ["TypeScript", "React", "npm"],
    image: "/pre-fetch.png",
  },
  {
    title: "CM SIM: KERALA",
    href: "https://cm-sim.vercel.app/",
    description:
      "A retro-style fiscal simulator game where you step into the shoes of the Chief Minister of Kerala. Navigate a decade of fiscal turbulence (2026–2036) by managing liquid reserves, OMB debt, and public trust to survive elections and avoid federal takeover.",
    dates: "2025",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    image: "/cm-sim.jpg",
  },
  {
    title: "CaterEase",
    href: "#",
    description:
      "A mobile app that helps catering managers find and hire staff like cooks and servers by posting event requirements and reviewing applications.",
    dates: "2024",
    technologies: ["Expo", "Django", "TypeScript", "Supabase"],
    image: "/caterease.png",
  },
  {
    title: "VaaniKart",
    href: "https://github.com/j1znuneel/VaaniKart",
    description:
      "A WhatsApp bot that enables digitally illiterate vendors and farmers to create digital product catalogs. The bot supports native language input, auto-translates messages, and generates a website from the conversation.",
    dates: "2024",
    technologies: ["Django", "Next.js", "TypeScript"],
    image: "/vaanikart.png",
  },
  {
    title: "Crudify",
    href: "https://crudify-ai.vercel.app/",
    description:
      "Generate CRUD operations for your backend in seconds,from your repo directly",
    dates: "2024",
    technologies: ["Next.js", "Tailwind", "TypeScript"],
    image: "/crudifyai.jpg",
  },
  {
    title: "Anthakshari",
    href: "https://github.com/j1znuneel/Anthakshari-web",
    description:
      "A fun and interactive Anthakshari game to play with your friends.",
    dates: "2024",
    technologies: ["Next.js", "Tailwind", "TypeScript", "Socket.IO", "Express"],
    image: "/anthakshari.png",
  },
  {
    title: "EXACT - Structured Question Paper Generator",
    href: "https://exact-landing-page.vercel.app/",
    description:
      "A SaaS platform for LaTeX question paper generation.AI integration for question creation",
    dates: "2024 - Present",
    technologies: ["Next.js", "Django", "LaTeX", "OpenAI"],
    image: "/exact-dashboard.png",
  },
  {
    title: "Personal Portfolio",
    href: "https://j1znu-portfolio.vercel.app/",
    description:
      "The portfolio you are looking at rn . Made with Next JS,tailwind and love",
    dates: "2024",
    technologies: ["Next.js", "Tailwind", "TypeScript"],
    image: "/personal portfolio.png",
  }
  
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

const designWorks = [
  {
    title: "Hero section",
    image: "/blue.png",
  },
  {
    title: "CaterEase screens",
    image: "/caterease.png",
  },
  {
    title: "Another hero",
    image: "/Email(1).png",
  },
  {
    title: "Another one",
    image: "/Streamline.png",
  },
  {
    title: "Another one",
    image: "/URBAN(1).png",
  },
  {
    title: "Login screen",
    image: "/Login.png",
  },
  {
    title: "ScreenRun Hero Redesign",
    image: "/ScreenRun.png",
  },
  {
    title: "Saas Landing Page",
    image: "/CaterAssist.png",
  },
  {
    title: "Kannur Tourism Hero Section",
    image: "/Kannur.png",
  },
  {
    title: "Feature Section",
    image: "/Bento.png",
  },
  {
    title: "Old Age Home Website",
    image: "/Thanal.png",
  },
  {
    title: "Pastry Shop Hero Design",
    image: "/Feraro.png",
  },
  {
    title: "College Website Redesign",
    image: "/NASC.png",
  },
  {
    title: "Grassroots Landing Page",
    image: "/Grassroot.png",
  },
  {
    title: "Dashboard Design",
    image: "/EXACT dashboard design.png",
  },
];


const designWorksRow1 = designWorks.filter((_, i) => i % 2 === 0);
const designWorksRow2 = designWorks.filter((_, i) => i % 2 !== 0);


export default function ProjectsPage() {
  return (
    <section className="py-12 md:py-12">
      {/* Personal Projects Section */}
      <BlurFade>
        <h2 className="text-lg font-semibold mb-12 tracking-tighter text-zinc-900 dark:text-zinc-100 uppercase">
          personal projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-20">
          {personalProjects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </BlurFade>

      {/* Open Source Section */}
      <BlurFade delay={0.2}>
        <h2 className="text-lg font-semibold mb-12 mt-40 tracking-tighter text-zinc-900 dark:text-zinc-100 uppercase">
          open source
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-20">
          {openSourceContributions.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </BlurFade>

      {/* Visual Design Section */}
      <BlurFade delay={0.4}>
        <div className="flex flex-col items-start mt-40 mb-12">
          <h2 className="text-lg font-semibold tracking-tighter text-zinc-900 dark:text-zinc-100 uppercase flex items-center gap-2">
            designs
            <span className="inline-flex items-center justify-center w-6 h-6 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md shadow-sm -rotate-12 mx-0.5">
              <SiFigma className="h-3 w-3 text-zinc-900 dark:text-zinc-100" />
            </span>
            i've crafted
          </h2>
        </div>
        
        <div className="flex flex-col gap-10 mt-4 overflow-hidden -mx-4 sm:-mx-0">
          <DesignCarouselRow designs={designWorksRow1} />
          <DesignCarouselRow designs={designWorksRow2} reverse />
        </div>
      </BlurFade>
    </section>
  );
}
