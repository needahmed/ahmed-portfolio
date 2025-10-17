"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Download, Mail, Github, Linkedin, Twitter, Terminal, Code2, Sparkles } from "lucide-react"

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const fullText = "Ahmed Pervez"
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 })

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        setShowCursor(false)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left - rect.width / 2)
      mouseY.set(e.clientY - rect.top - rect.height / 2)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const rotateX = useTransform(springY, [-300, 300], [5, -5])
  const rotateY = useTransform(springX, [-300, 300], [-5, 5])

  const socialLinks = [
    { icon: Github, href: "https://github.com/needahmed", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/youneedahmed/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/zedgaghost", label: "Twitter" },
  ]

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 scanlines"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-purple-500/5" />
      
      <FloatingParticles />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 text-cyan-400 font-mono text-sm"
            >
              <Terminal className="w-4 h-4 animate-pulse" />
              <span className="text-gray-400">~/portfolio</span>
              <span className="text-purple-400">$</span>
              <span className="text-cyan-400">whoami</span>
            </motion.div>

            <div>
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-4 font-mono whitespace-nowrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-gray-400">&gt; </span>
                <span className="gradient-text cyber-glow">
                  {displayedText}
                </span>
                {showCursor && <span className="terminal-cursor" />}
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="space-y-2"
              >
                <div className="flex items-center gap-2 text-purple-400 font-mono text-sm">
                  <Code2 className="w-4 h-4" />
                  <span className="text-gray-400">role:</span>
                  <span className="text-green-400">Senior Software Engineer</span>
                </div>
                <div className="flex items-center gap-2 text-purple-400 font-mono text-sm">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-gray-400">expertise:</span>
                  <span className="text-green-400">Full Stack Development</span>
                </div>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              className="text-lg text-gray-300 leading-relaxed max-w-xl"
            >
              Crafting responsive, engaging web applications with a passion for clean code
              and cutting-edge technologies. Specialized in React, Next.js, and Node.js ecosystems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.1 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 240, 255, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="btn-cyber group flex items-center gap-2"
              >
                <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                Contact Me
              </motion.a>

              <motion.a
                href="/CV.pdf"
                download
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(176, 38, 255, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="btn-cyber group flex items-center gap-2"
              >
                <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                Download CV
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.4 }}
              className="flex gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-lg glass-card hover:bg-cyan-500/10 transition-colors group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.4 + index * 0.1 }}
                >
                  <social.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative flex justify-center items-center"
            style={{ perspective: 1000 }}
          >
            <motion.div
              style={{ rotateX, rotateY }}
              className="relative"
            >
              <CodeAnimation />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-cyan-400/50 font-mono text-xs"
        >
          <span>scroll_down</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-400/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}

function CodeAnimation() {
  const codeLines = [
    "const developer = {",
    "  name: 'Ahmed Pervez',",
    "  role: 'Senior Engineer',",
    "  skills: ['React', 'Node.js'],",
    "  passion: 'Building great UX'",
    "};",
    "",
    "function createAmazingThings() {",
    "  return innovation + creativity;",
    "}",
    "",
    "// Always learning, always coding",
  ]

  return (
    <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
      <div className="absolute inset-0 holographic-border rounded-3xl animate-pulse-glow" />
      
      <div className="absolute inset-4 rounded-2xl overflow-hidden glass-card backdrop-blur-xl bg-black/40">
        <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-cyan-500/10 to-transparent border-b border-cyan-500/20 flex items-center px-4 gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
          <span className="ml-2 text-xs text-gray-400 font-mono">~/portfolio.tsx</span>
        </div>
        
        <div className="absolute inset-0 top-10 p-6 font-mono text-sm overflow-hidden">
          {codeLines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              className="mb-2 flex items-start"
            >
              <span className="text-gray-500 mr-4 select-none min-w-[2ch]">
                {line && (index + 1)}
              </span>
              <span className="text-cyan-400">
                {line.includes('const') || line.includes('function') ? (
                  <>
                    <span className="text-purple-400">
                      {line.split(' ')[0]}
                    </span>
                    {' ' + line.split(' ').slice(1).join(' ')}
                  </>
                ) : line.includes('//') ? (
                  <span className="text-gray-500 italic">{line}</span>
                ) : line.includes(':') && !line.includes('//') ? (
                  <>
                    <span className="text-green-400">
                      {line.split(':')[0]}
                    </span>
                    <span className="text-gray-400">:</span>
                    <span className="text-orange-400">
                      {line.split(':').slice(1).join(':')}
                    </span>
                  </>
                ) : (
                  line
                )}
              </span>
            </motion.div>
          ))}
          
          <motion.div
            className="inline-block w-2 h-4 bg-cyan-400 ml-1"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-purple-500/10 mix-blend-overlay pointer-events-none" />
        
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent pointer-events-none"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "linear",
          }}
        />
        
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-cyan-500/20 rounded-full pointer-events-none"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse" />
      
      <motion.div
        className="absolute top-10 right-10 text-cyan-400/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Code2 className="w-12 h-12" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-10 left-10 text-purple-400/30"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <Terminal className="w-10 h-10" />
      </motion.div>
    </div>
  )
}

function FloatingParticles() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: 3 + Math.random() * 4,
    delay: Math.random() * 2,
    size: 2 + Math.random() * 3,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-cyan-400/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
