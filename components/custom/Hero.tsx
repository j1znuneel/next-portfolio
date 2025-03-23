"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Me from "@/public/hero.jpg";
import Link from "next/link";
import Github from "@/public/github3.svg";
import Linkedin from "@/public/linkedin.svg";
import Medium from "@/public/medium.svg";
import X from "@/public/X.svg";

export default function Hero() {
  const socialLinks = [
    { href: "https://github.com/j1znuneel", src: Github, alt: "GitHub" },
    {
      href: "https://www.linkedin.com/in/jishnu-pn-6822762a5/",
      src: Linkedin,
      alt: "LinkedIn",
    },
    // { href: "https://medium.com/@yourmedium", src: Medium, alt: "Medium" },
    { href: "https://x.com/jishnupneel", src: X, alt: "X" },
  ];

  return (
    <div className="border-b pb-8">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col sm:flex-row sm:items-center justify-between mt-10 w-full"
      >
        {/* Left: Profile Image & Info */}
        <div className="flex flex-col sm:flex-row items-center gap-6 w-full">
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

          {/* Text & Socials (Mobile) */}
          <div className="flex flex-col items-center sm:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <p className="text-xl font-medium flex items-center text-gray-900 dark:text-gray-100">
                Hey, I'm <span className="font-bold ml-1">Jishnu</span>{" "}
                <motion.span
                  animate={{ rotate: [0, 15, -10, 10, 0] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                  className="inline-block ml-2 origin-[70%_70%]"
                >
                  👋
                </motion.span>
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-300  w-full justify-center flex items-center  md:justify-start gap-2">
                <MapPin className="h-4 w-4 text-gray-500 dark:text-gray-300" />{" "}
                Kerala, India
              </p>
            </motion.div>

            {/* Social Icons (Mobile) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex sm:hidden gap-4 mt-4"
            >
              {socialLinks.map(({ href, src, alt }) => (
                <motion.div
                  key={alt}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={href}
                    target="_blank"
                    className="opacity-70 hover:opacity-100 transition"
                  >
                    <Image
                      src={src}
                      alt={alt}
                      width={20}
                      height={20}
                      className="dark:invert"
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Social Icons (Desktop) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="hidden sm:flex gap-4 items-center"
        >
          {socialLinks.map(({ href, src, alt }) => (
            <motion.div
              key={alt}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href={href}
                target="_blank"
                className="opacity-70 hover:opacity-100 transition"
              >
                <Image
                  src={src}
                  alt={alt}
                  width={20}
                  height={20}
                  className="dark:invert"
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-8 md:px-4 text-lg font-medium text-center md:text-left text-gray-700 dark:text-gray-300"
      >
        Web Developer && UI/UX Designer
      </motion.p>
    </div>
  );
}
