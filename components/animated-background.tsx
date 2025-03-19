"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const createStar = (container: HTMLDivElement) => {
  const star = document.createElement("div");
  star.className = "absolute rounded-full bg-white";

  // Random size
  const size = Math.random() * 2 + 1;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  // Random position
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;

  // Random opacity
  star.style.opacity = `${Math.random() * 0.8 + 0.2}`;

  // Add to container
  container.appendChild(star);

  // Remove after animation
  setTimeout(() => {
    star.remove();
  }, 5000);
};

export function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    createStar(container);

    // Create initial stars
    Array.from({ length: 50 }).forEach(() => {
      createStar(container);
    });

    // Create new stars periodically
    const interval = setInterval(() => {
      createStar(container);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/30 via-black/50 to-purple-900/30" />
      <div ref={containerRef} className="absolute inset-0" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-600/20 blur-3xl"
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
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-pink-600/20 blur-3xl"
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
    </div>
  );
}
