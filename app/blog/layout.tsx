import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts and ideas on web development, UI/UX design, and technology by Jishnu PN.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Jishnu PN",
    description:
      "Thoughts and ideas on web development, UI/UX design, and technology by Jishnu PN.",
    url: "https://j1znu-portfolio.vercel.app/blog",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
