"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { GraduationCap, Briefcase, Code, Lightbulb, User, Cpu } from "lucide-react"
import Tilt from "react-parallax-tilt"

const infoCards = [
  {
    icon: GraduationCap,
    title: "Education",
    text: "BSc Computer Science from Bahria University, Islamabad.",
    color: "cyan",
  },
  {
    icon: Briefcase,
    title: "Experience",
    text: "Senior Full-Stack Engineer at Sorbet, fintech APIs, payments infrastructure, end-to-end delivery.",
    color: "purple",
  },
  {
    icon: Code,
    title: "Core Skills",
    text: "Next.js, React, NestJS, Node.js, TypeScript, PostgreSQL, Prisma, Tailwind CSS, systems design.",
    color: "green",
  },
  {
    icon: Lightbulb,
    title: "Interests",
    text: "Web3 & fintech, podcasts and debates, history, philosophy, religion, and always learning.",
    color: "cyan",
  },
]

const stats = [
  { label: "Years Experience", value: "5+", icon: Cpu },
  { label: "Projects Completed", value: "50+", icon: Code },
  { label: "Technologies", value: "20+", icon: Briefcase },
  { label: "Team Members Led", value: "10+", icon: User },
]

export default function About() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />

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
            <span className="font-mono text-purple-400 text-sm">&lt;/&gt;</span>
            <span className="font-mono text-cyan-400 text-sm">About Me</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            <span className="gradient-text">Who I Am</span>
          </h2>

          <div className="flex justify-center mb-6">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 100 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400"
            />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-4 font-mono gradient-text">
                My Journey
              </h3>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  My path started in Computer Science at{" "}
                  <span className="text-cyan-400 font-mono">Bahria University</span>, where I leaned
                  hard into full-stack development. What still hooks me is{" "}
                  <span className="text-purple-400 font-mono">problem-solving</span> turning fuzzy
                  requirements into a design, then into code that holds up when real users and real
                  constraints show up.
                </p>

                <p>
                  Today I'm a{" "}
                  <span className="text-cyan-400 font-mono">Senior Full-Stack Engineer</span> at{" "}
                  <span className="text-cyan-400 font-mono">Sorbet</span>, a fintech company
                  building Web3-aligned payments: invoicing, settlement, multi-currency flows, and
                  the APIs behind them. My stack spans{" "}
                  <span className="text-cyan-400 font-mono">
                    React, Next.js, NestJS, PostgreSQL, and Prisma
                  </span>
                  , with a growing focus on system design, provider integrations, webhooks, and the
                  verification patterns that come with moving value globally.
                </p>

                <p>
                  When I'm not coding, I follow podcasts and debates to stay sharp. I'm also reading
                  across{" "}
                  <span className="text-green-400 font-mono">
                    history, philosophy, and religion
                  </span>
                  , with different lenses for thinking about people and systems, same curiosity I bring to
                  engineering.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="glass-card p-6 text-center group hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold font-mono gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 font-mono">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {infoCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <Tilt
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  glareEnable={true}
                  glareMaxOpacity={0.15}
                  glareColor="#00F0FF"
                  className="h-full"
                >
                  <div className="glass-card p-6 h-full flex flex-col group hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                      className="mb-4"
                    >
                      <card.icon
                        className={`w-10 h-10 ${
                          card.color === "cyan"
                            ? "text-cyan-400"
                            : card.color === "purple"
                            ? "text-purple-400"
                            : "text-green-400"
                        }`}
                      />
                    </motion.div>

                    <h4 className="text-lg font-bold mb-3 font-mono text-cyan-400">
                      {card.title}
                    </h4>

                    <p className="text-gray-400 text-sm leading-relaxed">{card.text}</p>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass-card p-8 text-center"
        >
          <div className="inline-block">
            <div className="font-mono text-sm text-gray-400 mb-2">
              <span className="text-purple-400">const</span>{" "}
              <span className="text-cyan-400">passion</span> ={" "}
              <span className="text-green-400">"Fintech products built to last"</span>;
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
