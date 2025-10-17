"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, MapPin, Briefcase, GraduationCap, Award } from "lucide-react"

const experiences = [
  {
    type: "work",
    title: "Senior Software Engineer",
    company: "VQode",
    location: "Remote",
    period: "Aug 2024 - Present",
    description:
      "Spearheaded full-stack application development using Next.js, React, and Node.js. Managed end-to-end database architecture and optimization. Led the design and implementation of scalable web solutions. Collaborated cross-functionally to enhance application performance and user experience.",
    technologies: ["Next.js", "React", "Node.js", "Database Architecture", "Team Leadership"],
  },
  {
    type: "work",
    title: "FullStack Developer",
    company: "Virtury Cloud",
    location: "Remote",
    period: "Aug 2023 - May 2024",
    description:
      "Developed and launched the company's new website with a full-stack approach, utilizing Next.js, React, and PostgreSQL. Streamlined database workflows with TablePlus and ensured robust API functionality.",
    technologies: ["Next.js", "React", "PostgreSQL", "TablePlus", "API Development"],
  },
  {
    type: "education",
    title: "Bachelor of Computer Science",
    company: "Bahria University Islamabad",
    location: "Islamabad, Pakistan",
    period: "Graduated",
    description:
      "Completed a comprehensive computer science program with a focus on software development and programming fundamentals.",
    technologies: ["Computer Science", "Software Development", "Programming"],
  },
  {
    type: "certification",
    title: "Web Development Bootcamp",
    company: "Udemy",
    location: "Online",
    period: "Certification",
    description:
      "Completed an intensive web development bootcamp covering modern frontend and backend technologies.",
    technologies: ["Web Development", "Frontend", "Backend"],
  },
  {
    type: "certification",
    title: "Ethereum Development Bootcamp",
    company: "Alchemy University",
    location: "Online",
    period: "Certification",
    description:
      "Specialized training in Ethereum blockchain development and smart contract programming.",
    technologies: ["Blockchain", "Ethereum", "Smart Contracts", "Solidity"],
  },
  {
    type: "certification",
    title: "Solana Development Bootcamp",
    company: "Udemy",
    location: "Online",
    period: "Certification",
    description:
      "Comprehensive training in Solana blockchain development and ecosystem.",
    technologies: ["Blockchain", "Solana", "Rust", "Web3"],
  },
]

export default function Experience() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  const getIcon = (type: string) => {
    switch (type) {
      case "education":
        return GraduationCap
      case "certification":
        return Award
      default:
        return Briefcase
    }
  }

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />

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
            <Briefcase className="w-6 h-6 text-purple-400" />
            <span className="font-mono text-purple-400 text-sm">Professional Journey</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            <span className="gradient-text">Experience & Education</span>
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
            A timeline of my professional experience, education, and continuous learning journey
            in software development and blockchain technology.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-purple-500 to-green-500 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = getIcon(exp.type)
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col items-center gap-8`}
                >
                  <div className="flex-1 w-full">
                    <div className="glass-card p-6 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-all duration-300 group">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Icon className="w-5 h-5 text-cyan-400" />
                            <span className="text-xs font-mono text-gray-500 uppercase">
                              {exp.type === "work" ? "Experience" : exp.type === "education" ? "Education" : "Certification"}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold font-mono text-cyan-400 group-hover:text-cyan-300 transition-colors mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-lg text-purple-400 font-mono">{exp.company}</p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Calendar className="w-4 h-4 text-cyan-400" />
                          <span className="font-mono">{exp.period}</span>
                        </div>
                        {exp.location && (
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <MapPin className="w-4 h-4 text-cyan-400" />
                            <span className="font-mono">{exp.location}</span>
                          </div>
                        )}
                      </div>

                      <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-full hover:bg-cyan-500/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 border-4 border-[#0A0A0F] shadow-[0_0_15px_rgba(0,240,255,0.5)] z-10 animate-pulse-glow" />

                  <div className="flex-1 w-full md:block hidden" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
