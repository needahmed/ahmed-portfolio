import type { ReactNode } from "react"
import { Reveal } from "@/components/reveal"

export function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
}: {
  eyebrow: string
  title: string
  description?: ReactNode
  className?: string
}) {
  return (
    <Reveal className={`max-w-2xl ${className}`}>
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="text-display-sm font-semibold tracking-tight text-ink text-balance">{title}</h2>
      {description && <p className="mt-4 text-lg leading-relaxed text-ink-2 text-pretty">{description}</p>}
    </Reveal>
  )
}
