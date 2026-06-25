"use client";

import Experience from "@/components/custom/experience";
import GitHubChart from "@/components/custom/github-chart";
import Hero from "@/components/custom/Hero";
import LetterboxdDiary from "@/components/custom/letterboxd-diary";
import TechStack from "@/components/custom/tech-stack";
import { useEffect, useState } from "react";

export default function Home() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

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
