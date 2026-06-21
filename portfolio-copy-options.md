# Portfolio copy options — fintech / Sorbet direction

Use one **set** end-to-end for a consistent voice. After you pick a set, we can wire it into `components/hero.tsx` (terminal line, role/expertise, tagline, `CodeAnimation` lines) and `components/about.tsx` (journey paragraphs + optional `infoCards`).

---

## Set A — Systems & infrastructure (technical)

### `~/portfolio.tsx` snippet

```ts
const developer = {
  name: 'Ahmed Pervez',
  role: 'Senior Full-Stack Engineer',
  focus: ['Fintech APIs', 'Payments', 'System design'],
  passion: 'Reliable money-moving software',
};
function shipProduction() {
  return design + implement + harden;
}
// Payments, primitives, and plain good engineering
```

### Hero tagline

Crafting production backends and product surfaces for global fintech—where correctness, observability, and clean architecture matter as much as the UI. I specialize in Node/NestJS ecosystems, relational data modeling, and integrations with payment and banking partners.

### My Journey

Embarking on my journey in Computer Science at Bahria University, I quickly gravitated toward full-stack engineering. What hooked me was not just shipping features, but tracing a request end-to-end: from API design and database constraints to the edge cases that only show up with real users and real money.

Today I’m a Senior Full-Stack Engineer at Sorbet, a fintech company building Web3-aware payment infrastructure—multi-currency flows, invoicing, settlement, and the glue between regulated partners and modern software. My core stack spans React and Next.js on the product side and Node.js-style services with SQL (PostgreSQL, Prisma) on the platform side, with a growing emphasis on system design, webhooks, and secure financial workflows.

When I’m not coding, I enjoy podcasts and debates to stay sharp. I’m also reading more history, philosophy, and religion to widen how I think about people, incentives, and the systems we build.

### Optional hero metadata (role / expertise lines)

- **role:** `Senior Full-Stack Engineer`
- **expertise:** `Fintech · Payments · Full stack`

### Optional About card — Experience (one line)

Senior Full-Stack Engineer building fintech payment infrastructure, APIs, and scalable web products.

---

## Set B — Product + platform (balanced)

### `~/portfolio.tsx` snippet

```ts
const developer = {
  name: 'Ahmed Pervez',
  role: 'Senior Full-Stack Engineer',
  skills: ['React', 'NestJS', 'PostgreSQL'],
  passion: 'Payments that feel simple behind the scenes',
};
function createAmazingThings() {
  return productSense + platformDepth;
}
// Always learning, always shipping
```

### Hero tagline

I build responsive, trustworthy experiences on top of serious backend work—especially in fintech, where UX and infrastructure have to move together. Deep in React, Next.js, and Node/NestJS, with SQL and Prisma as the backbone for complex domains.

### My Journey

Studying Computer Science at Bahria University pushed me toward full-stack development early. My favorite part of programming is still problem-solving: turning vague requirements into a design, then into code that survives production.

I’m now a Senior Full-Stack Engineer at Sorbet, working on Web3-aligned fintech products—global payments, invoicing, and the operational systems that make money movement predictable. That means end-to-end ownership: schema evolution, provider integrations, and the product layers users actually touch.

Outside of work I follow podcasts and debates, and I’m exploring history, philosophy, and religion to keep learning beyond the keyboard.

### Optional hero metadata

- **role:** `Senior Full-Stack Engineer @ Sorbet`
- **expertise:** `Full stack · Fintech · Web3 payments`

### Optional About card — Experience

Senior Full-Stack Engineer at a global fintech; full-stack product delivery from API to UI.

---

## Set C — Mission-forward (clear “why fintech”)

### `~/portfolio.tsx` snippet

```ts
const developer = {
  name: 'Ahmed Pervez',
  role: 'Senior Full-Stack Engineer',
  stack: 'Web apps + payment infrastructure',
  northStar: 'Make global money movement boring (in a good way)',
};
function buildTrust() {
  return clarity + security + performance;
}
// Fintech is a systems design problem
```

### Hero tagline

I care about building software people trust with their business—clear flows up front, disciplined engineering underneath. My recent work centers on fintech and Web3 payment rails: APIs, data models, partner integrations, and the operational rigor that keeps everything compliant and reliable.

### My Journey

My path started at Bahria University in Computer Science, where I discovered I loved building complete products—not just interfaces, but the services and databases behind them. The part of programming I enjoy most is the moment a hard problem snaps into a structure you can implement and test.

At Sorbet I work as a Senior Full-Stack Engineer on payment infrastructure and product development: designing and evolving systems for invoices, accounts, settlement, and multi-currency operations, alongside the React/Next.js surfaces that make those capabilities usable.

When I step away from the screen, I listen to podcasts and debates and read across history, philosophy, and religion—different lenses for thinking about culture, ethics, and how technology fits into people’s lives.

### Optional hero metadata

- **role:** `Senior Full-Stack Engineer`
- **expertise:** `Fintech & Web3 payments`

### Optional About card — Experience

Senior Full-Stack Engineer focused on fintech platforms, payments, and end-to-end delivery.

---

## Set D — Concise (scannable, interview-friendly)

### `~/portfolio.tsx` snippet

```ts
const developer = {
  name: 'Ahmed Pervez',
  role: 'Senior Full-Stack Engineer',
  domain: 'Fintech / Web3 payments',
  tools: ['React', 'Next.js', 'NestJS', 'PostgreSQL'],
};
// API design · Prisma · Integrations · Production discipline
```

### Hero tagline

Senior Full-Stack Engineer at Sorbet, building fintech and Web3 payment products—APIs, PostgreSQL/Prisma data models, provider integrations, and polished React/Next.js experiences. I care about system design, secure financial workflows, and code that holds up in production.

### My Journey

I studied Computer Science at Bahria University and leaned hard into full-stack development. I like the puzzle of translating real-world constraints into software: schemas, APIs, edge cases, and performance.

Today my work is concentrated in fintech infrastructure and application development—payments, invoicing, settlement paths, and the reliability patterns (webhooks, verification, operational monitoring) that come with moving value globally.

Off the clock I follow podcasts and debates and spend time on history, philosophy, and religion—ongoing curiosity, same as engineering.

### Optional hero metadata

- **role:** `Senior Full-Stack Engineer`
- **expertise:** `Fintech APIs & full-stack`

### Optional About card — Experience

Senior Full-Stack Engineer — Sorbet (fintech / Web3 payments), previously senior full-stack product roles.

---

## Quick comparison

| Set   | Tone              | Best if you want…                          |
| ----- | ----------------- | ------------------------------------------ |
| **A** | Engineering-heavy | Emphasis on reliability, APIs, “hard” stack |
| **B** | Balanced          | Product + platform in one breath           |
| **C** | Narrative         | Stronger “why” and trust framing           |
| **D** | Compact           | Fast scan; keyword-rich for recruiters     |

Reply with **A, B, C, or D** (or a hybrid, e.g. “Set B code block + Set A journey”), and we’ll apply it in the codebase.
