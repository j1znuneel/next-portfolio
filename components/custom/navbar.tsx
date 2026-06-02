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
    <nav className="flex justify-between items-center py-6 lg:py-12 bg-transparent w-full">
      <div className="flex gap-6 items-center font-medium tracking-tighter text-lg">
        jishnu pn.
      </div>

      <div className="flex justify-between items-center gap-4 md:gap-8">
        <Link href="/" className="text-sm font-medium hover:text-zinc-500 transition-colors tracking-tight">
          home
        </Link>
        <Link href="/projects" className="text-sm font-medium hover:text-zinc-500 transition-colors tracking-tight">
          projects
        </Link>
        <Link href="/blog" className="text-sm font-medium hover:text-zinc-500 transition-colors tracking-tight">
          blog
        </Link>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </Button>
      </div>
    </nav>
  );
}
