"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <nav className="flex justify-between items-center p-4 lg:mt-12 border-b bg-background w-full">
      <div className="flex gap-6 items-center font-semibold">jishnu pn.</div>

      <div className="flex justify-between items-center gap-6">
        <Link href="/" className="hover:underline">
          home
        </Link>
        <Link href="/projects" className="hover:underline">
          projects
        </Link>
        <p>blog</p>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>
      </div>
    </nav>
  );
}
