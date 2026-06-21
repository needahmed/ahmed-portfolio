"use client"

import { certifications, education, experience } from "@/content/site"
import { SectionHeading } from "@/components/section-heading"
import { Reveal, RevealItem } from "@/components/reveal"

export default function Experience() {
  return (
    <section id="experience" className="section py-16 md:py-20">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've shipped."
        description="Roles, outcomes, and the numbers behind them."
      />

      <div className="mt-14 grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
        {/* Timeline */}
        <Reveal stagger as="ul" className="relative">
          <span
            aria-hidden="true"
            className="absolute left-[5px] top-2 bottom-2 w-px bg-hairline"
          />
          {experience.map((role) => (
            <RevealItem key={role.company} as="li" className="relative pb-12 pl-8 last:pb-0">
              <span className="absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full border border-mint bg-canvas">
                <span className="absolute inset-[2px] rounded-full bg-mint" />
              </span>

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="flex items-center gap-2 text-lg font-semibold tracking-tight text-ink">
                  {role.role}
                  <span className="h-1 w-1 rounded-full bg-ink-3" aria-hidden="true" />
                  <span className="text-mint">{role.company}</span>
                </h3>
                <p className="font-mono text-xs text-ink-3">{role.period}</p>
              </div>
              <p className="mt-1 font-mono text-xs text-ink-3">{role.location}</p>

              <ul className="mt-4 space-y-2.5">
                {role.bullets.map((b) => (
                  <li key={b.slice(0, 28)} className="flex gap-3 text-[15px] leading-relaxed text-ink-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-mint" />
                    <span className="text-pretty">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {role.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </RevealItem>
          ))}
        </Reveal>

        {/* Education + certifications — compact, de-emphasized */}
        <Reveal className="space-y-6 lg:pt-2">
          <div className="card-surface top-sheen p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">Education</p>
            <p className="mt-3 font-medium text-ink">{education.degree}</p>
            <p className="text-sm text-ink-2">{education.school}</p>
          </div>
          <div className="card-surface top-sheen p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">
              Certifications
            </p>
            <ul className="mt-3 space-y-2">
              {certifications.map((c) => (
                <li key={c} className="text-sm text-ink-2">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
