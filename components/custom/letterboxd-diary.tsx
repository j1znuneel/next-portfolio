"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

interface LetterboxdEntry {
  title: string;
  link: string;
  filmTitle: string;
  filmYear: string;
  rating: number;
  watchedDate: string;
  posterUrl: string;
}

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;

  return (
    <div className="flex items-center gap-[1px]">
      {Array.from({ length: fullStars }, (_, i) => (
        <Star
          key={i}
          className="w-3 h-3 fill-emerald-500 text-emerald-500"
        />
      ))}
      {hasHalf && (
        <div className="relative w-3 h-3">
          <Star className="w-3 h-3 text-zinc-600 absolute" />
          <div className="overflow-hidden w-[6px] absolute">
            <Star className="w-3 h-3 fill-emerald-500 text-emerald-500" />
          </div>
        </div>
      )}
    </div>
  );
}

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

function DiaryCard({
  entry,
  index,
}: {
  entry: LetterboxdEntry;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={entry.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/50">
          {entry.posterUrl ? (
            <Image
              src={entry.posterUrl}
              alt={entry.filmTitle}
              fill
              className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-75"
              sizes="(max-width: 640px) 25vw, 120px"
              unoptimized
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-xs text-zinc-400 text-center px-2">
                {entry.filmTitle}
              </span>
            </div>
          )}

          {/* Hover overlay with rating */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
            {entry.rating > 0 && <StarRating rating={entry.rating} />}
          </div>
        </div>

        <div className="mt-2.5 space-y-0.5">
          <h4 className="text-[13px] font-semibold tracking-tight text-zinc-800 dark:text-zinc-200 truncate group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
            {entry.filmTitle}
          </h4>
          <div className="flex items-center gap-1.5">
            {entry.filmYear && (
              <span className="text-[11px] text-zinc-400 dark:text-zinc-500 tabular-nums">
                {entry.filmYear}
              </span>
            )}
            {entry.filmYear && entry.watchedDate && (
              <span className="text-zinc-300 dark:text-zinc-700 text-[10px]">
                ·
              </span>
            )}
            {entry.watchedDate && (
              <span className="text-[11px] text-zinc-400 dark:text-zinc-500">
                {formatDate(entry.watchedDate)}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function SkeletonCard() {
  return (
    <div className="animate-pulse">
      <div className="aspect-[2/3] rounded-lg bg-zinc-200 dark:bg-zinc-800" />
      <div className="mt-2.5 space-y-1.5">
        <div className="h-3.5 bg-zinc-200 dark:bg-zinc-800 rounded w-3/4" />
        <div className="h-2.5 bg-zinc-200 dark:bg-zinc-800 rounded w-1/2" />
      </div>
    </div>
  );
}

export default function LetterboxdDiary() {
  const [entries, setEntries] = useState<LetterboxdEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  useEffect(() => {
    async function fetchEntries() {
      try {
        const res = await fetch("/api/letterboxd");
        const data = await res.json();
        if (data.entries && data.entries.length > 0) {
          setEntries(data.entries);
        } else {
          setError(true);
        }
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchEntries();
  }, []);

  if (error && !loading) return null;

  return (
    <section className="py-12 md:py-20" ref={sectionRef}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-lg font-semibold tracking-tighter text-zinc-900 dark:text-zinc-100 uppercase">
            recently watched
          </h2>
          <Link
            href="https://letterboxd.com/j1znu_neel/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-medium text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors tracking-wide uppercase"
          >
            letterboxd ↗
          </Link>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {loading
            ? Array.from({ length: 4 }, (_, i) => <SkeletonCard key={i} />)
            : entries.map((entry, i) => (
                <DiaryCard key={entry.link} entry={entry} index={i} />
              ))}
        </div>
      </motion.div>
    </section>
  );
}
