"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

// Helper component to highlight specific terms
const HighlightedText = ({
  text,
  termsToHighlight,
}: {
  text: string;
  termsToHighlight: string[];
}) => {
  if (!termsToHighlight || termsToHighlight.length === 0) {
    return <span>{text}</span>;
  }

  // Create a regex pattern from the terms to highlight
  const pattern = new RegExp(`(${termsToHighlight.join("|")})`, "gi");

  // Split the text by the pattern
  const parts = text.split(pattern);

  return (
    <span>
      {parts.map((part, i) => {
        // Check if this part matches any of the terms to highlight
        const isHighlighted = termsToHighlight.some(
          (term) => part.toLowerCase() === term.toLowerCase()
        );

        return isHighlighted ? (
          <span
            key={i}
            className="bg-purple-500/20 px-1 rounded text-purple-700 dark:text-purple-300 font-medium"
          >
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        );
      })}
    </span>
  );
};

const projects = [
  {
    title: "Viqeo Video Player",
    description:
      "A sophisticated video player with advanced ad integration capabilities and performance optimizations.",
    image: "/player.jpg",
    tags: [
      "JavaScript",
      "TypeScript",
      "Video",
      "Ad Integration",
      "Performance",
      "OOP",
      "Core Web Vitals",
    ],
    highlights: [
      {
        text: "First non-linear ad integration adapter with seamless compatibility built through mocks and unit testing of worst case scenarios from third-party integrations",
        highlightTerms: ["non-linear ad integration", "mocks and unit testing"],
      },
      {
        text: "Migrated from vanilla Redux to event emitter architecture for better maintainability",
        highlightTerms: ["event emitter architecture"],
      },
      {
        text: "Extracted CSS-related code from JS/TS files to improve caching and Core Web Vitals",
        highlightTerms: [],
      },
      {
        text: "Implemented synchronized background music, text-to-speech, and video playbacks",
        highlightTerms: [],
      },
      {
        text: "Support for multiple players on a single page with optimized performance",
        highlightTerms: [],
      },
    ],
  },
  {
    title: "Viqeo Ads Admin",
    description:
      "Internal admin panel to manage ad campaigns with complex hierarchical data structures and advanced filtering capabilities.",
    image: "/admin.png",
    tags: [
      "React",
      "TypeScript",
      "TanStack Query",
      "TanStack Table",
      "TanStack Router",
      "TDD",
      "Tailwind CSS",
    ],
    highlights: [
      {
        text: "Complex tree-like hierarchical structures with efficient loading patterns",
        highlightTerms: ["tree-like hierarchical structures"],
      },
      {
        text: "UI adapter for seamless integration and separation of UI and business logic",
        highlightTerms: ["UI adapter", "separation of UI and business logic"],
      },
      {
        text: "TDD approach with Vitest for unit testing and Playwright for E2E testing",
        highlightTerms: [],
      },
      {
        text: "Moved filtering state from React to TanStack Router with its searchParams API",
        highlightTerms: [],
      },
      {
        text: "Fetching data before mount to avoid useEffect-driven development",
        highlightTerms: ["before mount", "useEffect-driven development"],
      },
    ],
  },
  {
    title: "AgilePoker.ru",
    description:
      "A registration-free planning poker tool designed for Agile teams to estimate story points efficiently.",
    image: "/agilepoker.webp",
    tags: [
      "Next.js",
      "WebSockets",
      "SSG",
      "ISR",
      "RSC",
      "Caching",
      "Server Performance",
    ],
    link: "https://agilepoker.ru",
    highlights: [
      {
        text: "No registration required - instant room creation",
        highlightTerms: [],
      },
      {
        text: "Real-time collaboration using WebSockets",
        highlightTerms: [],
      },
      {
        text: "SEO-friendly architecture with Next.js",
        highlightTerms: [],
      },
      {
        text: "Implemented SSG, ISR, and RSC for optimal performance",
        highlightTerms: ["SSG, ISR, and RSC"],
      },
      {
        text: 'Custom runtime environment management solution with "build once - deploy many" methodology',
        highlightTerms: ["build once - deploy many"],
      },
      {
        text: "Advanced caching strategies for improved server instance performance",
        highlightTerms: [],
      },
    ],
  },
  {
    title: "Chesstery",
    description:
      "An educational platform designed for both teachers and students, centered around chess and learning games.",
    image: "/chesstery.jpeg",
    tags: [
      "React",
      "WebSockets",
      "Chess Engine",
      "Interactive Learning",
      "CMS",
      "Machine Learning",
    ],
    link: "https://chesstery.com",
    highlights: [
      {
        text: "Co-founded the project and raised $50,000 in 2019",
        highlightTerms: ["Co-founded", "raised $50,000"],
      },
      {
        text: "Developed recursive algorithm to traverse all move histories for advanced navigation",
        highlightTerms: ["recursive algorithm"],
      },
      {
        text: "Enhanced basic chess algorithm to include obstacles and treasures on board for children",
        highlightTerms: [],
      },
      {
        text: "Implemented PvP and PvE matches with time controls and customizable skins (gamification model)",
        highlightTerms: [],
      },
      {
        text: "Created custom editor supporting any chess FEN combination figures on deck",
        highlightTerms: [],
      },
      {
        text: "Developed custom CMS for comics supporting both mobile and desktop markdown for each lesson level",
        highlightTerms: [],
      },
      {
        text: "Integrated machine learning for personalized learning paths and difficulty adjustment",
        highlightTerms: ["machine learning", "personalized learning paths"],
      },
    ],
  },
  {
    title: "AI Integration Solutions",
    description:
      "Various AI wrappers and integrations for text-to-speech, audio processing, and image generation applications.",
    image: "/ai.jpeg",
    tags: [
      "Next.js",
      "AI SDK",
      "API Integration",
      "TypeScript",
      "Serverless",
      "BFF",
    ],
    highlights: [
      {
        text: "Smooth AI integrations for text-to-speech applications",
        highlightTerms: [],
      },
      {
        text: "Audio processing pipelines for AI-generated content",
        highlightTerms: [],
      },
      {
        text: "Image processing and generation with AI models",
        highlightTerms: [],
      },
      {
        text: "Type-safe wrappers for AI APIs",
        highlightTerms: ["Type-safe wrappers"],
      },
      {
        text: "Optimized for performance and cost efficiency",
        highlightTerms: [],
      },
      {
        text: "Serverless optimization techniques to manage Vercel limitations",
        highlightTerms: ["Serverless optimization"],
      },
    ],
  },
  {
    title: "Chrome Extensions",
    description:
      "Developed various Chrome extensions for productivity, AI integration, and enhancing web applications.",
    image: "/extensions.png",
    tags: ["JavaScript", "Chrome API", "React", "AI SDK", "BFF"],
    highlights: [
      {
        text: "AI wrappers for intelligent content processing",
        highlightTerms: ["AI wrappers"],
      },
      {
        text: "Gmail sorter that appends labels for each type of email derived from AI analysis",
        highlightTerms: [],
      },
      {
        text: "Comment system similar to Vercel's deployment previews where users can toggle comments on any site",
        highlightTerms: ["Vercel's deployment previews"],
      },
      {
        text: "Generate metadata from audio files using AI transcription",
        highlightTerms: [],
      },
      {
        text: "Image generation and manipulation tools integrated with browser context",
        highlightTerms: [],
      },
    ],
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-small-white/[0.2] bg-[size:20px_20px] dark:bg-grid-small-white/[0.05]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-800/5 to-background" />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-block rounded-full bg-purple-800/10 px-3 py-1 text-sm text-purple-500 backdrop-blur-md border border-purple-800/20 mb-4">
            My Work
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A selection of projects I&apos;ve worked on throughout my career
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full flex flex-col overflow-hidden group backdrop-blur-sm border border-purple-800/20 card-hover">
                <div className="relative overflow-hidden aspect-video">
                  <div className="absolute inset-0 bg-dark-purple-gradient opacity-30 group-hover:opacity-20 transition-opacity duration-500" />
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className={cn(
                      "object-cover transition-transform duration-500 group-hover:scale-105",
                      project.title === "AgilePoker.ru" && "bg-white"
                    )}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-gradient">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="border-purple-800/30 bg-purple-800/5"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <ul className="space-y-2 text-sm">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 text-purple-500">•</span>
                        <HighlightedText
                          text={highlight.text}
                          termsToHighlight={highlight.highlightTerms}
                        />
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  {project.link && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="mr-2 border-purple-800/30 hover:bg-purple-800/10 hover:border-purple-800/50"
                    >
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Visit
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
