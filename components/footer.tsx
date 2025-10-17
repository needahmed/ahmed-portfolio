"use client"

import { motion } from "framer-motion"
import { Heart, Code } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-gray-400 font-mono text-sm"
          >
            <span>© {currentYear}</span>
            <span className="gradient-text font-bold">Ahmed Pervez</span>
            <span>All rights reserved.</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2 text-gray-400 font-mono text-sm"
          >
            <span>Built with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-cyan-400 fill-cyan-400" />
            </motion.div>
            <span>and</span>
            <Code className="w-4 h-4 text-purple-400" />
            <span>using</span>
            <span className="text-cyan-400">Next.js</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
        />
      </div>
    </footer>
  )
}
