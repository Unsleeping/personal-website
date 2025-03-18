"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin } from "lucide-react"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-small-white/[0.2] bg-[size:20px_20px] dark:bg-grid-small-white/[0.05]" />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-background to-background" />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-block rounded-full bg-purple-500/10 px-3 py-1 text-sm text-purple-500 backdrop-blur-md border border-purple-500/20 mb-4">
            Let's Connect
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get in Touch</h2>
          <p className="mt-4 text-lg text-muted-foreground">Interested in working together? Feel free to reach out!</p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto"
        >
          <Card className="backdrop-blur-sm border border-purple-500/20 card-hover overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent" />
            <CardHeader className="relative z-10">
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>You can reach me directly using the following contact details.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 relative z-10">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-gradient p-2 rounded-full text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">mandrov706@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-gradient p-2 rounded-full text-white">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-muted-foreground">Tel Aviv, Israel</p>
                </div>
              </div>

              <div className="pt-4 border-t border-purple-500/20">
                <h3 className="font-medium mb-2">Connect with me</h3>
                <p className="text-muted-foreground mb-4">
                  Follow my Telegram channel for insights on React, Next.js, optimization techniques, and architectural
                  best practices.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-purple-500/30 hover:bg-purple-500/10 hover:border-purple-500/50"
                >
                  Join Telegram Channel
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

