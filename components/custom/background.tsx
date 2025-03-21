"use client";

export function Background() {
  return (
    <div className="absolute inset-0 w-full h-full -z-10 bg-white dark:bg-[oklch(0.145_0_0)]">
      <div
        className="absolute inset-0 w-full h-full bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]
        bg-[linear-gradient(to_right,oklch(0.97_0_0)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.97_0_0)_1px,transparent_1px)]
        dark:bg-[linear-gradient(to_right,oklch(0.205_0_0)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.205_0_0)_1px,transparent_1px)]"
      ></div>
    </div>
  );
}
