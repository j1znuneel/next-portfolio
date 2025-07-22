"use client";

import Experience from "@/components/custom/experience";
import Hero from "@/components/custom/Hero";
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
    </>
  );
}
