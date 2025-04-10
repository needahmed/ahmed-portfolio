"use client"

import React, { useRef, useEffect, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Progress } from "@/components/ui/progress"

// --- Reusable Animation Variants ---
const containerStaggerVariants = {
  hidden: { opacity: 0 },
  visible: (delayChildren = 0) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: delayChildren, // Allow passing delay
    },
  }),
};

const itemSlideUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const itemScaleInVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] } 
  },
};

// --- Skill Data ---
const skillCategories = [
  {
    name: "Frontend Development",
    gradient: "from-blue-500 to-cyan-400",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 95 },
      { name: "HTML/CSS", level: 90 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    name: "Backend Development",
    gradient: "from-purple-500 to-pink-500",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "Prisma", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB", level: 80 },
    ],
  },
  {
    name: "Blockchain Development",
    gradient: "from-green-500 to-teal-400",
    skills: [
      { name: "Solidity", level: 75 },
      { name: "Rust", level: 65 },
      { name: "ether.js", level: 80 },
      { name: "web3.js", level: 75 },
      { name: "Hardhat", level: 70 },
    ],
  },
  {
    name: "Other Skills",
    gradient: "from-yellow-500 to-orange-400",
    skills: [
      { name: "Python", level: 70 },
      { name: "Machine Learning", level: 60 },
      { name: "C/C++", level: 65 },
      { name: "Java", level: 60 },
      { name: "Git", level: 85 },
      { name: "XML", level: 75 },
    ],
  },
]

// --- Animated Progress Bar Component ---
interface AnimatedProgressProps {
  value: number;
  indicatorClassName?: string;
  className?: string;
}

const AnimatedProgress: React.FC<AnimatedProgressProps> = ({ 
  value, 
  indicatorClassName = "bg-primary", 
  className 
}) => {
  const [currentValue, setCurrentValue] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      controls.start({
        width: `${value}%`,
        transition: { duration: 1, ease: "easeOut", delay: 0.2 }, // Animate width
      });
      // Animate the percentage text (optional, for effect)
      const interval = setInterval(() => {
        setCurrentValue((prev) => {
          if (prev < value) {
            return Math.min(prev + Math.ceil(value / 50), value); // Increment towards value
          }
          clearInterval(interval);
          return value;
        });
      }, 20); // Control speed of text animation
      return () => clearInterval(interval);
    }
  }, [isInView, value, controls]);

  return (
    <div ref={ref} className="relative w-full">
      <Progress value={0} className={`h-2 ${className}`} /> {/* Background track */} 
      <motion.div 
        className={`absolute top-0 left-0 h-2 rounded-full ${indicatorClassName}`} 
        initial={{ width: "0%" }}
        animate={controls}
      />
      <span className="absolute -top-5 right-0 text-xs font-medium text-gray-500 tabular-nums">
        {currentValue}%
      </span>
    </div>
  );
};

// --- Skills Component ---
export default function Skills() {
  const sectionRef = useRef(null)
  const sectionInView = useInView(sectionRef, { once: true, amount: 0.1 })

  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, amount: 0.5 })

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 overflow-hidden">
      <div ref={sectionRef} className="max-w-6xl mx-auto">
        <motion.div
          ref={titleRef}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          variants={containerStaggerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemSlideUpVariants} className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">My Skills</motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-[#c66461] to-[#a682b0] mx-auto mb-6 origin-center"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: titleInView ? 1 : 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          />
          <motion.p variants={itemSlideUpVariants} className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            I've developed a diverse set of skills throughout my career. Here's a comprehensive overview of my technical
            expertise.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerStaggerVariants}
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              variants={itemScaleInVariants} // Card scale-in animation
              whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.07)" }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="bg-white dark:bg-gray-800 p-6 lg:p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <motion.h3 
                variants={itemSlideUpVariants} 
                className="text-xl lg:text-2xl font-semibold mb-6 inline-block"
              >
                <span
                  className={`bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
                  // Add subtle background animation if desired
                  // style={{ backgroundSize: '200% 100%' }}
                  // animate={{ backgroundPosition: ['0% 50%', '200% 50%'] }}
                  // transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                >
                  {category.name}
                </span>
              </motion.h3>
              <motion.div 
                variants={containerStaggerVariants} // Stagger skill items
                initial="hidden"
                // Animate when card is visible (will inherit from parent, but explicit better)
                animate={sectionInView ? "visible" : "hidden"} 
                custom={0.3 + categoryIndex * 0.1} // Add delay based on category index
                className="space-y-5"
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemSlideUpVariants} // Animate each skill item
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{skill.name}</span>
                      {/* Percentage text moved inside AnimatedProgress */}
                    </div>
                    <AnimatedProgress
                      value={skill.level}
                      indicatorClassName={`bg-gradient-to-r ${category.gradient}`}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
