import type React from "react";
import "@/app/globals.css";
import type { Metadata } from "next";
import { Mona_Sans as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { MotionClientInit } from "@/components/motion-client-init";

// import { ThemeProvider } from "@/components/theme-provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Alexander Mandrov - Frontend Software Engineer",
  description:
    "Portfolio of Alexander Mandrov, a Frontend Software Engineer specializing in Next.js, React, and TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "dark min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {/* <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange> */}
        {children}
        {/* </ThemeProvider> */}
        <MotionClientInit />
      </body>
    </html>
  );
}
