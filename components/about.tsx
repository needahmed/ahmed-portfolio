"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { GraduationCap, Briefcase, Code, Lightbulb, LucideProps } from "lucide-react"
import React from "react"

// Staggering variants
const containerStaggerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1, // Start staggering after a slight delay
    },
  },
};

const itemSlideUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const itemSlideInLeftVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const itemScaleInVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] } }, // Added custom ease
};

// Line-by-line animation (can be applied to paragraphs)
const lineVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Define prop types for InfoCard
interface InfoCardProps {
  icon: React.ComponentType<LucideProps>; // Type for Lucide icon component
  title: string;
  text: string;
  colorClass?: string; // Optional color class
  delay?: number; // Optional delay (though not directly used in this version's animation)
}

// Individual Card component for cleaner structure and hover effect
const InfoCard: React.FC<InfoCardProps> = ({ icon: Icon, title, text, colorClass, delay }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.5 }); // Trigger when 50% visible

  return (
    <motion.div
      ref={cardRef}
      variants={itemScaleInVariants} 
      // Staggering is handled by the parent grid
      initial="hidden" 
      animate={isInView ? "visible" : "hidden"}
      whileHover={{ y: -8, scale: 1.03, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg dark:shadow-gray-900/30 overflow-hidden h-full flex flex-col"
    >
      <motion.div 
        whileHover={{ rotate: [0, 15, -10, 0], scale: 1.2 }} 
        transition={{ duration: 0.5 }}
        className="mb-4 w-fit"
      >
        <Icon className={`${colorClass || "text-primary"}`} size={32} />
      </motion.div>
      <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">{title}</h4>
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-grow">{text}</p>
    </motion.div>
  );
};

export default function About() {
  const sectionRef = useRef(null)
  const sectionInView = useInView(sectionRef, { once: true, amount: 0.2 }) // Trigger earlier for section container

  const textContent = [
    "Embarking on my journey in Computer Science at Bahria University, I swiftly realized my profound passion for full-stack web development. My favorite part of programming is the problem-solving aspect. I love the feeling of finally figuring out a solution to a problem.",
    "My core stack is React, Next.js, Node.js, and SQL databases. I am also proficient with TypeScript, Prisma, and various other modern web technologies. As a Senior Software Engineer, I've led teams in developing scalable web solutions and optimizing application performance.",
    "When I'm not coding, I enjoy watching podcasts or debates to keep myself updated. I also enjoy learning new things. I am currently exploring history, philosophy, and religion to broaden my perspectives.",
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      <motion.div 
        ref={sectionRef}
        variants={containerStaggerVariants} // Use stagger for the whole section
        initial="hidden"
        animate={sectionInView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemSlideUpVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">About Me</h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-[#c66461] to-[#a682b0] mx-auto mb-8 origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: sectionInView ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          />
        </motion.div>

        <motion.div 
          variants={containerStaggerVariants} // Stagger the two columns
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
        >
          {/* Text Column */}
          <motion.div variants={itemSlideInLeftVariants}>
            <motion.h3 
              variants={itemSlideUpVariants} // Reuse slide up for heading
              className="text-2xl lg:text-3xl font-semibold mb-6 inline-block"
            >
              <motion.span
                className="animated-gradient-text"
                style={{
                    background: 'linear-gradient(90deg, #c66461, #a682b0, #eca17a, #a682b0, #c66461)',
                    backgroundSize: '200% 100%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}
                animate={{ backgroundPosition: ['0% 50%', '200% 50%'] }}
                transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    repeatType: "reverse",
                    ease: "linear",
                    delay: 0.5 // Delay gradient animation start
                }}
              >
                My Journey
              </motion.span>
            </motion.h3>
            <motion.div 
              variants={containerStaggerVariants} // Stagger paragraphs/lines
              className="space-y-5"
            >
              {textContent.map((paragraph, pIndex) => (
                <motion.p 
                  key={pIndex} 
                  variants={itemSlideUpVariants} // Each paragraph slides up
                  className="text-gray-700 dark:text-gray-300 leading-relaxed"
                >
                  {paragraph} 
                  {/* Alternatively, animate line by line: */}
                  {/* {paragraph.split('\n').map((line, lIndex) => (
                    <motion.span key={lIndex} variants={lineVariants} className="block">
                      {line}
                    </motion.span>
                  ))} */}
                </motion.p>
              ))}
            </motion.div>
          </motion.div>

          {/* Info Cards Column */}
          <motion.div 
            variants={containerStaggerVariants} // Stagger the cards
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <InfoCard 
              icon={GraduationCap} 
              title="Education" 
              text="BSc Computer Science from Bahria University, Islamabad." 
              colorClass="text-blue-500" 
              delay={0.3}
            />
            <InfoCard 
              icon={Briefcase} 
              title="Experience" 
              text="Senior Software Engineer specialized in full-stack development & team leadership."
              colorClass="text-purple-500"
              delay={0.4}
            />
            <InfoCard 
              icon={Code} 
              title="Core Skills" 
              text="Next.js, React, Node.js, TypeScript, SQL, Prisma, Tailwind CSS, DevOps."
              colorClass="text-green-500"
              delay={0.5}
            />
            <InfoCard 
              icon={Lightbulb} 
              title="Interests" 
              text="Exploring Web3, AI, History, Philosophy. Committed to continuous learning."
              colorClass="text-yellow-500"
              delay={0.6}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
