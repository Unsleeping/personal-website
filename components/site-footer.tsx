import Link from "next/link";
import { SocialIcons } from "./social-icons";

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

        <SocialIcons variant="footer" />
      </div>
    </footer>
  );
}
