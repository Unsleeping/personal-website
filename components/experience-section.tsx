"use client"

import { motion, useScroll } from "framer-motion"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "LLC Viqeo",
    period: "March 2024 - Present",
    location: "Tel Aviv, Israel",
    description: "Leading the development of admin dashboard and video player solutions.",
    responsibilities: [
      "Designed and developed complex tree-like hierarchical structures with efficient loading patterns",
      "Built UI adapter for seamless integration, breaking logic into classes for better testability",
      "Leveraged TanStack ecosystem while avoiding useEffect-driven development",
      "Developed a brand-new ad adapter with non-linear ad integration",
      "Implemented support for managing multiple players on a single page",
    ],
    technologies: ["Next.js", "React", "TypeScript", "TanStack", "TDD", "Vitest", "Playwright"],
  },
  {
    title: "Bachelor's Degree in Theoretical Physics",
    company: "Moscow State University",
    period: "2017-2021",
    location: "Moscow, Russia",
    description: "Studied theoretical physics, developing strong analytical and problem-solving skills.",
    isEducation: true,
    overlapping: true,
    position: "left",
  },
  {
    title: "Middle Frontend Developer",
    company: "LLC Viqeo",
    period: "Jan 2022 - March 2024",
    location: "Tel Aviv, Israel",
    description: "Collaborated on video player development and user dashboard enhancements.",
    responsibilities: [
      "Developed video player features using vanilla JavaScript",
      "Implemented ad integration within the player",
      "Enhanced user dashboard for video content management",
      "Created tools for generating and managing embed codes",
      "Developed customizable video player configurations",
      "Created a custom runtime environment management solution for Next.js",
    ],
    technologies: ["JavaScript", "React", "Next.js", "Video", "Ad Integration"],
  },
  {
    title: "Frontend Developer",
    company: "Chesstery",
    period: "Mar 2019 - Jan 2022",
    location: "Remote",
    description: "Co-founded and developed an interactive chess learning platform.",
    responsibilities: [
      "Co-founded the project and raised $50,000 in 2019",
      "Designed and implemented a base chess engine and interactive board",
      "Developed recursive algorithm to traverse all move histories",
      "Established real-time socket connections for tutor-student interactions",
      "Built a chess editor for custom game scenarios with any FEN combination",
      "Created a comprehensive learning platform with personalized plans",
      "Implemented virtualization for large datasets with normalization for O(1) lookups",
    ],
    technologies: ["React", "WebSockets", "Chess Engine", "Machine Learning"],
    overlapping: true,
  },
]

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-small-white/[0.2] bg-[size:20px_20px] dark:bg-grid-small-white/[0.05]" />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-800/5 via-background to-background" />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-block rounded-full bg-purple-800/10 px-3 py-1 text-sm text-purple-500 backdrop-blur-md border border-purple-800/20 mb-4">
            My Journey
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Experience & Education</h2>
          <p className="mt-4 text-lg text-muted-foreground">My professional journey and educational background</p>
        </div>

        <div ref={containerRef} className="relative mx-auto max-w-4xl">
          {/* Timeline line */}
          <div className="absolute left-[50%] top-0 h-full w-0.5 bg-gradient-to-b from-purple-600 via-purple-500 to-purple-300 -translate-x-1/2" />

          {experiences.map((experience, index) => {
            const isEven = index % 2 === 0
            const position = experience.position === "left" ? false : isEven

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: position ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative mb-16 md:mb-24 flex ${position ? "md:flex-row" : "md:flex-row-reverse"} flex-col items-center`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 -translate-x-1/2 z-10 w-12 h-12 rounded-full border-4 border-background flex items-center justify-center bg-dark-purple-gradient">
                  {experience.isEducation ? (
                    <GraduationCap className="h-5 w-5 text-white" />
                  ) : (
                    <Briefcase className="h-5 w-5 text-white" />
                  )}
                </div>

                {/* Overlapping indicator */}
                {experience.overlapping && (
                  <div className="absolute left-1/2 -translate-x-1/2 z-5 w-6 h-24 bg-purple-500/20 rounded-full blur-md -mt-12" />
                )}

                <div className={`w-full md:w-[calc(50%-2rem)] ${position ? "md:pr-8" : "md:pl-8"} mb-8 md:mb-0`}>
                  <div className="bg-card rounded-xl p-6 border border-purple-800/20 shadow-lg shadow-purple-800/5 card-hover backdrop-blur-sm">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-dark-purple-gradient text-white">
                          {experience.isEducation ? "Education" : "Experience"}
                        </Badge>
                        <h3 className="text-xl font-bold">{experience.title}</h3>
                      </div>

                      <div className="flex flex-col md:flex-row md:items-center gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4 text-purple-500" />
                          <span>{experience.period}</span>
                        </div>
                        <div className="hidden md:block mx-2">•</div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4 text-purple-500" />
                          <span>{experience.location}</span>
                        </div>
                      </div>

                      <div className="mt-1 font-medium text-lg">{experience.company}</div>
                      <p className="text-muted-foreground">{experience.description}</p>

                      {!experience.isEducation && (
                        <>
                          <div className="mt-4">
                            <h4 className="font-medium text-sm text-purple-500 mb-2">Key Responsibilities:</h4>
                            <ul className="space-y-1 mb-4">
                              {experience.responsibilities?.map((item, i) => (
                                <li key={i} className="flex items-start text-sm">
                                  <span className="mr-2 text-purple-500">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex flex-wrap gap-2 mt-4">
                            {experience.technologies?.map((tech, i) => (
                              <Badge key={i} variant="outline" className="border-purple-800/30 bg-purple-800/5">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="hidden md:block w-full md:w-[calc(50%-2rem)]" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

