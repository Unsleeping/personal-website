"use client"

import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"

interface RotatingCubeProps {
  skills: string[]
}

export function RotatingCube({ skills }: RotatingCubeProps) {
  const controls = useAnimation()
  const [currentFace, setCurrentFace] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const nextFace = (currentFace + 1) % 6
      setCurrentFace(nextFace)

      // Rotate to the next face
      controls.start({
        rotateX: nextFace % 2 === 0 ? [0, 90, 180, 270, 360][Math.floor(nextFace / 2)] : 0,
        rotateY: nextFace % 2 === 1 ? [0, 90, 180, 270, 360][Math.floor(nextFace / 2)] : 0,
        transition: { duration: 1.5, ease: "easeInOut" },
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [currentFace, controls])

  return (
    <div className="w-full h-64 perspective-[1000px] flex items-center justify-center">
      <motion.div
        animate={controls}
        className="w-40 h-40 relative transform-style-3d"
        style={{ transformStyle: "preserve-3d" }}
      >
        {skills.slice(0, 6).map((skill, index) => (
          <div
            key={index}
            className={`absolute w-full h-full flex items-center justify-center bg-purple-900/80 backdrop-blur-sm border border-purple-500/50 text-white font-bold text-center p-4 shadow-lg ${
              index === currentFace ? "opacity-100" : "opacity-80"
            }`}
            style={{
              transform: [
                "rotateY(0deg) translateZ(80px)",
                "rotateY(90deg) translateZ(80px)",
                "rotateY(180deg) translateZ(80px)",
                "rotateY(-90deg) translateZ(80px)",
                "rotateX(90deg) translateZ(80px)",
                "rotateX(-90deg) translateZ(80px)",
              ][index],
              backfaceVisibility: "hidden",
              borderRadius: "0.75rem", // Ensure rounded corners during rotation
            }}
          >
            {skill}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

