"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Code, Database, Blocks, Wrench, Cpu } from "lucide-react"

const skillCategories = [
  {
    name: "Frontend",
    icon: Code,
    color: "cyan",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    name: "Backend",
    icon: Database,
    color: "purple",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "Prisma", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 80 },
    ],
  },
  {
    name: "Blockchain",
    icon: Blocks,
    color: "green",
    skills: [
      { name: "Solidity", level: 75 },
      { name: "Rust", level: 65 },
      { name: "ether.js", level: 80 },
      { name: "web3.js", level: 75 },
      { name: "Hardhat", level: 70 },
    ],
  },
  {
    name: "Tools & Other",
    icon: Wrench,
    color: "cyan",
    skills: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Python", level: 70 },
      { name: "C/C++", level: 65 },
    ],
  },
]

interface AnimatedSkillBarProps {
  name: string
  level: number
  color: string
  delay: number
}

function AnimatedSkillBar({ name, level, color, delay }: AnimatedSkillBarProps) {
  const [currentValue, setCurrentValue] = useState(0)
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (isInView) {
      controls.start({
        width: `${level}%`,
        transition: { duration: 1.2, ease: "easeOut", delay },
      })

      const interval = setInterval(() => {
        setCurrentValue((prev) => {
          if (prev < level) {
            return Math.min(prev + Math.ceil(level / 40), level)
          }
          clearInterval(interval)
          return level
        })
      }, 30)
      
      return () => clearInterval(interval)
    }
  }, [isInView, level, controls, delay])

  const colorClasses = {
    cyan: "from-cyan-500 to-cyan-300",
    purple: "from-purple-500 to-pink-500",
    green: "from-green-500 to-emerald-400",
  }

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-mono text-gray-300 group-hover:text-cyan-400 transition-colors">
          {name}
        </span>
        <span className="text-xs font-mono text-cyan-400 tabular-nums">
          {currentValue}%
        </span>
      </div>
      <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${
            colorClasses[color as keyof typeof colorClasses]
          } rounded-full shadow-[0_0_10px_rgba(0,240,255,0.5)]`}
          initial={{ width: "0%" }}
          animate={controls}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent" />

      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Cpu className="w-6 h-6 text-green-400" />
            </motion.div>
            <span className="font-mono text-green-400 text-sm">Technical Expertise</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>

          <div className="flex justify-center mb-6">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 100 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400"
            />
          </div>

          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience in modern web
            development, blockchain, and cloud technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <div className="glass-card p-8 h-full hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className={`p-3 rounded-lg ${
                      category.color === "cyan"
                        ? "bg-cyan-500/10"
                        : category.color === "purple"
                        ? "bg-purple-500/10"
                        : "bg-green-500/10"
                    }`}
                  >
                    <category.icon
                      className={`w-6 h-6 ${
                        category.color === "cyan"
                          ? "text-cyan-400"
                          : category.color === "purple"
                          ? "text-purple-400"
                          : "text-green-400"
                      }`}
                    />
                  </motion.div>
                  <h3 className="text-xl font-bold font-mono gradient-text">
                    {category.name}
                  </h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <AnimatedSkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={category.color}
                      delay={0.3 + catIndex * 0.1 + skillIndex * 0.05}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 glass-card p-8 text-center"
        >
          <div className="inline-block">
            <div className="font-mono text-sm text-gray-400">
              <span className="text-purple-400">while</span> (
              <span className="text-cyan-400">alive</span>) {"{ "}
              <span className="text-green-400">learn</span>(); {" }"}
            </div>
            <motion.div
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block w-2 h-4 bg-cyan-400 ml-1"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
