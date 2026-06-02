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
  title: "Jishnu's Portfolio",
  description: "Web Developer & UI/UX Designer",
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
