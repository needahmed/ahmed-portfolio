// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth for all site content.
// Edit copy, projects, experience and skills here — components read from this.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  name: "Ahmed Pervez",
  monogram: "AP",
  brand: "needahmed",
  role: "Lead Software Engineer",
  eyebrow: "Lead Software Engineer, Fintech & Payments",
  email: "needahmed2@gmail.com",
  location: "Islamabad, Pakistan",
  domain: "needahmed.com",
  url: "https://needahmed.com",
  cv: "/CV.pdf",
} as const

// Headline shown in the hero. The two alternates are kept for easy swapping.
export const hero = {
  headline: "I build software that ships, and holds up when it matters.",
  headlineAlternates: [
    "I build full-stack products end to end, from data model to the app in your hand.",
    "I build software that's calm, fast, and built to last.",
  ],
  subhead:
    "I'm Ahmed Pervez, a lead software engineer. I design, build, and operate production fintech, SaaS, and AI products end to end, from the data model to the interface on top of it.",
  // Quiet credibility row — understated mono micro-labels, not vanity counters.
  credibility: ["$1M+ monthly volume", "3 currency corridors", "MENA region"],
}

export const socials = [
  { label: "GitHub", href: "https://github.com/needahmed", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/youneedahmed/", icon: "linkedin" },
  { label: "X", href: "https://x.com/zedgaghost", icon: "x" },
] as const

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const

// ─── Selected Work ───────────────────────────────────────────────────────────
export type Project = {
  slug: string
  title: string
  blurb: string
  tags: string[]
  image?: string // optional screenshot; falls back to a designed cover
  cover?: { glyph: string; from: string; to: string } // designed gradient cover
  featured?: boolean
  links?: { label: string; href: string }[]
}

export const projects: Project[] = [
  {
    slug: "sorbet",
    title: "Sorbet",
    blurb:
      "Cross-border stablecoin payment rails for freelancers and SMEs across the MENA region. Production NestJS API processing $1M+ in monthly volume across 3 currency corridors at 98% uptime; shipped the iOS and Android app solo in React Native in 4 weeks.",
    tags: ["NestJS", "PostgreSQL", "Prisma", "React Native", "Bridge", "DUE Network", "KYC"],
    image: "/sorbet-app.png",
    featured: true,
    links: [{ label: "Live", href: "https://mysorbet.io" }],
  },
  {
    slug: "spellcasters",
    title: "SpellCasters",
    blurb:
      "Real-time multiplayer word game for up to 6 players with a server-authoritative Node + Socket.IO backend: turn order, path adjacency, scoring and a gem economy validated against a 173k-word dictionary. React + TypeScript + Vite client with drag input, live score preview and spectating.",
    tags: ["Node", "Socket.IO", "React", "TypeScript", "Vite"],
    image: "/spellcasters.png",
    links: [{ label: "Live", href: "https://spellcasters.xyz" }],
  },
  {
    slug: "otp-inbox",
    title: "OTP Inbox",
    blurb:
      "Manifest V3 Chrome extension (React 18, Vite, Tailwind) that auto-detects and surfaces Gmail OTP and verification codes. Node + Express + Prisma + Redis backend with Google OAuth, AES-256-GCM token encryption at rest, and a move from polling to Google Cloud Pub/Sub for sub-second push.",
    tags: ["Chrome Extension", "React", "Node", "Redis", "OAuth"],
    image: "/otp-inbox.png",
  },
  {
    slug: "fintech-briefing",
    title: "Fintech Morning Briefing",
    blurb:
      "Node.js CLI that ingests fintech, stablecoin and MENA RSS feeds, scores each item with an LLM, and writes the high-signal picks to Notion, with deduplication and per-run cost controls.",
    tags: ["Node", "LLM", "Notion API", "RSS"],
    cover: { glyph: "FB", from: "#F59E0B", to: "#5EE6B5" },
  },
  {
    slug: "kupi-chatbot",
    title: "KUPI WhatsApp AI Chatbot",
    blurb:
      "WhatsApp AI chatbot (Node.js + OpenAI) automating ticket inquiries and bookings, integrated with Twilio for messaging and deployed serverless on AWS via the Serverless Framework.",
    tags: ["Node", "OpenAI", "Twilio", "AWS", "Serverless"],
    image: "/kupibot.png",
  },
  {
    slug: "skillsprint",
    title: "SkillSprint",
    blurb:
      "Co-founded career-guidance platform with interactive CS roadmaps (Next.js 14 + TypeScript) and a recommendation tool powered by a random-forest classifier.",
    tags: ["Next.js", "TypeScript", "ML"],
    image: "/skillsprint.png",
    links: [
      { label: "Live", href: "https://skill-sprint-delta.vercel.app" },
      { label: "Code", href: "https://github.com/needahmed/SkillSprint" },
    ],
  },
]

export const moreOnGitHub = "https://github.com/needahmed"

// ─── About ───────────────────────────────────────────────────────────────────
export const about = {
  paragraphs: [
    "I'm a lead software engineer with 4+ years building and operating production fintech, SaaS and AI products end to end, solo or in small teams. I like owning a problem from the data model all the way to the shipped UI.",
    "Most of my work lives close to money: multi-currency payment infrastructure spanning ACH, SEPA, SWIFT and stablecoin settlement, plus the APIs, dashboards and mobile apps on top of it. I care about systems that stay correct and stay up.",
    "Away from the editor I'm drawn to system design and the long arc of how things work, a curiosity that wanders into history and philosophy as readily as it does into a new codebase.",
  ],
  facts: [
    { label: "Based in", value: "Islamabad, Pakistan" },
    { label: "Education", value: "BSc Computer Science, Bahria University" },
    { label: "Available for", value: "Lead / fintech roles" },
  ],
}

// ─── Experience ──────────────────────────────────────────────────────────────
export type Role = {
  company: string
  role: string
  period: string
  location: string
  bullets: string[]
  tags: string[]
}

export const experience: Role[] = [
  {
    company: "Sorbet",
    role: "Lead Software Engineer",
    period: "Jan 2026 to Present",
    location: "Remote",
    bullets: [
      "Own engineering architecture, technical direction, code review and hiring, while mentoring engineers and introducing AI agent workflows that raised delivery speed and quality across the team.",
      "Design, build and operate a production NestJS payments API moving $1M+ in monthly volume across 3 corridors at 98% uptime.",
      "Shipped the iOS and Android app solo in React Native in 4 weeks, a single codebase covering auth, KYC, payments, recipients and transaction history.",
      "Integrated Bridge and DUE Network to settle via ACH, SEPA, SWIFT and on-chain stablecoin transfers, cutting average settlement time from 2 days to 8 hours.",
      "Revamped payments, onboarding and dashboard flows end to end, increasing transaction volume by 160%.",
    ],
    tags: ["NestJS", "React Native", "PostgreSQL", "Payments"],
  },
  {
    company: "VQode",
    role: "Senior Software Engineer",
    period: "Aug 2024 to Jan 2026",
    location: "Remote",
    bullets: [
      "Led full-stack development of Kupi (Next.js, React, Node.js), serving 3,000 users.",
      "Designed and shipped Location Pro, a SaaS serving 40+ B2B customers.",
      "Owned end-to-end database architecture and optimization, cutting page load time by 80% and lifting engagement by 150%.",
    ],
    tags: ["Next.js", "Node.js", "SaaS"],
  },
  {
    company: "Virtury Cloud",
    role: "Full-Stack Developer",
    period: "Aug 2023 to May 2024",
    location: "Remote",
    bullets: [
      "Built and launched the company website end to end (Next.js, React, PostgreSQL), improving page load time by 40%.",
      "Streamlined database workflows and hardened API reliability, reducing API errors by 30%.",
    ],
    tags: ["Next.js", "React", "PostgreSQL"],
  },
]

export const education = {
  degree: "BSc Computer Science",
  school: "Bahria University, Islamabad",
}

export const certifications = [
  "Web Development Bootcamp, Udemy",
  "Ethereum Development, Alchemy University",
  "Solana Development, Udemy",
]

// ─── Skills ──────────────────────────────────────────────────────────────────
export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "Solidity", "Rust"] },
  {
    group: "Frontend",
    items: ["React", "Next.js", "React Native", "Tailwind", "Framer Motion", "shadcn/ui"],
  },
  {
    group: "Backend",
    items: ["Node.js", "NestJS", "Express", "FastAPI", "REST", "GraphQL", "WebSockets"],
  },
  {
    group: "Data",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma", "Supabase"],
  },
  {
    group: "Cloud & DevOps",
    items: ["AWS", "GCP", "Docker", "Serverless", "Vercel", "CI/CD", "GitHub Actions"],
  },
  { group: "AI / ML", items: ["OpenAI", "LangChain", "RAG", "scikit-learn"] },
  {
    group: "Payments",
    items: [
      "ACH",
      "SEPA",
      "SWIFT",
      "KYC / TOS",
      "Virtual accounts",
      "Bridge",
      "DUE Network",
      "Webhooks",
      "Stablecoin settlement",
    ],
  },
  { group: "Blockchain", items: ["Solidity", "Rust", "ethers.js", "Hardhat"] },
]

// ─── Contact ─────────────────────────────────────────────────────────────────
export const contact = {
  heading: "Let's build something that lasts.",
  blurb:
    "Open to lead and fintech engineering roles, and to interesting problems near the edge of money and software. The fastest way to reach me is email.",
}
