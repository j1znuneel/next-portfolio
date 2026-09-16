import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/craft";
import { ThemeProvider } from "next-themes";
import { Background } from "@/components/custom/background";
import Navbar from "@/components/custom/navbar"; // Moved Navbar here

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Jishnu PN | Web Developer & UI/UX Designer — Kerala, India",
    template: "%s | Jishnu PN",
  },
  description:
    "Portfolio of Jishnu PN — Full-stack web developer and UI/UX designer based in Kerala, India. Specializing in Next.js, React, TypeScript, and modern web technologies. Explore projects, open-source contributions, and design work.",
  keywords: [
    "Jishnu PN",
    "Jishnu P N",
    "Web Developer",
    "UI UX Designer",
    "Frontend Developer Kerala",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer India",
    "TypeScript Developer",
    "Portfolio",
    "Web Designer Kerala",
    "Freelance Developer India",
  ],
  authors: [{ name: "Jishnu PN", url: "https://j1znu-portfolio.vercel.app" }],
  creator: "Jishnu PN",
  publisher: "Jishnu PN",
  metadataBase: new URL("https://j1znu-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jishnu PN | Web Developer & UI/UX Designer",
    description:
      "Full-stack web developer and UI/UX designer based in Kerala, India. Explore projects, contributions, and designs.",
    url: "https://j1znu-portfolio.vercel.app",
    siteName: "Jishnu PN — Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jishnu PN | Web Developer & UI/UX Designer",
    description:
      "Full-stack web developer and UI/UX designer based in Kerala, India. Explore projects, contributions, and designs.",
    creator: "@jishnupneel",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google76da1adf28c7e0b0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased tracking-tight`}>
      <body className="px-4 xl:px-0 overflow-x-hidden selection:bg-zinc-200 dark:selection:bg-zinc-800">
        <Background />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <div className="lg:w-[40%] md:w-[90%] m-auto min-h-screen flex flex-col">
            <Navbar/>
            <main className="flex-grow">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </Layout>
  );
}
