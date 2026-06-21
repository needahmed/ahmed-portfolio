"use client"

import { useState } from "react"
import { ArrowDownToLine, ArrowUpRight, Loader2, Mail, MapPin } from "lucide-react"
import { contact, site, socials } from "@/content/site"
import { socialIcons } from "@/components/icons"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { useToast } from "@/components/ui/use-toast"

const inputClass =
  "w-full rounded-xl border border-hairline bg-surface px-4 py-3 text-ink placeholder:text-ink-3 outline-none transition-colors focus:border-mint"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [sending, setSending] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, subject: `Portfolio message from ${form.name}` }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Failed to send message")
      toast({ title: "Message sent", description: "Thanks, I'll get back to you soon." })
      setForm({ name: "", email: "", message: "" })
    } catch (err) {
      toast({
        title: "Something went wrong",
        description: err instanceof Error ? err.message : "Please try again, or email me directly.",
        variant: "destructive",
      })
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="section py-16 md:py-20">
      <SectionHeading eyebrow="Contact" title={contact.heading} description={contact.blurb} />

      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        {/* Direct links */}
        <Reveal className="space-y-8">
          <a
            href={`mailto:${site.email}`}
            className="group inline-flex w-full items-center justify-between gap-4 rounded-2xl bg-mint px-6 py-5 text-mint-contrast transition-transform hover:-translate-y-0.5"
          >
            <span className="flex items-center gap-3">
              <Mail className="h-5 w-5" />
              <span className="font-medium">{site.email}</span>
            </span>
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <div className="flex items-center gap-2 text-ink-2">
            <MapPin className="h-4 w-4 text-ink-3" />
            <span>{site.location}</span>
          </div>

          <div className="flex items-center gap-3">
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
            <a
              href={site.cv}
              download
              className="inline-flex items-center gap-1.5 rounded-full border border-hairline px-4 py-2.5 text-sm text-ink-2 transition-colors hover:border-hairline-strong hover:text-ink"
            >
              <ArrowDownToLine className="h-4 w-4" />
              Download CV
            </a>
          </div>
        </Reveal>

        {/* Minimal form */}
        <Reveal>
          <form onSubmit={handleSubmit} className="card-surface top-sheen space-y-4 p-6 md:p-7" noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label htmlFor="name" className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  placeholder="you@company.com"
                  className={inputClass}
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label htmlFor="message" className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="What are you working on?"
                className={`${inputClass} resize-none`}
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-mint px-6 py-3 text-sm font-medium text-mint-contrast transition-opacity hover:opacity-95 disabled:opacity-60"
            >
              {sending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending…
                </>
              ) : (
                "Send message"
              )}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
