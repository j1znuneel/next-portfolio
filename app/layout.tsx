import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/craft";
import { ThemeProvider } from "next-themes";
import { Background } from "@/components/custom/background";

const font = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout className={font.className}>
      <body className="px-4 xl:px-0">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
          <Background />
        </ThemeProvider>
      </body>
    </Layout>
  );
}
