"use client";

import { motion, UseInViewOptions } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

// Highlighted text component with shimmer effect
const HighlightedText = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={`bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600 font-semibold relative ${className}`}
    >
      {children}
      <span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"
        style={{ backgroundSize: "200% 100%" }}
      ></span>
    </span>
  );
};

// Animated card component
const AnimatedCard = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="p-6 backdrop-blur-sm border border-purple-800/20 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-800/5 via-transparent to-transparent" />
        {isHovered && (
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-60 transition-opacity duration-300" />
        )}
        <div className="relative z-10">{children}</div>
      </Card>
    </motion.div>
  );
};

const useInViewOptions: UseInViewOptions = { once: true, margin: "-100px" };

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, useInViewOptions);

  return (
    <section id="about" className="py-20 bg-muted/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-small-white/[0.2] bg-[size:20px_20px] dark:bg-grid-small-white/[0.05]" />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-800/5 via-background to-background" />

      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-purple-600/10 blur-3xl"
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-pink-600/10 blur-3xl"
        animate={{
          x: [0, -50, 50, 0],
          y: [0, 50, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 1,
        }}
      />

      <div className="container relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-purple-800/10 px-4 py-2 text-sm text-purple-500 backdrop-blur-md border border-purple-800/20 mb-6">
            <Sparkles className="h-4 w-4" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 relative">
            <span className="bg-clip-text text-transparent bg-purple-gradient">
              Senior Frontend
            </span>{" "}
            Engineer
            <motion.div
              className="absolute -inset-1 rounded-lg bg-purple-500/10 blur-sm"
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <AnimatedCard delay={0.1}>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Badge className="mr-2 bg-dark-purple-gradient text-white">
                Experience
              </Badge>
              <span>Professional Journey</span>
            </h3>
            <p className="text-muted-foreground">
              With over <HighlightedText>6 years of experience</HighlightedText>{" "}
              in frontend development, I&apos;ve evolved from building basic web
              applications to architecting complex, high-performance systems.
              I&apos;ve led development teams, mentored junior developers, and
              consistently delivered solutions that balance technical excellence
              with business needs.
            </p>
          </AnimatedCard>

          <AnimatedCard delay={0.2}>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Badge className="mr-2 bg-dark-purple-gradient text-white">
                Expertise
              </Badge>
              <span>Technical Proficiency</span>
            </h3>
            <p className="text-muted-foreground">
              My core expertise lies in{" "}
              <HighlightedText>React, Next.js, and TypeScript</HighlightedText>,
              with a focus on performance optimization and architectural design.
              I excel at implementing complex state management solutions,
              building responsive interfaces, and creating{" "}
              <HighlightedText>
                maintainable, scalable codebases
              </HighlightedText>{" "}
              through clean code practices and test-driven development.
            </p>
          </AnimatedCard>

          <AnimatedCard delay={0.3}>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Badge className="mr-2 bg-dark-purple-gradient text-white">
                Growth
              </Badge>
              <span>T-Shaped Engineer</span>
            </h3>
            <p className="text-muted-foreground">
              I&apos;m expanding my capabilities as a{" "}
              <HighlightedText>T-shaped engineer</HighlightedText>, growing into
              full-stack development with Node.js, NestJS, PostgreSQL, and cloud
              solutions. I&apos;ve developed expertise in{" "}
              <HighlightedText>
                serverless optimization techniques
              </HighlightedText>{" "}
              and efficiently managing infrastructure to balance performance and
              cost while maintaining scalability.
            </p>
          </AnimatedCard>

          <AnimatedCard delay={0.4}>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Badge className="mr-2 bg-dark-purple-gradient text-white">
                Community
              </Badge>
              <span>Knowledge Sharing</span>
            </h3>
            <p className="text-muted-foreground">
              I actively contribute to the tech community through my{" "}
              <HighlightedText>
                Telegram channel with 1,700+ subscribers
              </HighlightedText>{" "}
              and serve as a{" "}
              <HighlightedText>
                moderator for the largest Russian Next.js community
              </HighlightedText>
              . I regularly share insights on React, Next.js, optimization
              techniques, and architectural best practices through{" "}
              <HighlightedText>
                technical threads and discussions
              </HighlightedText>{" "}
              to help others grow in their development journey.
            </p>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
}
