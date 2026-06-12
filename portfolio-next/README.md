# Sushil Harsana — Portfolio

A personal portfolio built with **Next.js (App Router)**, ported from a Claude Design
handoff. Terminal/editorial neo-brutalism — flat black, emerald accent, editorial
serif display, with scroll-reveal motion (framer-motion) and a gliding tech marquee.

## Stack

- **Next.js 14** (App Router, React 18)
- **next/font** — self-hosted Google fonts (Instrument Serif, Space Grotesk, JetBrains Mono, Yellowtail)
- **framer-motion** — scroll-into-view reveals
- Design tokens in `src/app/tokens/*.css`, components in `src/components/`

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Import the repo in Vercel. If this app is **not** at the repo root, set the
   Vercel project's **Root Directory** to `portfolio-next`.
3. Framework preset: **Next.js** (auto-detected). Deploy.

## Assets

- `public/portrait.png` — hero/about portrait
- `public/Sushil_Harsana_CV.pdf` — downloadable CV (linked from the nav)
