"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Twitter } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    title: "Scaling a Self-Hosted Next.js App: From 45 RPS to 690 RPS",
    description:
      "How I optimized a self-hosted Next.js app to handle 15x more traffic without increasing infrastructure costs.",
    date: "March 8, 2025",
    tags: ["Next.js", "Performance", "Bun", "Scaling", "SSR", "Caching"],
    link: "https://x.com/endlesslysorrow/status/1898142047216738442",
    excerpt:
      "In one of my projects, we deployed a self-hosted Next.js app with SSR pages on a VPS. After going live, we noticed a single instance could only handle 45 RPS. This was a major bottleneck, so I took ownership of performance optimization.",
    highlights: [
      "Initial performance: 45 RPS per instance",
      "After Bun migration: 80 RPS per instance (2x boost)",
      "After caching & optimizations: 450 RPS per instance (~11x boost)",
      "With two instances: 690 RPS total",
    ],
  },
  {
    title: "Overcoming Serverless Limits with AI Services",
    description:
      "Solving serverless function payload limits when working with AI services like GPT-4o, Whisper, and DALL-E.",
    date: "February 26, 2025",
    tags: [
      "Vercel",
      "Next.js",
      "Edge Functions",
      "GPT-4o",
      "Whisper",
      "DALL-E",
      "Redis",
    ],
    link: "https://x.com/endlesslysorrow/status/1894759012517744897",
    excerpt:
      "No self-hosting, no backend - just serverless functions calling AI services via an SDK (GPT-4o-mini, Whisper-1, DALL-E-3). And then: serverless function payload too large (>4.5MB).",
    highlights: [
      "Implemented aggressive audio compression with OfflineAudioContext",
      "Split one serverless function into several modular services",
      "Used /tmp directory with signed tokens for secure file sharing",
      "Improved UX with clearer progress tracking across multiple API calls",
    ],
  },
  {
    title: "Building HTTP Server & Redis with Codecrafters",
    description:
      "My experience building an HTTP server in Go and starting a Redis implementation on the Codecrafters platform.",
    date: "February 21, 2025",
    tags: ["Go", "Codecrafters", "Redis", "HTTP", "Learning"],
    link: "https://x.com/endlesslysorrow/status/1892976345639976992",
    excerpt:
      "Recently, I started 'building my own X' on the Codecrafters platform. I worked with an HTTP server in Go, and it turned out to be not that difficult.",
    highlights: [
      "Successfully completed the HTTP server challenge in Go",
      "Wrote a Redis protocol parser for the Redis challenge",
      "Found extensions beyond the basic course to be more challenging",
      "Chose Go over Rust despite initially planning to use Rust",
    ],
  },
  {
    title: "Breaking Down Mistakes in an RSC Breakdown",
    description:
      "Correcting common misconceptions about React Server Components and explaining how they actually work.",
    date: "February 3, 2025",
    tags: [
      "React",
      "RSC",
      "Next.js",
      "Server Components",
      "Technical Accuracy",
    ],
    link: "https://x.com/endlesslysorrow/status/1886522424868651318",
    excerpt:
      "Yesterday, I watched a month-old video about React Server Components. I found a few inaccuracies and left a comment with timestamps and corrections… but it got deleted 🫠",
    highlights: [
      "Clarified that 'use server' is for server functions, not for marking server components",
      "Explained that server components can be static without async",
      "Corrected misconceptions about the 'use client' directive and pre-rendering",
      "Explained why React Client Components are sent as JS bundles (serialization limitations)",
      "Demonstrated how RSC and RCC composition works beyond just children props",
    ],
  },
  {
    title: "Diving into Next.js Source Code: Revalidation Insights",
    description:
      "Investigating why revalidating a tag in an RSC Child causes the whole RSC Parent page to refresh.",
    date: "June 16, 2024",
    tags: ["Next.js", "Source Code", "Revalidation", "RSC", "React"],
    link: "https://x.com/endlesslysorrow/status/1802271871422836818",
    excerpt:
      "I've been digging into the Next.js source code to tackle an issue I mentioned earlier: When revalidating a tag in an RSC Child, why does the whole RSC Parent (entry page) refresh?",
    highlights: [
      "Set up Next.js locally and explored the monorepo to investigate revalidation",
      "Found that tag revalidation triggers client-side navigation via generateFlight()",
      "Discovered this is a limitation in the current Next.js app-render implementation",
      "Experimented with skipFlight parameter but the page still recompiled",
      "Shared source code links and findings for the community",
    ],
  },
  // {
  //   title: "Optimizing React Performance with Virtualization",
  //   description:
  //     "A deep dive into virtualization techniques for handling large datasets in React applications without sacrificing performance.",
  //   date: "August 28, 2024",
  //   image:
  //     "https://sjc.microlink.io/59n6LJk_s0G2wc5SUr2GPaA2Ejnknxwv2o_WOaqw8BLeNVMK9Hssnjdi_iWJO7uQw0As1-wH_5Nf0utpw3s7ig.jpeg",
  //   tags: ["React", "Performance", "Virtualization", "Optimization"],
  //   link: "https://x.com/endlesslysorrow/status/1886522424868651318",
  //   excerpt:
  //     "When dealing with large datasets in React, virtualization is key. Here's how to implement it effectively...",
  // },
  // {
  //   title: "Mastering TanStack Router's Search Params API",
  //   description:
  //     "How to leverage TanStack Router's searchParams API to create a single source of truth for your application's filtering state.",
  //   date: "September 10, 2024",
  //   image:
  //     "https://sjc.microlink.io/59n6LJk_s0G2wc5SUr2GPaA2Ejnknxwv2o_WOaqw8BLeNVMK9Hssnjdi_iWJO7uQw0As1-wH_5Nf0utpw3s7ig.jpeg",
  //   tags: ["TanStack", "React", "State Management", "SSOT"],
  //   link: "https://x.com/endlesslysorrow/status/1894759012517744897",
  //   excerpt:
  //     "Moving filtering state from React to the URL with TanStack Router creates a true single source of truth...",
  // },
  // {
  //   title: "Event-Driven Architecture in Frontend Applications",
  //   description:
  //     "Migrating from Redux to an event emitter architecture for better maintainability and performance in complex applications.",
  //   date: "September 19, 2024",
  //   image:
  //     "https://sjc.microlink.io/59n6LJk_s0G2wc5SUr2GPaA2Ejnknxwv2o_WOaqw8BLeNVMK9Hssnjdi_iWJO7uQw0As1-wH_5Nf0utpw3s7ig.jpeg",
  //   tags: ["Architecture", "Event-Driven", "Redux", "Performance"],
  //   link: "https://x.com/endlesslysorrow/status/1898142047216738442",
  //   excerpt: "Event-driven architecture can significantly improve maintainability in complex frontend applications...",
  // },
  // {
  //   title: "Serverless Optimization Techniques for Next.js",
  //   description:
  //     "Strategies for optimizing serverless functions in Next.js applications to avoid hitting Vercel's limitations.",
  //   date: "July 15, 2024",
  //   image:
  //     "https://sjc.microlink.io/59n6LJk_s0G2wc5SUr2GPaA2Ejnknxwv2o_WOaqw8BLeNVMK9Hssnjdi_iWJO7uQw0As1-wH_5Nf0utpw3s7ig.jpeg",
  //   tags: ["Next.js", "Serverless", "Optimization", "Vercel"],
  //   link: "https://x.com/endlesslysorrow/status/1876543210987654321",
  //   excerpt:
  //     "Learn how to optimize your serverless functions to avoid hitting Vercel's invocation time and payload limits...",
  // },
  // {
  //   title: "Build Once, Deploy Many: Environment Management in Next.js",
  //   description:
  //     "Implementing a robust environment management solution for Next.js applications with the 'build once, deploy many' methodology.",
  //   date: "June 22, 2024",
  //   image:
  //     "https://sjc.microlink.io/59n6LJk_s0G2wc5SUr2GPaA2Ejnknxwv2o_WOaqw8BLeNVMK9Hssnjdi_iWJO7uQw0As1-wH_5Nf0utpw3s7ig.jpeg",
  //   tags: ["Next.js", "DevOps", "CI/CD", "Environment Management"],
  //   link: "https://x.com/endlesslysorrow/status/1865432109876543210",
  //   excerpt: "The 'build once, deploy many' methodology can significantly improve your deployment pipeline...",
  // },
  // {
  //   title: "Implementing SSOT in Modern React Applications",
  //   description:
  //     "Practical approaches to implementing Single Source of Truth (SSOT) in React applications for better state management.",
  //   date: "May 30, 2024",
  //   image:
  //     "https://sjc.microlink.io/59n6LJk_s0G2wc5SUr2GPaA2Ejnknxwv2o_WOaqw8BLeNVMK9Hssnjdi_iWJO7uQw0As1-wH_5Nf0utpw3s7ig.jpeg",
  //   tags: ["React", "SSOT", "State Management", "Architecture"],
  //   link: "https://x.com/endlesslysorrow/status/1854321098765432109",
  //   excerpt:
  //     "Single Source of Truth (SSOT) is a crucial architectural principle for maintainable React applications...",
  // },
];

export function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="blog" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-small-white/[0.2] bg-[size:20px_20px] dark:bg-grid-small-white/[0.05]" />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-800/5 via-background to-background" />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-block rounded-full bg-purple-800/10 px-3 py-1 text-sm text-purple-500 backdrop-blur-md border border-purple-800/20 mb-4">
            My Insights
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Blog & Threads
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Technical articles and X threads where I share my knowledge and
            experiences
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {blogPosts.map((post, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full flex flex-col backdrop-blur-sm border border-purple-800/20 card-hover overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <div className="absolute inset-0 bg-dark-purple-gradient opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Twitter className="h-12 w-12 text-white opacity-70" />
                  </div>
                </div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <Twitter className="h-4 w-4 text-purple-500" />
                    <span className="text-sm text-muted-foreground">
                      {post.date}
                    </span>
                  </div>
                  <CardTitle className="text-gradient">{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 relative z-10">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="border-purple-800/30 bg-purple-800/5"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    "{post.excerpt}"
                  </p>

                  {post.highlights && (
                    <div className="mt-4 space-y-1">
                      {post.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start text-sm">
                          <span className="mr-2 text-purple-500">•</span>
                          <span className="text-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
                <CardFooter className="relative z-10">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="border-purple-800/30 hover:bg-purple-800/10 hover:border-purple-800/50"
                  >
                    <Link
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read Thread
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Button
            asChild
            className="bg-dark-purple-gradient hover:opacity-90 transition-opacity"
          >
            <Link
              href="https://x.com/endlesslysorrow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="mr-2 h-4 w-4" />
              Follow me on X
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
