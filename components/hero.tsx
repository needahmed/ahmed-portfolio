"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowDownToLine, ArrowUpRight } from "lucide-react"
import { hero, site, socials } from "@/content/site"
import { socialIcons } from "@/components/icons"
import { Magnetic } from "@/components/magnetic"
import { useSectionNav } from "@/components/section-nav"
import { ease } from "@/lib/motion"

export default function Hero() {
  const reduce = useReducedMotion()
  const { setActive } = useSectionNav()

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
  }
  const item = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.5 } } }
    : {
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
      }

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Soft aurora glow behind the hero — low opacity, drifting */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-mint opacity-[0.12] blur-[120px] animate-aurora-drift" />
        <div className="absolute left-[15%] top-[20%] h-[320px] w-[320px] rounded-full bg-mint opacity-[0.06] blur-[100px]" />
      </div>

      <div className="section flex min-h-[80vh] flex-col justify-center py-16 md:py-24">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.p variants={item} className="eyebrow mb-6">
            {site.eyebrow}
          </motion.p>

          <motion.h1
            variants={item}
            className="text-display font-semibold tracking-tight text-ink text-balance"
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-2 md:text-xl text-pretty"
          >
            {hero.subhead}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <Magnetic>
              <button
                type="button"
                onClick={() => setActive("work")}
                className="group inline-flex items-center gap-2 rounded-full bg-mint px-6 py-3 text-sm font-medium text-mint-contrast shadow-glow transition-transform hover:-translate-y-0.5"
              >
                View work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </Magnetic>
            <button
              type="button"
              onClick={() => setActive("contact")}
              className="inline-flex items-center gap-2 rounded-full border border-hairline px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-hairline-strong"
            >
              Get in touch
            </button>
            <a
              href={site.cv}
              download
              className="inline-flex items-center gap-1.5 px-2 py-3 text-sm text-ink-3 transition-colors hover:text-ink"
            >
              <ArrowDownToLine className="h-4 w-4" />
              Download CV
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-3">
            {socials.map((s) => {
              const Icon = socialIcons[s.icon]
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-ink-3 transition-colors hover:border-hairline-strong hover:text-mint"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              )
            })}
          </motion.div>
        </motion.div>

        {/* Quiet credibility row — mono micro-labels, not vanity counters */}
        <motion.ul
          variants={item}
          initial="hidden"
          animate="show"
          className="mt-16 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[12px] text-ink-3"
        >
          {hero.credibility.map((label, i) => (
            <li key={label} className="flex items-center gap-3">
              {i > 0 && <span className="h-1 w-1 rounded-full bg-hairline-strong" aria-hidden="true" />}
              <span>{label}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
