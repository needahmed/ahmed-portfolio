"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

// Reusable animation variants
const containerStaggerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Faster stagger for cards/badges
      delayChildren: 0.1,
    },
  },
};

const itemSlideUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const itemScaleInVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] } 
  },
};

const badgeVariant = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } }
}

const projects = [
  {
    id: 1,
    title: "Kupi Dashboard",
    description:
      "A comprehensive dashboard application built with Next.js, React, and various modern web technologies. Features include interactive data visualization, calendar integration, and responsive design.",
    image: "/kupidashboard.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "MongoDB"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    id: 2,
    title: "Kupi Chatbot",
    description:
      "An intelligent chatbot solution integrated with Twilio WhatsApp API. Built with serverless architecture using AWS Lambda and API Gateway, featuring OpenAI integration for natural language processing.",
    image: "/kupibot.png",
    tags: ["Node.js", "Serverless", "AWS", "Twilio", "OpenAI", "Prisma"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    id: 3,
    title: "SkillSprint",
    description:
      "Co-founded and developed a platform providing personalized career recommendations through AI and learning paths to help users achieve their career goals.",
    image: "/skillsprint.png",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Machine Learning"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    id: 4,
    title: "AI SaaS",
    description:
      "A comprehensive AI SaaS project with capabilities for generating text, images, music, and videos through AI integration. Features subscription management with Stripe.",
    image: "/AI-SaaS.png",
    tags: ["Next.js", "React", "Stripe", "Tailwind CSS", "AI APIs"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    id: 5,
    title: "Full Stack E-Commerce Store",
    description:
      "A scalable e-commerce application built using Next.js with integrated routing, database management with Prisma, and responsive design with Tailwind CSS.",
    image: "/ecommerce.png",
    tags: ["React", "Next.js", "Prisma", "MySQL", "Tailwind CSS"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    id: 6,
    title: "BaytOrganic E-Commerce with CMS",
    description:
      "An e-commerce platform for organic products with a custom content management system for easy product and content management.",
    image: "/Baytorganic.png",
    tags: ["Next.js", "React", "CMS", "Tailwind CSS", "PostgreSQL"],
    links: {
      demo: "#",
      github: "#",
    },
  },
]

export default function Projects() {
  const sectionRef = useRef(null)
  const sectionInView = useInView(sectionRef, { once: true, amount: 0.1 })

  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, amount: 0.5 })

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-950 overflow-hidden">
      <div ref={sectionRef} className="max-w-6xl mx-auto">
        <motion.div
          ref={titleRef}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          variants={containerStaggerVariants} // Stagger title elements
          className="text-center mb-16"
        >
          <motion.h2 variants={itemSlideUpVariants} className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">My Projects</motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-[#c66461] to-[#a682b0] mx-auto mb-6 origin-center"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: titleInView ? 1 : 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          />
          <motion.p variants={itemSlideUpVariants} className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Here are some of the projects I've worked on. Each project represents different skills and technologies I've
            mastered throughout my journey.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerStaggerVariants} // Stagger the grid items (cards)
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemScaleInVariants} // Use scale-in variant for each card
              // Staggering is handled by the parent grid
              className="h-full"
            >
              <motion.div
                whileHover={{ y: -8, boxShadow: "0px 15px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="h-full flex flex-col overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-lg border border-gray-200/50 dark:border-gray-700/50"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105" // Apply group-hover if needed or just hover on Image
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" /> {/* Subtle overlay */} 
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-semibold text-gray-800 dark:text-gray-100">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 flex-grow flex flex-col">
                  <CardDescription className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-4 text-sm">
                    {project.description}
                  </CardDescription>
                  <motion.div 
                    variants={containerStaggerVariants} // Stagger badges
                    initial="hidden"
                    animate="visible" // Animate badges when card is visible (inherited from parent)
                    className="flex flex-wrap gap-2 mt-auto pt-2"
                  >
                    {project.tags.map((tag) => (
                      <motion.div key={tag} variants={badgeVariant}>
                        <Badge variant="secondary" className="font-normal text-xs dark:bg-gray-700 dark:text-gray-300">
                          {tag}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
                <CardFooter className="flex justify-end gap-3 pt-4 border-t border-gray-100 dark:border-gray-700 mt-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="ghost" size="sm" className="flex items-center gap-1.5 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary" asChild>
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} /> Code
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="bg-gradient-to-r from-[#c66461]/90 to-[#a682b0]/90 hover:opacity-90 flex items-center gap-1.5 rounded-full px-3 py-1 shadow-sm text-white" size="sm" asChild>
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} /> Demo
                      </a>
                    </Button>
                  </motion.div>
                </CardFooter>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
