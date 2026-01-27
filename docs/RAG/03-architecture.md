# Architecture

## Directory Structure
```
sis-phet-dev/
├── public/          # Static assets (images, favicons)
├── src/
│   ├── data/        # Sprint 1: simulations.ts (PhET list)
│   ├── components/  # Sprint 1: PhetEmbed.tsx
│   └── app/         # App Router
│       ├── globals.css # Tailwind v4 + theme
│       ├── layout.tsx  # Root (fonts/providers/dark)
│       ├── page.tsx    # Home grid/search/tabs (client)
│       └── sim/
│           └── [slug]/
│               └── page.tsx # Dynamic embed (SSG/metadata)
├── docs/RAG/        # 01-08 guides
├── AGENTS.md        # Agent rules
├── next.config.ts   # React Compiler + images remote
├── tsconfig.json    # Strict TS + @/*
└── eslint.config.mjs
```

## App Router Flow
1. `src/app/layout.tsx`: Root <html>, fonts, providers
2. `src/app/page.tsx`: Default page content
3. Metadata: Exported const metadata: Metadata
4. Loading/Error: Add loading.tsx, error.tsx per route

## Data Flow
- Static pages currently
- Future: Server Components, API routes (`app/api/`), fetch caching
- Client state: useState/useEffect (or Zustand/Jotai)

## Styling Layers
- Tailwind utilities
- globals.css: @tailwind directives + custom @layer

Last updated: $(date)