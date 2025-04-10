"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, useAnimation } from "framer-motion"
import { Download, Mail, ArrowDown, Github, Linkedin, Twitter } from "lucide-react"
import { useInView } from "react-intersection-observer"

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger children animations
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0,
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] } // Custom ease for bounce effect
  },
};

const wordVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

export default function Hero() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const subheadingText = "Senior Software Engineer specializing in Full Stack Development with a passion for creating responsive, engaging web applications.";
  const words = subheadingText.split(" ");

  return (
    <motion.section 
      id="home" 
      ref={ref} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding pt-20 lg:pt-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {/* Optional: Add subtle background animation */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-10 dark:opacity-20"
        style={{ 
          backgroundImage: 'radial-gradient(circle, rgba(166,130,176,0.2) 0%, rgba(255,255,255,0) 70%)',
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 max-w-6xl mx-auto">
        <motion.div variants={itemVariants} className="order-2 lg:order-1">
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-gray-900 dark:text-white"
          >
            Hello, I'm{" "}
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
              Ahmed Pervez
            </motion.span>
          </motion.h1>
          <motion.h2 
            variants={containerVariants} // Use container here for word stagger
            initial="hidden"
            animate="visible"
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-light leading-relaxed"
          >
            {words.map((word, index) => (
              <motion.span key={index} variants={wordVariants} className="inline-block mr-1.5">
                {word}
                {/* Add non-breaking space if it's not the last word */}
                {index < words.length - 1 ? '\u00A0' : ''}
              </motion.span>
            ))}
          </motion.h2>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 group transition-all duration-300 hover:shadow-lg hover:bg-gradient-to-r hover:from-[#c66461] hover:to-[#a682b0]" asChild>
                <a href="#contact">
                  Contact Me <Mail className="ml-1 group-hover:rotate-[360deg] transition-transform duration-500" size={18} />
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 group transition-all duration-300 hover:shadow-lg hover:bg-gradient-to-r hover:from-[#c66461] hover:to-[#a682b0]" asChild>
                <a href="/CV.pdf" download>
                  Download CV <Download className="ml-1 group-hover:translate-y-[3px] group-hover:-translate-x-[2px] transition-transform duration-300" size={18} />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Media Icons */}
          <motion.div 
            variants={itemVariants} 
            className="flex justify-center sm:justify-start gap-4 mt-8"
          >
            <motion.a
              href="https://github.com/needahmed"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/youneedahmed/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="https://x.com/zedgaghost"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Twitter size={20} />
            </motion.a>
          </motion.div>

          <motion.div 
            variants={itemVariants} 
            className="mt-16 flex items-center gap-3 justify-center opacity-70"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} className="text-gray-500 dark:text-gray-400" />
            <p className="text-sm text-gray-500 dark:text-gray-400">Scroll down</p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={imageVariants}
          whileHover={{ scale: 1.03, rotate: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-8 md:border-[10px] border-white dark:border-gray-800 shadow-2xl dark:shadow-gray-900/50 aspect-square">
            <Image
              src="/ProfilePicture.png?height=400&width=400"
              alt="Ahmed Pervez"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 280px, (max-width: 1024px) 350px, 400px"
            />
            {/* Optional: Add a subtle overlay/shine effect */}
            <motion.div 
              className="absolute inset-0 rounded-full"
              style={{ 
                background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%)'
              }}
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 5, ease: "linear" }}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
