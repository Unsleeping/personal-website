"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code2,
  Layout,
  Layers,
  Lightbulb,
  Palette,
  BarChart3,
  Server,
  Terminal,
  Zap,
  TestTube,
  SplitSquareVertical,
} from "lucide-react";
import { RotatingCube } from "./rotating-cube";

const skills = [
  {
    category: "Programming Languages",
    icon: <Code2 className="h-6 w-6" />,
    items: ["TypeScript / JavaScript", "Python", "Go"],
  },
  {
    category: "Frontend Frameworks",
    icon: <Layout className="h-6 w-6" />,
    items: ["Next.js", "React.js"],
  },
  {
    category: "State Management",
    icon: <Layers className="h-6 w-6" />,
    items: [
      "Redux",
      "Redux Toolkit",
      "Redux Saga",
      "Redux Thunk",
      "Middlewares",
      "Zustand",
      "Context API",
      "Immer",
      "Memoization",
      "React API",
      "Reselect",
    ],
  },
  {
    category: "UI Libraries",
    icon: <Palette className="h-6 w-6" />,
    items: [
      "TailwindCSS",
      "Material UI",
      "Shadcn UI",
      "Styled Components",
      "Sass",
    ],
  },
  {
    category: "Data Management",
    icon: <BarChart3 className="h-6 w-6" />,
    items: [
      "TanStack Query",
      "TanStack Table",
      "TanStack Router",
      "React Hook Form",
      "Zod",
    ],
  },
  {
    category: "Backend & Databases",
    icon: <Server className="h-6 w-6" />,
    items: [
      "Node.js",
      "NestJS",
      "MongoDB",
      "PostgreSQL",
      "TypeORM",
      "Prisma",
      "Redis",
    ],
  },
  {
    category: "Server-Side Rendering",
    icon: <Zap className="h-6 w-6" />,
    items: [
      "SSR",
      "SSG",
      "ISR",
      "RSC",
      "PPR",
      "RSC+RCC Composition",
      "Edge Runtime",
      "Middleware",
    ],
  },
  {
    category: "Performance Optimization",
    icon: <SplitSquareVertical className="h-6 w-6" />,
    items: [
      "Lazy Loading",
      "Code Splitting",
      "Bundle Analysis",
      "Tree Shaking",
      "Memoization",
      "Virtualization",
    ],
  },
  {
    category: "Testing & UI Kits",
    icon: <TestTube className="h-6 w-6" />,
    items: [
      "Vitest",
      "Playwright",
      "Jest",
      "React Testing Library",
      "Storybook",
      "E2E Testing",
      "Unit Testing",
    ],
  },
  {
    category: "DevOps & Hosting",
    icon: <Terminal className="h-6 w-6" />,
    items: [
      "Vercel",
      "Netlify",
      "Firebase",
      "Docker",
      "CI/CD",
      "GitLab",
      "AWS",
      "GCP",
      "Self-hosted (VPS, EC2, Dedicated)",
    ],
  },
  {
    category: "Architecture & Patterns",
    icon: <Lightbulb className="h-6 w-6" />,
    items: [
      "SOLID",
      "TDD",
      "DDD",
      "SSOT",
      "SoC",
      "GRASP",
      "Clean Code",
      "Event Driven Architecture",
      "Serverless Optimization",
    ],
  },
];

export function SkillsSection() {
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
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-small-white/[0.2] bg-[size:20px_20px] dark:bg-grid-small-white/[0.05]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-800/5 to-background" />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-block rounded-full bg-purple-800/10 px-3 py-1 text-sm text-purple-500 backdrop-blur-md border border-purple-800/20 mb-4">
            My Expertise
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Skills & Technologies
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A comprehensive set of technical skills I've developed throughout my
            career
          </p>
        </div>

        <div className="mb-16">
          <RotatingCube
            skills={[
              "Next.js",
              "React",
              "TypeScript",
              "TanStack",
              "TailwindCSS",
              "Performance",
            ]}
          />
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="backdrop-blur-sm border border-purple-800/20 card-hover overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-800/5 via-transparent to-transparent" />
                <CardHeader className="flex flex-row items-center gap-4 relative z-10">
                  <div className="bg-dark-purple-gradient p-2 rounded-full text-white">
                    {skill.icon}
                  </div>
                  <CardTitle>{skill.category}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-purple-800/10 text-foreground border border-purple-800/20"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
