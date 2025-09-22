"use client";

import Image from "next/image";

export type DesignWork = {
  title: string;
  image: string;
};

interface DesignCarouselRowProps {
  designs: DesignWork[];
  reverse?: boolean;
}

export function DesignCarouselRow({ designs, reverse = false }: DesignCarouselRowProps) {
  const items = [...designs, ...designs];

  return (
    <div
      className="overflow-hidden w-full"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
    >
      <div
        className={`flex gap-6 w-max animate-carousel ${
          reverse ? "animate-carousel-reverse" : ""
        }`}
        style={{ animationDuration: "30s" }}
      >
        {items.map((design, idx) => (
          <div
            key={`${design.title}-${idx}`}
            className="flex-shrink-0 rounded-xl overflow-hidden shadow-lg bg-white/80 backdrop-blur-md"
            style={{ width: 400, height: 300 }}
          >
            <Image
              src={design.image}
              alt={design.title}
              width={400}
              height={300}
              className="object-cover w-full h-full"
              draggable={false}
              priority={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
