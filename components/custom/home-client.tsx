"use client";

import Experience from "@/components/custom/experience";
import GitHubChart from "@/components/custom/github-chart";
import Hero from "@/components/custom/Hero";
import LetterboxdDiary from "@/components/custom/letterboxd-diary";
import TechStack from "@/components/custom/tech-stack";


export default function HomeClient() {
  return (
    <>
      <Hero />
      <Experience />
      <TechStack />
      <GitHubChart />
      <LetterboxdDiary />
    </>
  );
}
