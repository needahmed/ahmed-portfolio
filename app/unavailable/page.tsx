"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Unavailable() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="glass-card max-w-lg w-full p-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-bold mb-3 font-mono gradient-text"
        >
          Demo / Code Unavailable
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 mb-6"
        >
          This demo or repository is currently private or not available at the
          moment. Please check back later or contact me for access.
        </motion.p>

        <div className="flex gap-3 justify-center">
          <Link href="#projects" className="btn-cyber">
            Back to Projects
          </Link>
          <Link href="/" className="btn-cyber">
            Go Home
          </Link>
        </div>
      </div>
    </main>
  )
}


