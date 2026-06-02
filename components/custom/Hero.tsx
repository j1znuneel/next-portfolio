"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { MapPin } from "lucide-react";
import Me from "@/public/hero.jpg";
import Link from "next/link";
import Github from "@/public/github3.svg";
import Linkedin from "@/public/linkedin.svg";
import X from "@/public/X.svg";
import { useRef, useState, useEffect, useCallback } from "react";

const SCRAMBLE_CHARS = "abcdefghijklmnopqrstuvwxyz!#@$%*";

function useTextScramble(text: string) {
  const [output, setOutput] = useState(text);
  const frameRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const frameCount = useRef(0);

  const scramble = useCallback(() => {
    if (frameRef.current) clearInterval(frameRef.current);
    frameCount.current = 0;
    frameRef.current = setInterval(() => {
      setOutput(
        text.split("").map((char, i) => {
          if ([" ", "&", "/", ".", "-"].includes(char)) return char;
          if (i < frameCount.current / 2) return char;
          return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        }).join("")
      );
      frameCount.current++;
      if (frameCount.current >= text.length * 2) {
        clearInterval(frameRef.current!);
        setOutput(text);
      }
    }, 25);
  }, [text]);

  useEffect(() => () => { if (frameRef.current) clearInterval(frameRef.current); }, []);

  return { output, scramble };
}

function MagneticLink({ href, children }: { href: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18 });
  const sy = useSpring(y, { stiffness: 250, damping: 18 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.4);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.4);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
    >
      <Link
        href={href}
        target="_blank"
        className="opacity-40 hover:opacity-100 transition-opacity duration-300 block"
      >
        {children}
      </Link>
    </motion.div>
  );
}

export default function Hero() {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springRY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const handleImageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(x * 18);
    rotateX.set(-y * 18);
  };

  const { output: roleText, scramble: scrambleRole } = useTextScramble(
    "web developer && ui/ux designer"
  );

  const socialLinks = [
    { href: "https://github.com/j1znuneel", src: Github, alt: "GitHub" },
    { href: "https://www.linkedin.com/in/jishnu-pn-6822762a5/", src: Linkedin, alt: "LinkedIn" },
    { href: "https://x.com/jishnupneel", src: X, alt: "X" },
  ];

  return (
    <div className="pb-12 border-b border-zinc-100 dark:border-zinc-800/50">
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col sm:flex-row sm:items-center justify-between mt-4 w-full"
      >
        <div className="flex flex-col sm:flex-row items-center gap-6 w-full">
          <div style={{ perspective: "800px" }}>
            <motion.div
              style={{ rotateX: springRX, rotateY: springRY }}
              onMouseMove={handleImageMouseMove}
              onMouseLeave={() => { rotateX.set(0); rotateY.set(0); }}
              className="w-24 h-24 cursor-pointer"
            >
              <div className="w-full h-full rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-zinc-200 dark:border-zinc-800">
                <Image
                  src={Me}
                  alt="Jishnu"
                  width={96}
                  height={96}
                  className="object-cover w-full h-full object-bottom scale-125"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col items-center sm:items-start space-y-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <h1 className="text-2xl font-semibold tracking-tighter text-zinc-900 dark:text-zinc-100">
                jishnu pn.
              </h1>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5 justify-center sm:justify-start">
                <MapPin className="h-3.5 w-3.5" />
                kerala, india
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="hidden sm:flex gap-5 items-center"
        >
          {socialLinks.map(({ href, src, alt }) => (
            <MagneticLink key={alt} href={href}>
              <Image src={src} alt={alt} width={18} height={18} className="dark:invert grayscale" />
            </MagneticLink>
          ))}
        </motion.div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-10"
      >
        <p
          className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400 font-medium tracking-tight max-w-md text-center sm:text-left font-mono cursor-default select-none"
          onMouseEnter={scrambleRole}
        >
          {roleText}
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex items-center gap-2 mt-3 justify-center sm:justify-start"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-xs text-zinc-400 dark:text-zinc-500 font-medium tracking-tight">
            available for work
          </span>
        </motion.div>

        <div className="flex sm:hidden gap-5 mt-6 justify-center">
          {socialLinks.map(({ href, src, alt }) => (
            <MagneticLink key={alt} href={href}>
              <Image src={src} alt={alt} width={20} height={20} className="dark:invert grayscale" />
            </MagneticLink>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
