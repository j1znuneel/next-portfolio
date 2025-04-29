"use client";

import Image from "next/image";

interface DesignCardProps {
  title: string;
  image: string;
}

export function DesignCard({ title, image }: DesignCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <div className="overflow-hidden rounded-lg relative w-full h-full">
        <Image
          src={image}
          alt={title}
          width={1000}
          height={800}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-4">
        <h3 className="text-lg font-medium text-white">{title}</h3>
      </div>
    </div>
  );
}
