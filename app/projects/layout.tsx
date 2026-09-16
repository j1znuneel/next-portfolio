import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore personal projects, open-source contributions, and UI/UX design work by Jishnu PN. Built with Next.js, React, TypeScript, and more.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Jishnu PN",
    description:
      "Explore personal projects, open-source contributions, and UI/UX design work by Jishnu PN.",
    url: "https://j1znu-portfolio.vercel.app/projects",
    type: "website",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
