"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, GitCommit, GitPullRequest, Star } from "lucide-react"

interface StatCardProps {
  title: string
  value: string
  icon: React.ReactNode
  delay: number
}

const StatCard = ({ title, value, icon, delay }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="col-span-1"
    >
      <Card className="backdrop-blur-sm border border-purple-800/20 card-hover overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-800/5 via-transparent to-transparent" />
        <CardHeader className="pb-2 relative z-10">
          <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        </CardHeader>
        <CardContent className="relative z-10">
          <div className="flex items-center gap-4">
            <div className="bg-dark-purple-gradient p-2 rounded-full text-white">{icon}</div>
            <div className="text-2xl font-bold">{value}</div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function GitHubStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div ref={ref} className="py-12">
      <div className="container">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Github className="h-6 w-6 text-purple-500" />
          <h3 className="text-2xl font-bold text-center">GitHub Activity</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="Repositories" value="67" icon={<Github className="h-4 w-4" />} delay={0.1} />
          <StatCard title="Stars" value="172" icon={<Star className="h-4 w-4" />} delay={0.2} />
          <StatCard title="Contributions" value="1,200+" icon={<GitCommit className="h-4 w-4" />} delay={0.3} />
          <StatCard title="Pull Requests" value="85+" icon={<GitPullRequest className="h-4 w-4" />} delay={0.4} />
        </div>
      </div>
    </div>
  )
}

