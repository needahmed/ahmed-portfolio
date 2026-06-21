"use client"

import { skills } from "@/content/site"
import { SectionHeading } from "@/components/section-heading"
import { Reveal, RevealItem } from "@/components/reveal"

export default function Skills() {
  return (
    <section id="skills" className="section py-16 md:py-20">
      <SectionHeading eyebrow="Skills" title="The toolkit." />

      <Reveal stagger className="mt-14 grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline sm:grid-cols-2">
        {skills.map((group) => (
          <RevealItem key={group.group} className="bg-elevated p-6">
            <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">
              {group.group}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="tag">
                  {item}
                </li>
              ))}
            </ul>
          </RevealItem>
        ))}
      </Reveal>
    </section>
  )
}
