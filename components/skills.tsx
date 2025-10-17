"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Code, Database, Blocks, Wrench, Cpu, Cloud, Brain } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const skillCategories = [
  {
    name: "Frontend",
    icon: Code,
    color: "cyan",
    skills: [
      { name: "React", experience: "3+ years", projects: "15+ projects", tooltip: "Used in KUPI Dashboard, Strategeaze, SkillSprint" },
      { name: "Next.js", experience: "3+ years", projects: "12+ projects", tooltip: "Built Virtury Cloud website, KUPI platform, Portfolio" },
      { name: "TypeScript", experience: "2+ years", projects: "10+ projects", tooltip: "Type-safe development across all major projects" },
      { name: "Tailwind CSS", experience: "2+ years", projects: "15+ projects", tooltip: "Primary styling solution for modern web apps" },
      { name: "Framer Motion", experience: "1+ year", projects: "8+ projects", tooltip: "Advanced animations in portfolio and dashboards" },
    ],
  },
  {
    name: "Backend",
    icon: Database,
    color: "purple",
    skills: [
      { name: "Node.js", experience: "3+ years", projects: "12+ projects", tooltip: "Backend for KUPI Chatbot, APIs, and microservices" },
      { name: "Express", experience: "2+ years", projects: "8+ projects", tooltip: "RESTful APIs and server-side applications" },
      { name: "Prisma", experience: "2+ years", projects: "10+ projects", tooltip: "ORM for KUPI routes, database management" },
      { name: "PostgreSQL", experience: "2+ years", projects: "8+ projects", tooltip: "Primary database for Virtury Cloud, Strategeaze" },
      { name: "MongoDB", experience: "2+ years", projects: "6+ projects", tooltip: "NoSQL solutions for Pokemon PvP, chatbots" },
    ],
  },
  {
    name: "Blockchain",
    icon: Blocks,
    color: "green",
    skills: [
      { name: "Solidity", experience: "2+ years", projects: "4 contracts", tooltip: "Smart contracts on Ethereum, Alchemy certified" },
      { name: "Rust", experience: "1+ year", projects: "3 projects", tooltip: "Solana blockchain development, Udemy certified" },
      { name: "ether.js", experience: "2+ years", projects: "5 projects", tooltip: "Web3 integration for dApps" },
      { name: "web3.js", experience: "1+ year", projects: "4 projects", tooltip: "Blockchain interactions and wallet connections" },
      { name: "Hardhat", experience: "1+ year", projects: "4 projects", tooltip: "Smart contract development and testing" },
    ],
  },
  {
    name: "Cloud & DevOps",
    icon: Cloud,
    color: "cyan",
    skills: [
      { name: "AWS", experience: "2+ years", projects: "8+ projects", tooltip: "Lambda, S3, EC2 for KUPI Chatbot, Strategeaze" },
      { name: "Docker", experience: "2+ years", projects: "6+ projects", tooltip: "Containerization for deployment" },
      { name: "Git", experience: "4+ years", projects: "All projects", tooltip: "Version control and team collaboration" },
      { name: "Serverless", experience: "1+ year", projects: "3 projects", tooltip: "Serverless Framework for AWS deployments" },
    ],
  },
  {
    name: "AI & Tools",
    icon: Brain,
    color: "purple",
    skills: [
      { name: "OpenAI API", experience: "1+ year", projects: "4 projects", tooltip: "KUPI Chatbot, AI SaaS platform" },
      { name: "LangChain", experience: "1+ year", projects: "2 projects", tooltip: "AI chatbot development and NLP" },
      { name: "Python", experience: "2+ years", projects: "5 projects", tooltip: "ML models, data analysis, FastAPI" },
      { name: "Socket.IO", experience: "2+ years", projects: "3 projects", tooltip: "Real-time features in Pokemon PvP, Strategeaze" },
    ],
  },
]

interface AnimatedSkillBarProps {
  name: string
  experience: string
  projects: string
  tooltip: string
  color: string
  delay: number
}

function AnimatedSkillBar({ name, experience, projects, tooltip, color, delay }: AnimatedSkillBarProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isInView) {
      controls.start({
        width: "100%",
        transition: { duration: 1.2, ease: "easeOut", delay },
      })
    }
  }, [isInView, controls, delay])

  const colorClasses = {
    cyan: "from-cyan-500 to-cyan-300",
    purple: "from-purple-500 to-pink-500",
    green: "from-green-500 to-emerald-400",
  }

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div 
            ref={ref} 
            className="group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex justify-between mb-2">
              <span className="text-sm font-mono text-gray-300 group-hover:text-cyan-400 transition-colors font-medium">
                {name}
              </span>
              <div className="flex gap-2 text-xs font-mono text-gray-500">
                <span className="text-cyan-400">{experience}</span>
                <span className="text-purple-400">•</span>
                <span className="text-green-400">{projects}</span>
              </div>
            </div>
            <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className={`absolute top-0 left-0 h-full bg-gradient-to-r ${
                  colorClasses[color as keyof typeof colorClasses]
                } rounded-full ${isHovered ? 'shadow-[0_0_15px_rgba(0,240,255,0.8)]' : 'shadow-[0_0_10px_rgba(0,240,255,0.5)]'} transition-shadow duration-300`}
                initial={{ width: "0%" }}
                animate={controls}
              />
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent 
          side="top" 
          className="bg-gray-900/95 border-cyan-500/30 text-cyan-100 font-mono text-xs max-w-xs"
        >
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
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
            <span className="font-mono text-green-400 text-sm">Technical Arsenal</span>
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

          <p className="text-gray-400 max-w-2xl mx-auto mb-2">
            Technologies I use daily to build scalable, performant products.
          </p>
          <p className="text-gray-500 text-sm font-mono">
            <span className="text-cyan-400">Hover</span> over skills to see project context
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className={catIndex === skillCategories.length - 1 && skillCategories.length % 2 !== 0 ? "md:col-span-2 lg:col-span-1" : ""}
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
                      experience={skill.experience}
                      projects={skill.projects}
                      tooltip={skill.tooltip}
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
