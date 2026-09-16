export function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jishnu PN",
    url: "https://j1znu-portfolio.vercel.app",
    image: "https://j1znu-portfolio.vercel.app/hero.jpg",
    jobTitle: "Web Developer & UI/UX Designer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    sameAs: [
      "https://github.com/j1znuneel",
      "https://www.linkedin.com/in/jishnu-pn-6822762a5/",
      "https://x.com/jishnupneel",
    ],
    knowsAbout: [
      "Web Development",
      "UI/UX Design",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Full Stack Development",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebsiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Jishnu PN — Portfolio",
    url: "https://j1znu-portfolio.vercel.app",
    description:
      "Portfolio of Jishnu PN — Full-stack web developer and UI/UX designer based in Kerala, India.",
    author: {
      "@type": "Person",
      name: "Jishnu PN",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
