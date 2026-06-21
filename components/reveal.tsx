"use client"

import type { ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { fadeUp, stagger, viewportOnce } from "@/lib/motion"

type RevealProps = {
  children: ReactNode
  className?: string
  /** Render children as staggered items (wrap each child in <RevealItem>). */
  stagger?: boolean
  as?: "div" | "section" | "ul" | "li"
}

/**
 * Scroll reveal: short fade + rise, once only. With prefers-reduced-motion it
 * collapses to opacity only (no transforms).
 */
export function Reveal({ children, className, stagger: isStagger, as = "div" }: RevealProps) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as]

  const variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } }
    : isStagger
      ? stagger
      : fadeUp

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      {children}
    </MotionTag>
  )
}

export function RevealItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode
  className?: string
  as?: "div" | "li"
}) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as]
  const variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } }
    : fadeUp
  return (
    <MotionTag className={className} variants={variants}>
      {children}
    </MotionTag>
  )
}
