import Link from "next/link";
import { Github, Linkedin, Send, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SocialIconsProps {
  className?: string;
  variant?: "default" | "footer" | "hero";
}

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Unsleeping",
    icon: <Github className="h-5 w-5" />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/alexander-mandrov-584314250/",
    icon: <Linkedin className="h-5 w-5" />,
  },
  {
    name: "Twitter",
    href: "https://x.com/endlesslysorrow",
    icon: <Twitter className="h-5 w-5" />,
  },
  {
    name: "Stack Overflow",
    href: "https://stackoverflow.com/users/17703165/unsleeping",
    icon: (
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
    ),
  },
  {
    name: "Telegram",
    href: "https://t.me/unsleeping706",
    icon: <Send className="h-5 w-5" />,
  },
];

export function SocialIcons({
  className = "",
  variant = "default",
}: SocialIconsProps) {
  if (variant === "footer") {
    return (
      <div className={`flex items-center gap-4 ${className}`}>
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-purple-500 transition-colors"
          >
            {link.icon}
            <span className="sr-only">{link.name}</span>
          </Link>
        ))}
      </div>
    );
  }

  if (variant === "hero") {
    return (
      <div className={`flex items-center justify-center gap-6 ${className}`}>
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-purple-800/10 hover:text-purple-500 transition-colors"
            >
              {link.icon}
              <span className="sr-only">{link.name}</span>
            </Button>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socialLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-purple-500 transition-colors"
        >
          {link.icon}
          <span className="sr-only">{link.name}</span>
        </Link>
      ))}
    </div>
  );
}
