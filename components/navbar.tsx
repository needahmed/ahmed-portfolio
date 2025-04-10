"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Sun, Moon } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { useMobile } from "@/hooks/use-mobile"
import { useTheme } from "next-themes"

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
  const isMobile = useMobile()
  const { toast } = useToast()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (!isMobile && isOpen) {
      setIsOpen(false);
    }
  }, [isMobile, isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleDownloadCV = () => {
    toast({
      title: "CV Download Initiated",
      description: "Your download should start shortly.",
    })
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 20 } },
  };

  const linkHoverVariant = {
    hover: { scale: 1.1, color: "#a682b0", originX: 0 },
    tap: { scale: 0.95 }
  };

  if (!mounted) {
    return null;
  }

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-4 left-4 right-4 mx-auto z-50 max-w-3xl md:max-w-4xl transition-all duration-300 ease-out 
        ${scrolled 
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-md rounded-lg border border-gray-200/50 dark:border-gray-700/50"
          : "bg-transparent shadow-none rounded-none border-none" 
        } 
        ${isOpen ? "rounded-b-none md:rounded-b-lg" : ""}
      `}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-[#c66461] via-[#a682b0] to-[#eca17a] bg-clip-text text-transparent transition-transform duration-200 inline-block"
              onClick={() => isOpen && setIsOpen(false)}
            >
              Ahmed<span className="text-gray-500 dark:text-gray-400">.</span>
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navLinks.map((link) => (
              <motion.div key={link.name} variants={linkHoverVariant} whileHover="hover" whileTap="tap">
                <Link
                  href={link.href}
                  className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={handleDownloadCV} 
                size="sm" 
                className="bg-gradient-to-r from-[#c66461] to-[#a682b0] hover:opacity-90 text-white rounded-full px-4 shadow-sm"
              >
                Download CV
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </Button>
            </motion.div>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </Button>
            </motion.div>
            <motion.button
              onClick={toggleMenu}
              whileTap={{ scale: 0.85 }}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-gray-900"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`md:hidden overflow-hidden ${scrolled || isOpen ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-gray-200/50 dark:border-gray-700/50 rounded-b-lg' : 'bg-transparent'} `}
      >
        <div className="px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => (
            <motion.div key={link.name} whileTap={{ scale: 0.97 }}>
              <Link
                href={link.href}
                className="block py-2 px-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          <motion.div className="pt-2" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button 
              onClick={() => { handleDownloadCV(); toggleMenu(); }}
              className="w-full bg-gradient-to-r from-[#c66461] to-[#a682b0] hover:opacity-90 text-white rounded-full py-2 shadow-sm"
            >
              Download CV
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  )
}
