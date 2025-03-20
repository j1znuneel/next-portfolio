"use client"

import Hero from "@/components/custom/Hero";
import Navbar from "@/components/custom/navbar";
import { useEffect, useState } from "react";

export default function Home() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) return null;
  return (
    <div className="w-[40%] m-auto">
      <Navbar />
      <Hero />
    </div>
  );
}
