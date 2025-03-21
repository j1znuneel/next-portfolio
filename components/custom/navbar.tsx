"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="flex justify-between items-center p-4 lg:mt-12 border-b bg-background w-full">
      <div className="flex gap-6 items-center font-semibold">jishnu pn.</div>

      {/* Right: Dark Mode Toggle */}
      <div className="flex justify-between items-center gap-6">
        <p>home</p>
        <p>projects</p>
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
