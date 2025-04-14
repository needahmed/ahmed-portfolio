"use client"

import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap, Award } from "lucide-react"

// --- Reusable Animation Variants ---
const containerStaggerVariants = {
  hidden: { opacity: 0 },
  visible: (delayChildren = 0) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: delayChildren,
    },
  }),
};

const itemSlideUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const timelineItemVariants = (direction: 'left' | 'right') => ({
  hidden: { opacity: 0, x: direction === 'left' ? -50 : 50, scale: 0.95 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] } },
});

const badgeVariant = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } }
}

const iconVariant = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { type: "spring", stiffness: 200, damping: 10, delay: 0.2 } }
}

// --- Experience Data ---
const experiences = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "VQode",
    period: "Aug 2024 - Present",
    description:
      "Spearheaded full-stack application development using Next.js, React, and Node.js. Managed end-to-end database architecture and optimization. Led the design and implementation of scalable web solutions. Collaborated cross-functionally to enhance application performance and user experience.",
    type: "work",
    skills: ["Next.js", "React", "Node.js", "Database Architecture", "Team Leadership"],
  },
  {
    id: 2,
    title: "FullStack Developer",
    company: "Virtury Cloud",
    period: "Aug 2023 - May 2024",
    description:
      "Developed and launched the company's new website with a full-stack approach, utilizing Next.js, React, and PostgreSQL. Streamlined database workflows with TablePlus and ensured robust API functionality.",
    type: "work",
    skills: ["Next.js", "React", "PostgreSQL", "API Development", "Database Management"],
  },
  {
    id: 3,
    title: "Bachelor of Computer Science",
    institution: "Bahria University Islamabad",
    period: "Graduated",
    description:
      "Completed a comprehensive computer science program with a focus on software development and programming fundamentals.",
    type: "education",
    skills: ["Computer Science", "Software Development", "Programming"],
  },
  {
    id: 4,
    title: "Web Development Bootcamp",
    institution: "Udemy",
    period: "Certification",
    description: "Completed an intensive web development bootcamp covering modern frontend and backend technologies.",
    type: "certification",
    skills: ["Web Development", "Frontend", "Backend"],
  },
  {
    id: 5,
    title: "Ethereum Development Bootcamp",
    institution: "Alchemy University",
    period: "Certification",
    description: "Specialized training in Ethereum blockchain development and smart contract programming.",
    type: "certification",
    skills: ["Blockchain", "Ethereum", "Smart Contracts", "Solidity"],
  },
  {
    id: 6,
    title: "Solana Development Bootcamp",
    institution: "Udemy",
    period: "Certification",
    description: "Comprehensive training in Solana blockchain development and ecosystem.",
    type: "certification",
    skills: ["Blockchain", "Solana", "Rust", "Web3"],
  },
]

// --- Helper Function ---
const getIcon = (type: string) => {
  switch (type) {
    case "work":
      return <Briefcase className="text-blue-500" size={22} />
    case "education":
      return <GraduationCap className="text-purple-500" size={22} />
    case "certification":
      return <Award className="text-green-500" size={22} />
    default:
      return <Briefcase className="text-gray-500" size={22} />
  }
}

// --- Experience Card Component ---
interface ExperienceCardProps {
  exp: typeof experiences[0];
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ exp, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const direction = index % 2 === 0 ? 'left' : 'right'; // Alternate sides

  // Define allowed keys for typeStyles
  type ExperienceType = "work" | "education" | "certification";

  const typeStyles: Record<ExperienceType | 'default', { bg: string; darkBg: string; border: string; darkBorder: string; iconBg: string; darkIconBg: string }> = {
    work: { 
      bg: "bg-blue-50", 
      darkBg: "dark:bg-blue-900/20", 
      border: "border-blue-200", 
      darkBorder: "dark:border-blue-800/30", 
      iconBg: "bg-blue-100", 
      darkIconBg: "dark:bg-blue-800/40" 
    },
    education: { 
      bg: "bg-purple-50", 
      darkBg: "dark:bg-purple-900/20", 
      border: "border-purple-200", 
      darkBorder: "dark:border-purple-800/30", 
      iconBg: "bg-purple-100", 
      darkIconBg: "dark:bg-purple-800/40" 
    },
    certification: { 
      bg: "bg-green-50", 
      darkBg: "dark:bg-green-900/20", 
      border: "border-green-200", 
      darkBorder: "dark:border-green-800/30", 
      iconBg: "bg-green-100", 
      darkIconBg: "dark:bg-green-800/40" 
    },
    default: { 
      bg: "bg-gray-50", 
      darkBg: "dark:bg-gray-800/40", 
      border: "border-gray-200", 
      darkBorder: "dark:border-gray-700", 
      iconBg: "bg-gray-100", 
      darkIconBg: "dark:bg-gray-700" 
    }
  };

  // Safely access styles
  const currentType = exp.type as ExperienceType;
  const styles = typeStyles[currentType in typeStyles ? currentType : 'default'];

  return (
    <div ref={ref} className={`relative flex ${direction === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} justify-between items-center w-full mb-8 md:mb-0`}>
      {/* Timeline Line - hidden on md+, handled by parent */}
      <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
      {/* Timeline Dot */} 
      <motion.div 
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full z-10 border-2 border-white dark:border-gray-800 ${styles.iconBg} ${styles.darkIconBg}`}
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.3 }}
      />

      <div className="md:w-[calc(50%-2rem)]"> {/* Card container */} 
        <motion.div
          variants={timelineItemVariants(direction)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          whileHover={{ y: -5, boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.08)" }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className={`w-full bg-white dark:bg-gray-800 rounded-lg shadow-md border ${styles.border} ${styles.darkBorder} overflow-hidden`}
        >
          <CardHeader className={`p-4 border-b ${styles.border} ${styles.darkBorder} ${styles.bg} ${styles.darkBg}`}>
            <div className="flex items-center gap-3">
              <motion.div 
                variants={iconVariant}
                className={`w-10 h-10 rounded-full flex items-center justify-center ${styles.iconBg} ${styles.darkIconBg}`}
              >
                {getIcon(exp.type)}
              </motion.div>
              <div>
                <CardTitle className="text-base font-semibold text-gray-800 dark:text-gray-100">{exp.title}</CardTitle>
                <CardDescription className="text-xs text-gray-600 dark:text-gray-400">
                  {exp.type === "work" ? exp.company : exp.institution} | {exp.period}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
            <motion.div 
              variants={containerStaggerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.5} // Delay badge stagger slightly more
              className="flex flex-wrap gap-1.5"
            >
              {exp.skills.map((skill) => (
                <motion.div key={skill} variants={badgeVariant}>
                  <Badge
                    variant="secondary"
                    className={`text-xs font-normal ${styles.bg} ${styles.darkBg} border ${styles.border} ${styles.darkBorder} text-gray-700 dark:text-gray-300`}
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </CardContent>
        </motion.div>
      </div>
    </div>
  );
};

// --- Experience Component ---
export default function Experience() {
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, amount: 0.5 });

  return (
    <section id="experience" className="section-padding bg-white dark:bg-gray-900 overflow-hidden">
      <div ref={sectionRef} className="max-w-6xl mx-auto">
        <motion.div
          ref={titleRef}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          variants={containerStaggerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemSlideUpVariants} className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Experience & Education
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-[#c66461] to-[#a682b0] mx-auto mb-6 origin-center"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: titleInView ? 1 : 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          />
          <motion.p variants={itemSlideUpVariants} className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            My professional journey and educational background that have shaped my career as a software engineer.
          </motion.p>
        </motion.div>

        <div className="relative md:pl-8 md:pr-8"> {/* Container for timeline line */} 
          {/* Central Timeline Line - visible on md+ */} 
          <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
          
          <div className="space-y-8 md:space-y-0"> {/* No space on md+ */} 
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
