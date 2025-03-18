"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Twitter } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    title: "Optimizing React Performance with Virtualization",
    description:
      "A deep dive into virtualization techniques for handling large datasets in React applications without sacrificing performance.",
    date: "August 28, 2024",
    image:
      "https://sjc.microlink.io/59n6LJk_s0G2wc5SUr2GPaA2Ejnknxwv2o_WOaqw8BLeNVMK9Hssnjdi_iWJO7uQw0As1-wH_5Nf0utpw3s7ig.jpeg",
    tags: ["React", "Performance", "Virtualization", "Optimization"],
    link: "https://x.com/endlesslysorrow/status/1886522424868651318",
    excerpt:
      "When dealing with large datasets in React, virtualization is key. Here's how to implement it effectively...",
  },
  {
    title: "Mastering TanStack Router's Search Params API",
    description:
      "How to leverage TanStack Router's searchParams API to create a single source of truth for your application's filtering state.",
    date: "September 10, 2024",
    image:
      "https://sjc.microlink.io/59n6LJk_s0G2wc5SUr2GPaA2Ejnknxwv2o_WOaqw8BLeNVMK9Hssnjdi_iWJO7uQw0As1-wH_5Nf0utpw3s7ig.jpeg",
    tags: ["TanStack", "React", "State Management", "SSOT"],
    link: "https://x.com/endlesslysorrow/status/1894759012517744897",
    excerpt:
      "Moving filtering state from React to the URL with TanStack Router creates a true single source of truth...",
  },
  {
    title: "Event-Driven Architecture in Frontend Applications",
    description:
      "Migrating from Redux to an event emitter architecture for better maintainability and performance in complex applications.",
    date: "September 19, 2024",
    image:
      "https://sjc.microlink.io/59n6LJk_s0G2wc5SUr2GPaA2Ejnknxwv2o_WOaqw8BLeNVMK9Hssnjdi_iWJO7uQw0As1-wH_5Nf0utpw3s7ig.jpeg",
    tags: ["Architecture", "Event-Driven", "Redux", "Performance"],
    link: "https://x.com/endlesslysorrow/status/1898142047216738442",
    excerpt: "Event-driven architecture can significantly improve maintainability in complex frontend applications...",
  },
  {
    title: "Serverless Optimization Techniques for Next.js",
    description:
      "Strategies for optimizing serverless functions in Next.js applications to avoid hitting Vercel's limitations.",
    date: "July 15, 2024",
    image:
      "https://sjc.microlink.io/59n6LJk_s0G2wc5SUr2GPaA2Ejnknxwv2o_WOaqw8BLeNVMK9Hssnjdi_iWJO7uQw0As1-wH_5Nf0utpw3s7ig.jpeg",
    tags: ["Next.js", "Serverless", "Optimization", "Vercel"],
    link: "https://x.com/endlesslysorrow/status/1876543210987654321",
    excerpt:
      "Learn how to optimize your serverless functions to avoid hitting Vercel's invocation time and payload limits...",
  },
  {
    title: "Build Once, Deploy Many: Environment Management in Next.js",
    description:
      "Implementing a robust environment management solution for Next.js applications with the 'build once, deploy many' methodology.",
    date: "June 22, 2024",
    image:
      "https://sjc.microlink.io/59n6LJk_s0G2wc5SUr2GPaA2Ejnknxwv2o_WOaqw8BLeNVMK9Hssnjdi_iWJO7uQw0As1-wH_5Nf0utpw3s7ig.jpeg",
    tags: ["Next.js", "DevOps", "CI/CD", "Environment Management"],
    link: "https://x.com/endlesslysorrow/status/1865432109876543210",
    excerpt: "The 'build once, deploy many' methodology can significantly improve your deployment pipeline...",
  },
  {
    title: "Implementing SSOT in Modern React Applications",
    description:
      "Practical approaches to implementing Single Source of Truth (SSOT) in React applications for better state management.",
    date: "May 30, 2024",
    image:
      "https://sjc.microlink.io/59n6LJk_s0G2wc5SUr2GPaA2Ejnknxwv2o_WOaqw8BLeNVMK9Hssnjdi_iWJO7uQw0As1-wH_5Nf0utpw3s7ig.jpeg",
    tags: ["React", "SSOT", "State Management", "Architecture"],
    link: "https://x.com/endlesslysorrow/status/1854321098765432109",
    excerpt:
      "Single Source of Truth (SSOT) is a crucial architectural principle for maintainable React applications...",
  },
]

export function BlogSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="blog" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-small-white/[0.2] bg-[size:20px_20px] dark:bg-grid-small-white/[0.05]" />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-800/5 via-background to-background" />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-block rounded-full bg-purple-800/10 px-3 py-1 text-sm text-purple-500 backdrop-blur-md border border-purple-800/20 mb-4">
            My Insights
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Blog & Threads</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Technical articles and Twitter threads where I share my knowledge and experiences
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
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                  </div>
                  <CardTitle className="text-gradient">{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 relative z-10">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="border-purple-800/30 bg-purple-800/5">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground italic">"{post.excerpt}"</p>
                </CardContent>
                <CardFooter className="relative z-10">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="border-purple-800/30 hover:bg-purple-800/10 hover:border-purple-800/50"
                  >
                    <Link href={post.link} target="_blank" rel="noopener noreferrer">
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
          <Button asChild className="bg-dark-purple-gradient hover:opacity-90 transition-opacity">
            <Link href="https://x.com/endlesslysorrow" target="_blank" rel="noopener noreferrer">
              <Twitter className="mr-2 h-4 w-4" />
              Follow me on Twitter
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

