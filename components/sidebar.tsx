"use client"

import { useEffect, useState } from "react"
import { Menu, X, ArrowDownToLine } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { nav, site, socials } from "@/content/site"
import { socialIcons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"
import { useSectionNav, type SectionKey } from "@/components/section-nav"
import { ease } from "@/lib/motion"

function Brand({ className = "" }: { className?: string }) {
  return (
    <span className={`font-mono text-sm font-semibold tracking-tight text-ink ${className}`}>
      <span className="text-mint">{site.brand[0]}</span>
      {site.brand.slice(1)}
    </span>
  )
}

function NavList({ onNavigate, large = false }: { onNavigate?: () => void; large?: boolean }) {
  const { active, setActive } = useSectionNav()
  return (
    <div className="flex flex-col gap-1">
      {nav.map((item) => {
        const key = item.href.slice(1) as SectionKey
        const isActive = active === key
        return (
          <button
            key={item.href}
            type="button"
            onClick={() => {
              setActive(key)
              onNavigate?.()
            }}
            className={`relative rounded-lg px-3 py-2 text-left transition-colors ${
              large ? "text-lg" : "text-sm"
            } ${isActive ? "text-ink" : "text-ink-2 hover:text-ink"}`}
          >
            {isActive && (
              <motion.span
                layoutId={large ? "nav-active-mobile" : "nav-active-desktop"}
                className="absolute inset-0 -z-10 rounded-lg border border-hairline bg-mint-soft"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            {item.label}
          </button>
        )
      })}
    </div>
  )
}

function Socials() {
  return (
    <div className="flex items-center gap-2">
      {socials.map((s) => {
        const Icon = socialIcons[s.icon]
        return (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-hairline text-ink-3 transition-colors hover:border-hairline-strong hover:text-mint"
          >
            <Icon className="h-[18px] w-[18px]" />
          </a>
        )
      })}
    </div>
  )
}

export default function Sidebar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex lg:w-64 lg:shrink-0 lg:flex-col lg:border-r lg:border-hairline lg:px-6 lg:py-8">
        <Brand className="px-3" />

        <nav className="mt-10 flex-1">
          <NavList />
        </nav>

        <div className="mt-8 flex flex-col gap-5 border-t border-hairline pt-6">
          <Socials />
          <a
            href={site.cv}
            download
            className="inline-flex items-center gap-1.5 rounded-full border border-hairline px-3.5 py-1.5 text-sm text-ink-2 transition-colors hover:border-hairline-strong hover:text-ink"
          >
            <ArrowDownToLine className="h-3.5 w-3.5" />
            Resume
          </a>
          <div className="flex items-center justify-between">
            <ThemeToggle />
            <p className="text-xs text-ink-3">© {new Date().getFullYear()} {site.name}</p>
          </div>
        </div>
      </aside>

      {/* Mobile top bar */}
      <header className="fixed inset-x-0 top-0 z-50 lg:hidden">
        <div className="glass border-b border-hairline">
          <div className="flex h-16 items-center justify-between px-6">
            <Brand />
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-hairline text-ink-2"
              >
                <Menu className="h-[18px] w-[18px]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              aria-label="Close menu"
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col gap-2 border-l border-hairline bg-surface p-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease }}
            >
              <div className="mb-4 flex items-center justify-between">
                <Brand />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-hairline text-ink-2"
                >
                  <X className="h-[18px] w-[18px]" />
                </button>
              </div>
              <NavList onNavigate={() => setOpen(false)} large />
              <div className="mt-6 flex flex-col gap-5 border-t border-hairline pt-6">
                <Socials />
                <a
                  href={site.cv}
                  download
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-mint px-4 py-3 text-sm font-medium text-mint-contrast"
                >
                  <ArrowDownToLine className="h-4 w-4" />
                  Download CV
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
