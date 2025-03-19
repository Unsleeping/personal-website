"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Award, Users } from "lucide-react";
import { AnimatedBackground } from "./animated-background";
import { Spotlight } from "./spotlight";
import { SocialIcons } from "./social-icons";
import { useEffect, useState } from "react";

// Component for animated counter
const AnimatedCounter = ({
  value,
  label,
  icon,
}: {
  value: number;
  label: string;
  icon: React.ReactNode;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // ms
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentCount = Math.round(value * progress);

      if (frame === totalFrames) {
        clearInterval(counter);
        setCount(value);
      } else {
        setCount(currentCount);
      }
    }, frameDuration);

    return () => clearInterval(counter);
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center p-4 bg-purple-900/10 backdrop-blur-sm rounded-xl border border-purple-500/20"
    >
      <div className="text-purple-500 mb-2">{icon}</div>
      <div className="text-3xl font-bold">{count}+</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </motion.div>
  );
};

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 lg:py-40">
      <AnimatedBackground />

      <div className="container relative z-10">
        <Spotlight className="rounded-3xl p-10">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block rounded-full bg-purple-800/10 px-3 py-1 text-sm text-purple-500 backdrop-blur-md border border-purple-800/20 mb-6">
                Senior Frontend Engineer
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block">Alexander Mandrov</span>
                <span className="mt-2 block text-gradient">
                  Building the web of tomorrow
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="mt-6 text-lg leading-8 text-muted-foreground backdrop-blur-sm">
                Specializing in high-performance web applications with Next.js,
                React, and TypeScript. Expanding into full-stack development as
                a T-shaped engineer with expertise in frontend architecture,
                performance optimization, and serverless solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Button
                asChild
                size="lg"
                className="bg-dark-purple-gradient hover:opacity-90 transition-opacity"
              >
                <Link href="#projects">
                  View my work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-purple-800/50 hover:bg-purple-800/10 transition-colors"
              >
                <Link href="#contact">Contact me</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-10"
            >
              <SocialIcons variant="hero" />
            </motion.div>

            {/* Stats section with animated counters */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatedCounter
                value={6}
                label="Years of Experience"
                icon={<Award className="w-6 h-6" />}
              />
              <AnimatedCounter
                value={1700}
                label="Telegram Subscribers"
                icon={<Users className="w-6 h-6" />}
              />
              {/* <AnimatedCounter value={15} label="Projects Completed" icon={<BookOpen className="w-6 h-6" />} /> */}
            </div>
          </div>
        </Spotlight>
      </div>
    </section>
  );
}
