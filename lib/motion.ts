import type { Variants } from "framer-motion"

// Restrained luxe easing — used everywhere for consistency.
export const ease = [0.22, 1, 0.36, 1] as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
}

export const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
}

// Reveal-once viewport config shared across sections.
export const viewportOnce = { once: true, amount: 0.2 } as const
