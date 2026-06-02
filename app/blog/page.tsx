"use client";

import { BlurFade } from "@/components/magicui/blur-fade";

export default function BlogPage() {
  return (
    <section className="py-12 pb-24">
      <BlurFade>
        <div className="flex flex-col items-start space-y-4 max-w-2xl">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
            blog
          </div>
          <h2 className="text-2xl font-semibold tracking-tighter sm:text-3xl text-zinc-900 dark:text-zinc-100 uppercase">
            thoughts & ideas
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium tracking-tight">
            a space for sharing insights on development, design, and everything in between.
          </p>
        </div>
      </BlurFade>

      <div className="mt-12">
        <BlurFade delay={0.1}>
          <div className="p-8 rounded-xl border border-dashed border-zinc-200 dark:border-zinc-800 flex flex-col items-center justify-center text-center">
            <h3 className="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">coming soon</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">i haven't started writing yet, but stay tuned.</p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
