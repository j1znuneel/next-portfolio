"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

import Github from "@/public/github2.svg";
import Linkedin from "@/public/linkedin.svg";
import Medium from "@/public/medium.svg";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="flex justify-between items-center p-4 border-b bg-background w-full">
      <div className="flex gap-6 items-center">
        jishnu pn.
      </div>
      {/* Left: Social Links
      <div className="flex gap-6 items-center">
        <Link href="https://github.com/yourgithub" target="_blank">
          <Image
            src={Github}
            alt="GitHub"
            width={20}
            height={20}
            className="opacity-80 hover:opacity-100 transition"
          />
        </Link>
        <Link href="https://linkedin.com/in/yourlinkedin" target="_blank">
          <Image
            src={Linkedin}
            alt="LinkedIn"
            width={20}
            height={20}
            className="opacity-70 hover:opacity-100 transition"
          />
        </Link>
        <Link href="https://medium.com/@yourmedium" target="_blank">
          <Image
            src={Medium}
            alt="Medium"
            width={20}
            height={20}
            className="opacity-70 hover:opacity-100 transition"
          />
        </Link>
      </div> */}

      {/* Right: Dark Mode Toggle */}
      <div className="flex justify-between items-center gap-6">
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
