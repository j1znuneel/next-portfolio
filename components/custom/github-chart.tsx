"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState, useMemo } from "react";
import Link from "next/link";

interface Contribution {
  date: string;
  level: number;
}

interface ContributionData {
  total: number;
  contributions: Contribution[];
}

const LEVEL_COLORS = [
  "bg-zinc-100 dark:bg-zinc-800/50",
  "bg-emerald-200 dark:bg-emerald-900/70",
  "bg-emerald-300 dark:bg-emerald-700/70",
  "bg-emerald-400 dark:bg-emerald-500/70",
  "bg-emerald-500 dark:bg-emerald-400/80",
];

const MONTH_LABELS = [
  "jan", "feb", "mar", "apr", "may", "jun",
  "jul", "aug", "sep", "oct", "nov", "dec",
];

function ContributionGrid({ contributions }: { contributions: Contribution[] }) {
  const { weeks, monthPositions } = useMemo(() => {
    if (contributions.length === 0) return { weeks: [], monthPositions: [] };

    // GitHub's endpoint returns cells in row-major order (day-of-week × weeks).
    // The ID pattern is contribution-day-component-{row}-{col} where row=dayOfWeek, col=weekIndex.
    // But the data comes ordered row-by-row. We need to reorganize into columns (weeks).
    // 
    // Actually, looking at the regex extraction, dates come in row-major order.
    // Let's figure out the grid from the dates directly.

    // Sort by date first
    const sorted = [...contributions].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    const weeks: Contribution[][] = [];
    let currentWeek: Contribution[] = [];

    // Pad the first week
    const firstDate = new Date(sorted[0].date);
    const firstDay = firstDate.getDay();
    for (let i = 0; i < firstDay; i++) {
      currentWeek.push({ date: "", level: -1 });
    }

    for (const contrib of sorted) {
      currentWeek.push(contrib);
      if (currentWeek.length === 7) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    }
    if (currentWeek.length > 0) {
      weeks.push(currentWeek);
    }

    // Month label positions
    const monthPos: { label: string; col: number }[] = [];
    let lastMonth = -1;
    for (let w = 0; w < weeks.length; w++) {
      for (const day of weeks[w]) {
        if (!day.date) continue;
        const month = new Date(day.date).getMonth();
        if (month !== lastMonth) {
          monthPos.push({ label: MONTH_LABELS[month], col: w });
          lastMonth = month;
        }
        break;
      }
    }

    return { weeks, monthPositions: monthPos };
  }, [contributions]);

  return (
    <div className="overflow-x-auto scrollbar-hide">
      {/* Month labels */}
      <div className="relative h-4 mb-1.5">
        {monthPositions.map(({ label, col }, i) => {
          const nextCol = monthPositions[i + 1]?.col ?? weeks.length;
          if (nextCol - col < 3) return null;
          return (
            <span
              key={`${label}-${col}`}
              className="absolute text-[10px] text-zinc-400 dark:text-zinc-600 font-medium"
              style={{ left: `${col * 13}px` }}
            >
              {label}
            </span>
          );
        })}
      </div>

      {/* Grid */}
      <div className="inline-flex gap-[3px]">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-[3px]">
            {week.map((day, di) => (
              <motion.div
                key={`${wi}-${di}`}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.2,
                  delay: Math.min(wi * 0.008, 0.4),
                  ease: "easeOut",
                }}
                className={`w-[10px] h-[10px] rounded-[2px] transition-colors ${
                  day.level === -1
                    ? "bg-transparent"
                    : LEVEL_COLORS[day.level] ?? LEVEL_COLORS[0]
                }`}
                title={day.date ? `${day.date}` : ""}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function SkeletonGrid() {
  return (
    <div className="animate-pulse">
      <div className="h-[86px] bg-zinc-200/50 dark:bg-zinc-800/30 rounded-lg w-full" />
    </div>
  );
}

export default function GitHubChart() {
  const [data, setData] = useState<ContributionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  useEffect(() => {
    async function fetchContributions() {
      try {
        const res = await fetch("/api/github");
        const json = await res.json();
        if (json.contributions && json.contributions.length > 0) {
          setData(json);
        } else {
          setError(true);
        }
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchContributions();
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
            contributions
          </h2>
          <Link
            href="https://github.com/j1znuneel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-medium text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors tracking-wide uppercase"
          >
            github ↗
          </Link>
        </div>

        {loading ? (
          <SkeletonGrid />
        ) : data ? (
          <div>
            <ContributionGrid contributions={data.contributions} />
            <p className="text-[11px] text-zinc-400 dark:text-zinc-500 mt-4 tabular-nums">
              {data.total} contributions in the last year
            </p>
          </div>
        ) : null}
      </motion.div>
    </section>
  );
}
