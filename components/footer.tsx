"use client"

import Link from "next/link"
import { Heart, MapPin, Mail, Phone } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

// --- Reusable Animation Variants ---
const containerStaggerVariants = {
  hidden: { opacity: 0 },
  visible: (delayChildren = 0) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: delayChildren,
    },
  }),
};

const itemFadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const linkHoverVariant = {
  hover: { y: -2, color: "#FFFFFF" },
  tap: { scale: 0.95 }
};

// --- Footer Component ---
export default function Footer() {
  const currentYear = new Date().getFullYear()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <motion.footer 
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={itemFadeInUpVariants}
      className="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 py-12 mt-16 overflow-hidden border-t border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerStaggerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.2}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10"
        >
          <motion.div variants={itemFadeInUpVariants}>
            <h3 className="text-2xl font-bold mb-4">
              <motion.span
                className="inline-block animated-gradient-text"
                style={{
                    background: 'linear-gradient(90deg, #c66461, #a682b0, #eca17a, #a682b0, #c66461)',
                    backgroundSize: '200% 100%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}
                animate={{ backgroundPosition: ['0% 50%', '200% 50%'] }}
                transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    repeatType: "reverse",
                    ease: "linear" 
                }}
              >
                Ahmed<span className="text-gray-500">.</span>
              </motion.span>
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm leading-relaxed">
              Senior Software Engineer specializing in full-stack development with a passion for creating responsive,
              engaging web applications.
            </p>
          </motion.div>

          <motion.div variants={itemFadeInUpVariants}>
            <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Projects", href: "#projects" },
                { name: "Skills", href: "#skills" },
                { name: "Experience", href: "#experience" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <motion.div variants={linkHoverVariant} whileHover="hover" whileTap="tap">
                    <Link href={link.href} className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors text-sm">
                      {link.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemFadeInUpVariants}>
            <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Contact Info</h4>
            <ul className="space-y-2 text-gray-500 dark:text-gray-400 text-sm">
              <li className="flex items-center gap-2"><MapPin size={14} /> Islamabad, Pakistan</li>
              <li className="flex items-center gap-2"><Mail size={14} /> needahmedwork@gmail.com</li>
              <li className="flex items-center gap-2"><Phone size={14} /> +92 333 5394643</li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={itemFadeInUpVariants}
          className="border-t border-gray-200 dark:border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left"
        >
          <p className="text-gray-400 dark:text-gray-500 text-xs">© {currentYear} Ahmed Pervez. All rights reserved.</p>
          <p className="text-gray-400 dark:text-gray-500 text-xs flex items-center mt-3 sm:mt-0">
            Made with 
            <motion.span
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block mx-1.5"
            >
              <Heart size={14} className="text-red-500 fill-red-500" /> 
            </motion.span>
            using Next.js and React
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
