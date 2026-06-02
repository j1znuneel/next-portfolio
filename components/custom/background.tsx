"use client";

export function Background() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 bg-background pointer-events-none">
      <div
        className="absolute inset-0 w-full h-full bg-[size:20px_20px] 
        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_-20%,#000_30%,transparent_100%)]
        bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)]
        dark:bg-[linear-gradient(to_right,var(--grid-color-dark)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color-dark)_1px,transparent_1px)]"
      ></div>
    </div>
  );
}
