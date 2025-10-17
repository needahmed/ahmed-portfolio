"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, MapPin, Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "KUPI Technologies",
    location: "Remote",
    period: "2023 - Present",
    description:
      "Leading the development of scalable web applications and mentoring junior developers. Architecting solutions using Next.js, React, and Node.js with focus on performance optimization and best practices.",
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "AWS"],
  },
  {
    title: "Full Stack Developer",
    company: "Tech Solutions Inc",
    location: "Islamabad, Pakistan",
    period: "2021 - 2023",
    description:
      "Developed and maintained multiple client projects including e-commerce platforms and SaaS applications. Implemented CI/CD pipelines and improved application performance by 40%.",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "Git"],
  },
  {
    title: "Software Developer",
    company: "Startup Ventures",
    location: "Remote",
    period: "2020 - 2021",
    description:
      "Built responsive web applications from scratch and collaborated with cross-functional teams. Focused on creating intuitive user interfaces and seamless user experiences.",
    technologies: ["JavaScript", "React", "MongoDB", "Express", "HTML/CSS"],
  },
  {
    title: "Junior Developer",
    company: "Digital Agency",
    location: "Islamabad, Pakistan",
    period: "2019 - 2020",
    description:
      "Started my professional journey learning modern web development practices. Contributed to various client projects and gained expertise in responsive design and API integration.",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
  },
]

export default function Experience() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

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
            <span className="gradient-text">Experience</span>
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
            My career path showcasing growth, expertise, and continuous learning in software
            development.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-purple-500 to-green-500 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col items-center gap-8`}
              >
                <div className="flex-1 w-full">
                  <div className="glass-card p-6 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-4">
                      <div>
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
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <MapPin className="w-4 h-4 text-cyan-400" />
                        <span className="font-mono">{exp.location}</span>
                      </div>
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
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
