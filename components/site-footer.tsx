import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-purple-800/20 py-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-small-white/[0.2] bg-[size:20px_20px] dark:bg-grid-small-white/[0.05]" />
      <div className="absolute inset-0 bg-gradient-to-t from-purple-800/5 via-background to-background" />

      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 relative">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="font-bold text-xl text-gradient">
            Alexander Mandrov / Unsleeping
          </Link>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} Alexander Mandrov. All rights
            reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/Unsleeping"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-purple-500 transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/alexander-mandrov-584314250/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-purple-500 transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="https://x.com/endlesslysorrow"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-purple-500 transition-colors"
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href="https://stackoverflow.com/users/17703165/unsleeping"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-purple-500 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M18 20.002V15.002H20V22.002H3V15.002H5V20.002H18Z" />
              <path d="M7.5 14.502L16.5 14.502L16.5 12.502L7.5 12.502L7.5 14.502Z" />
              <path d="M8.06 11.002L16.62 12.502L17 10.502L8.44 9.00195L8.06 11.002Z" />
              <path d="M9.25 7.50195L17.17 10.502L17.92 8.67195L10 5.67195L9.25 7.50195Z" />
              <path d="M11.25 4.00195L18.02 8.67195L19.25 7.00195L12.5 2.33195L11.25 4.00195Z" />
            </svg>
            <span className="sr-only">Stack Overflow</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
