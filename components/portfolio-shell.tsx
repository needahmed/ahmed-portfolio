"use client"

import { useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import Hero from "@/components/hero"
import SelectedWork from "@/components/selected-work"
import About from "@/components/about"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Sidebar from "@/components/sidebar"
import { SectionNavContext, type SectionKey } from "@/components/section-nav"
import { ease } from "@/lib/motion"

const sections: Record<SectionKey, () => JSX.Element> = {
  home: Hero,
  work: SelectedWork,
  about: About,
  experience: Experience,
  skills: Skills,
  contact: Contact,
}

export default function PortfolioShell() {
  const [active, setActive] = useState<SectionKey>("home")
  const reduce = useReducedMotion()
  const ActiveSection = sections[active]

  return (
    <SectionNavContext.Provider value={{ active, setActive }}>
      <div className="lg:flex lg:h-screen lg:overflow-hidden">
        <Sidebar />
        <main
          id="main"
          className="flex-1 pt-16 lg:h-screen lg:overflow-y-auto lg:pt-0"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease }}
            >
              <ActiveSection />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </SectionNavContext.Provider>
  )
}
