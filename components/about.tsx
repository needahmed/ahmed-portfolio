"use client"

import { about, site } from "@/content/site"
import { Reveal, RevealItem } from "@/components/reveal"

export default function About() {
  return (
    <section id="about" className="section py-16 md:py-20">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow mb-4">About</p>
            <h2 className="text-display-sm font-semibold tracking-tight text-ink text-balance">
              Senior engineer, end-to-end owner.
            </h2>
          </Reveal>

          <Reveal stagger className="mt-7 space-y-5">
            {about.paragraphs.map((p) => (
              <RevealItem key={p.slice(0, 24)}>
                <p className="text-lg leading-relaxed text-ink-2 text-pretty">{p}</p>
              </RevealItem>
            ))}
          </Reveal>
        </div>

        <Reveal className="lg:pt-2">
          <dl className="card-surface top-sheen divide-y divide-hairline">
            {about.facts.map((f) => (
              <div key={f.label} className="flex flex-col gap-1 px-6 py-5">
                <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">
                  {f.label}
                </dt>
                <dd className="text-ink">{f.value}</dd>
              </div>
            ))}
            <div className="flex flex-col gap-1 px-6 py-5">
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">Email</dt>
              <dd>
                <a
                  href={`mailto:${site.email}`}
                  className="text-ink transition-colors hover:text-mint"
                >
                  {site.email}
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
