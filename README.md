# Prasanna Poovelu — Portfolio Website

> **React.js & TypeScript Specialist** | Front-End Developer | Open to Remote & EU Roles

A modern, dark-themed developer portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS** — featuring a full **Vitest** unit test suite.

🔗 **Live:** [prasanna-poovelu.vercel.app](https://prasanna-poovelu.vercel.app) <!-- update after deploy -->  
💼 **LinkedIn:** [linkedin.com/in/prasanna-poovelu](https://linkedin.com/in/prasanna-poovelu)  
💻 **GitHub:** [github.com/PrasannaPoovelu](https://github.com/PrasannaPoovelu)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Testing | Vitest + React Testing Library |
| Icons | Lucide React |
| Utilities | clsx, tailwind-merge |

---

## Features

- **Hero** — Animated intro with CTA buttons, tech stack pills, and floating stat badges
- **About** — Executive summary, key stats (5+ yrs, 30% perf boost, 40% dev time saved), languages, achievements
- **Experience** — Animated timeline: Infosys (Barclays CPR), Mediwave Digital, Ocean Academy
- **Projects** — CPR Barclays, Brook Healthcare Dashboard, Safe2Share, Mediwave Website Revamp
- **Skills** — 8 categorized skill groups + 4 certifications (Infosys React, Claude Code in Action, Angular, Python)
- **Recommendations** — Real LinkedIn recommendations (Nicholas Aanto, Harsha Rajan, Ashish Kurian Thomas) with interactive carousel
- **Contact** — All contact links + availability status
- **Responsive** — Mobile-first, dark theme, smooth scroll navigation

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata
│   ├── page.tsx            # Main page
│   ├── globals.css         # Global styles + Tailwind
│   └── not-found.tsx       # 404 page
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Sticky nav with active section tracking
│   │   └── Footer.tsx      # Footer with social links
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Recommendations.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── Badge.tsx
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── SectionHeading.tsx
│       └── SectionWrapper.tsx
├── data/                   # All content as typed TypeScript files
│   ├── profile.ts
│   ├── experience.ts
│   ├── projects.ts
│   ├── skills.ts
│   └── recommendations.ts
├── lib/
│   └── utils.ts            # cn() + slugify() utilities
├── types/
│   └── index.ts            # TypeScript interfaces
└── __tests__/              # Vitest test suite (17 files, 100+ cases)
    ├── data/
    ├── lib/
    └── components/
        ├── ui/
        └── sections/
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage report
npm run test:coverage

# Build for production
npm run build
```

---

## Certifications

- 🏅 **Infosys Certified React Web Developer** — Infosys Ltd, Dec 2025
- 🤖 **Claude Code in Action** — Anthropic, Feb 2026 · `wknud4pv4feo`
- 🅰️ **Angular Certification** — 2024
- 🐍 **Diploma in Python Programming** — Ocean Academy, Feb 2021

---

## License

MIT — feel free to use as a template. If you do, a star ⭐ is appreciated!
