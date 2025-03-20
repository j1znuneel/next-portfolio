"use client"

import Hero from "@/components/custom/Hero";
import Navbar from "@/components/custom/navbar";
import TechStack from "@/components/custom/tech-stack";
import { useEffect, useState } from "react";

export default function Home() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) return null;
  return (
    <div className="lg:w-[40%] md:w-[90%] m-auto">
      <Navbar />
      <Hero />
      <TechStack/>
    </div>
  );
}
