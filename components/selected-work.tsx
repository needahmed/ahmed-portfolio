"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { projects, moreOnGitHub, type Project } from "@/content/site"
import { SectionHeading } from "@/components/section-heading"
import { ProjectCover } from "@/components/project-cover"
import { Reveal } from "@/components/reveal"
import { fadeUp, viewportOnce } from "@/lib/motion"

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((t) => (
        <span key={t} className="tag">
          {t}
        </span>
      ))}
    </div>
  )
}

function ProjectLinks({ links }: { links?: Project["links"] }) {
  if (!links?.length) return null
  return (
    <div className="flex flex-wrap gap-4">
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex items-center gap-1 text-sm text-ink-2 transition-colors hover:text-mint"
        >
          {l.label}
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </a>
      ))}
    </div>
  )
}

function Cover({ project, sizes, priority }: { project: Project; sizes: string; priority?: boolean }) {
  return (
    <div className="absolute inset-0">
      {project.image ? (
        <Image
          src={project.image}
          alt={`${project.title} product screenshot`}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      ) : project.cover ? (
        <ProjectCover cover={project.cover} title={project.title} />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
    </div>
  )
}

function FeaturedCard({ project }: { project: Project }) {
  const reduce = useReducedMotion()
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ duration: 0.25 }}
      className="group card-surface top-sheen overflow-hidden shadow-card transition-colors hover:border-hairline-strong"
    >
      <div className="grid md:grid-cols-2">
        <div className="relative aspect-[16/11] overflow-hidden md:aspect-auto md:min-h-[360px]">
          <Cover project={project} sizes="(min-width: 768px) 50vw, 100vw" priority />
        </div>
        <div className="flex flex-col justify-between gap-6 p-7 md:p-9">
          <div>
            <p className="eyebrow mb-4">Featured</p>
            <h3 className="text-2xl font-semibold tracking-tight text-ink">{project.title}</h3>
            <p className="mt-3 leading-relaxed text-ink-2 text-pretty">{project.blurb}</p>
          </div>
          <div className="space-y-5">
            <Tags tags={project.tags} />
            <ProjectLinks links={project.links} />
          </div>
        </div>
      </div>
    </motion.article>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const reduce = useReducedMotion()
  return (
    <motion.article
      variants={fadeUp}
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ duration: 0.25 }}
      className="group card-surface top-sheen flex flex-col overflow-hidden shadow-card transition-colors hover:border-hairline-strong"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Cover project={project} sizes="(min-width: 768px) 50vw, 100vw" />
      </div>
      <div className="flex flex-1 flex-col gap-5 p-6">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-ink">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-2 text-pretty">{project.blurb}</p>
        </div>
        <div className="mt-auto space-y-4">
          <Tags tags={project.tags} />
          <ProjectLinks links={project.links} />
        </div>
      </div>
    </motion.article>
  )
}

export default function SelectedWork() {
  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="work" className="section py-16 md:py-20">
      <SectionHeading
        eyebrow="Selected Work"
        title="Things I've built and shipped."
        description="A focused set of products: real systems running in production, not demos. Quality over quantity."
      />

      <div className="mt-14 space-y-6">
        {featured && <FeaturedCard project={featured} />}

        <Reveal stagger className="grid gap-6 sm:grid-cols-2">
          {rest.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </Reveal>
      </div>

      <Reveal className="mt-12">
        <a
          href={moreOnGitHub}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 text-sm text-ink-2 transition-colors hover:text-mint"
        >
          More on GitHub
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </Reveal>
    </section>
  )
}
