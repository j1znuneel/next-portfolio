'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface TimelineCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  date: string;
  details: string[];
}

export function TimelineCard({ icon: Icon, title, subtitle, date, details }: TimelineCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative flex gap-4 md:flex-row flex-col items-start group"
    >
      {/* Timeline dot and line */}
      <div className="relative flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30">
          <Icon className="w-5 h-5 text-primary/70" />
        </div>
        {/* Line that extends to the next card */}
        <div className="w-0.5 h-full bg-gradient-to-b from-primary/30 to-transparent absolute top-10" />
      </div>

      {/* Content */}
      <motion.div 
        whileHover={{ y: -5 }}
        className="bg-card rounded-xl p-5 md:w-[80%] w-full border border-border/40 hover:border-border/80"
      >
        {/* Title and Date in One Row */}
        <div className="flex justify-between items-center gap-4 mb-4">
          <div>
            <h3 className="text-lg font-medium">{title}</h3>
            <p className="text-muted-foreground text-sm">{subtitle}</p>
          </div>
          <span className="text-xs text-muted-foreground bg-primary/10 dark:bg-primary/20 px-3 py-1 rounded-full">
            {date}
          </span>
        </div>
   
        {/* Details List */}
        <ul className="space-y-2">
          {details.map((detail, index) => (
            <li key={index} className="text-muted-foreground text-sm flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
              {detail}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}
