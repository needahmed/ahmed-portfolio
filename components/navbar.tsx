"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Download } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navLinks.map(link => link.href.substring(1))
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          scrolled ? "w-[95%] max-w-7xl" : "w-[90%] max-w-6xl"
        }`}
      >
        <div className={`glass-card px-6 py-4 ${scrolled ? "neon-box" : ""}`}>
          <div className="flex justify-between items-center">
            <Link href="#home">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="font-mono font-bold text-xl"
              >
                <span className="gradient-text">&lt;AP /&gt;</span>
              </motion.div>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative px-4 py-2 font-mono text-sm"
                  >
                    <span className={`transition-colors ${
                      activeSection === link.href.substring(1)
                        ? "text-cyan-400"
                        : "text-gray-400 hover:text-cyan-400"
                    }`}>
                      {link.name}
                    </span>
                    {activeSection === link.href.substring(1) && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </motion.div>
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <motion.a
                href="/CV.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-cyber flex items-center gap-2 text-sm py-2 px-4"
              >
                <Download className="w-4 h-4" />
                CV
              </motion.a>
            </div>

            <button
              onClick={toggleMenu}
              className="md:hidden text-cyan-400 hover:text-cyan-300 transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
            onClick={toggleMenu}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="absolute right-0 top-0 bottom-0 w-[80%] max-w-sm glass-card p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end mb-8">
                <button
                  onClick={toggleMenu}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors p-2"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="space-y-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={toggleMenu}
                      className={`block text-2xl font-mono transition-colors ${
                        activeSection === link.href.substring(1)
                          ? "text-cyan-400"
                          : "text-gray-400 hover:text-cyan-400"
                      }`}
                    >
                      <span className="text-purple-500 mr-2">/</span>
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="pt-6"
                >
                  <a
                    href="/CV.pdf"
                    download
                    onClick={toggleMenu}
                    className="btn-cyber flex items-center justify-center gap-2 w-full"
                  >
                    <Download className="w-4 h-4" />
                    Download CV
                  </a>
                </motion.div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
