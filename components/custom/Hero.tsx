"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Me from "@/public/hero.jpg";
import Link from "next/link";
import Github from "@/public/github3.svg";
import Linkedin from "@/public/linkedin.svg";
import Medium from "@/public/medium.svg";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center justify-between mt-10 w-full"
    >
      {/* Left: Profile Image & Info */}
      <div className="flex items-center gap-6">
        {/* Circular Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-32 h-32 rounded-full overflow-hidden border border-gray-400 shadow-md"
        >
          <Image
            src={Me}
            alt="Jishnu"
            width={128}
            height={128}
            className="object-cover w-full h-full object-bottom scale-125"
            priority
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p className="text-xl font-medium flex items-center text-gray-900 dark:text-gray-100">
            Hey, I'm <span className="font-bold ml-1">Jishnu</span>{" "}
            <motion.span
              animate={{
                rotate: [0, 15, -10, 10, 0], // Hand waving motion
              }}
              transition={{
                duration: 1, // Smooth wave animation
                repeat: Infinity, // Loop forever
                repeatDelay: 1, // Delay of 3 seconds total (1s animation + 2s delay)
              }}
              className="inline-block ml-1 origin-[70%_70%]"
            >
              👋
            </motion.span>
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-300 flex items-center gap-2">
            <MapPin className="h-4 w-4 text-gray-500 dark:text-gray-300" />{" "}
            Kerala, India
          </p>
        </motion.div>
      </div>

      {/* Right: Social Icons */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="flex gap-4 items-center"
      >
        {[
          { href: "https://github.com/yourgithub", src: Github, alt: "GitHub" },
          {
            href: "https://linkedin.com/in/yourlinkedin",
            src: Linkedin,
            alt: "LinkedIn",
          },
          {
            href: "https://medium.com/@yourmedium",
            src: Medium,
            alt: "Medium",
          },
        ].map(({ href, src, alt }) => (
          <motion.div
            key={alt}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              href={href}
              target="_blank"
              className="opacity-70 hover:opacity-100 dark:opacity-90 transition"
            >
              <Image
                src={src}
                alt={alt}
                width={18}
                height={18}
                className="dark:invert"
              />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
