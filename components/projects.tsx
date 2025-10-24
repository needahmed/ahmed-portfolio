"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Tilt from "react-parallax-tilt"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Zap } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Kupi Dashboard",
    description:
      "A comprehensive dashboard application built with Next.js, React, and various modern web technologies. Features include interactive data visualization, calendar integration, and responsive design.",
    image: "kupidashboard.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "MongoDB"],
    links: {
      demo: "https://kupi.africa",
      github: "/unavailable",
    },
  },
  {
    id: 2,
    title: "Kupi Chatbot",
    description:
      "An intelligent chatbot solution integrated with Twilio WhatsApp API. Built with serverless architecture using AWS Lambda and API Gateway, featuring OpenAI integration for natural language processing.",
    image: "kupibot.png",
    tags: ["Node.js", "Serverless", "AWS", "Twilio", "OpenAI", "Prisma"],
    links: {
      demo: "https://kupi.africa",
      github: "/unavailable",
    },
  },
  {
    id: 3,
    title: "SkillSprint",
    description:
      "Co-founded and developed a platform providing personalized career recommendations through AI and learning paths to help users achieve their career goals.",
    image: "skillsprint.png",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Machine Learning"],
    links: {
      demo: "https://skill-sprint-delta.vercel.app/",
      github: "https://github.com/needahmed/SkillSprint",
    },
  },
  {
    id: 4,
    title: "AI SaaS",
    description:
      "A comprehensive AI SaaS project with capabilities for generating text, images, music, and videos through AI integration. Features subscription management with Stripe.",
    image: "AI-SaaS.png",
    tags: ["Next.js", "React", "Stripe", "Tailwind CSS", "AI APIs"],
    links: {
      demo: "/unavailable",
      github: "/unavailable",
    },
  },
  {
    id: 5,
    title: "Full Stack E-Commerce Store",
    description:
      "A scalable e-commerce application built using Next.js with integrated routing, database management with Prisma, and responsive design with Tailwind CSS.",
    image: "ecommerce.png",
    tags: ["React", "Next.js", "Prisma", "MySQL", "Tailwind CSS"],
    links: {
      demo: "/unavailable",
      github: "https://github.com/needahmed/ecommerce-store",
    },
  },
  {
    id: 6,
    title: "BaytOrganic E-Commerce with CMS",
    description:
      "An e-commerce platform for organic products with a custom content management system for easy product and content management.",
    image: "Baytorganic.png",
    tags: ["Next.js", "React", "CMS", "Tailwind CSS", "PostgreSQL"],
    links: {
      demo: "https://baytorganic.com",
      github: "https://github.com/needahmed/bayt-organic",
    },
  },
]

export default function Projects() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
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
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-6 h-6 text-cyan-400" />
            </motion.div>
            <span className="font-mono text-cyan-400 text-sm">Featured Work</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            <span className="gradient-text">Projects</span>
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
            A collection of projects showcasing my expertise in full-stack development,
            cloud architecture, and modern web technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                glareEnable={true}
                glareMaxOpacity={0.2}
                glareColor="#00F0FF"
                glarePosition="all"
                glareBorderRadius="16px"
                className="h-full"
              >
                <div className="glass-card p-6 h-full flex flex-col group hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] transition-all duration-300">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-gray-900 holographic-border">
                    <img
                      src={`/${project.image}`}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 z-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none z-20" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 font-mono text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-cyan-500/30 text-cyan-400 bg-cyan-500/5 hover:bg-cyan-500/10 transition-colors text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-white/10">
                    <motion.a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors font-mono text-sm text-gray-300 hover:text-cyan-400"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                    
                    <motion.a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/30 hover:to-purple-500/30 border border-cyan-500/50 rounded-lg transition-colors font-mono text-sm text-cyan-400"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </motion.a>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
