# Project Overview

## SIS-PhET Development
This is a development environment for SIS (Scientific Interactive Simulations) using PhET-style interactive simulations, bootstrapped with Next.js 16 App Router.

### Tech Stack
- **Framework**: Next.js 16.1.5 (App Router)
- **UI Library**: React 19.2.3
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript (strict mode)
- **Linting**: ESLint (Next.js config with Core Web Vitals)
- **Build**: Next.js SWC / Turbopack
- **Fonts**: next/font/google (Geist Sans/Mono)
- **Compiler**: React Compiler enabled
- **No Tests**: To be added (recommend Vitest + RTL)

### Key Features (Sprint 1 PoC MVP)
- PhET grid/search/category tabs (11 sims responsive)
- Dynamic embeds SSG (/sim/[slug]/page.tsx)
- Versioned thumbs (next/image optimized)
- Dark mode/dynamic metadata

### Future Expansion
- Interactive simulations (PhET-style Canvas/WebGL)
- Simulation controls, data export
- Multi-language support
- Simulation library

See AGENTS.md for agent guidelines.

Last updated: $(date)