"use client"

import { createContext, useContext } from "react"

export type SectionKey = "home" | "work" | "about" | "experience" | "skills" | "contact"

export const SectionNavContext = createContext<{
  active: SectionKey
  setActive: (key: SectionKey) => void
}>({ active: "home", setActive: () => {} })

export function useSectionNav() {
  return useContext(SectionNavContext)
}
