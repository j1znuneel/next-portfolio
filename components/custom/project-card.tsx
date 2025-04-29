import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface ProjectProps {
  title: string;
  href?: string;
  description?: string;
  dates?: string;
  technologies?: string[];
  image?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  technologies,
  image,
}: ProjectProps) {
  return (
    <Card className="flex flex-col overflow-hidden rounded-xs border hover:shadow-lg transition-all py-0 pb-6 duration-300 ease-out h-full">
      {href ? (
        <Link
          href={href}
          target="_blank"
          className={cn("block cursor-pointer")}
        >
          {image && (
            <Image
              src={image}
              alt={title}
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          )}
        </Link>
      ) : (
        image && (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="w-full h-full object-cover"
          />
        )
      )}

      <CardHeader className="px-4">
        <CardTitle className="text-lg">{title}</CardTitle>
        {dates && (
          <time className="text-xs text-muted-foreground">{dates}</time>
        )}
        {description && (
          <div className="prose text-sm text-muted-foreground">
            <Markdown>{description}</Markdown>
          </div>
        )}
      </CardHeader>

      {technologies && technologies.length > 0 && (
        <CardContent className="mt-auto px-4">
          <div className="mt-2 flex flex-wrap gap-1">
            {technologies.map((tech) => (
              <Badge
                key={tech}
                className="px-2 py-1 text-xs"
                variant="secondary"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      )}
    </Card>
  );
}
