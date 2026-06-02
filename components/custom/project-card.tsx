import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  href?: string;
  description?: string;
  dates?: string;
  technologies?: string[];
  image?: string;
  index?: number;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  technologies,
  image,
  index = 0,
}: ProjectProps) {
  const Wrapper = href ? Link : ("div" as any);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group flex flex-col"
    >
      <Wrapper
        {...(href ? { href, target: "_blank" } : {})}
        className="flex flex-col"
      >
        {/* Media Container */}
        {image && (
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800/20 mb-6">
            <Image
              src={image}
              alt={title}
              width={1200}
              height={750}
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
            />
            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 ring-1 ring-inset ring-zinc-900/5 dark:ring-white/5 rounded-2xl" />
          </div>
        )}

        {/* Content Section */}
        <div className="space-y-3">
          <div className="flex justify-between items-baseline gap-4">
            <h3 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5 transition-colors">
              {title.toLowerCase()}
              {href && (
                <ArrowUpRight className="h-4 w-4 text-zinc-400 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
              )}
            </h3>
            {dates && (
              <span className="text-[11px] font-medium text-zinc-400 dark:text-zinc-500 tabular-nums lowercase tracking-wider">
                {dates}
              </span>
            )}
          </div>

          {description && (
            <div className="text-[14px] text-zinc-500 dark:text-zinc-400 leading-relaxed tracking-tight max-w-2xl">
              <Markdown>{description.toLowerCase()}</Markdown>
            </div>
          )}

          {technologies && technologies.length > 0 && (
            <div className="flex flex-wrap gap-x-5 gap-y-2 pt-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] font-medium lowercase tracking-tight text-zinc-400 dark:text-zinc-500/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </Wrapper>
    </motion.div>
  );
}
