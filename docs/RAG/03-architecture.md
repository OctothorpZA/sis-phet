# Architecture

## Directory Structure
```
sis-phet-dev/
├── public/          # Static assets (images, favicons)
├── src/
│   └── app/         # App Router pages/layouts
│       ├── globals.css  # Tailwind + custom CSS
│       ├── layout.tsx   # Root layout (html/body)
│       ├── page.tsx     # Home page (/)
│       └── ...          # Additional pages (e.g., /simulations/[id])
├── docs/
│   └── RAG/         # RAG documentation (01-08 .md guides)
├── AGENTS.md        # Agent conventions
├── package.json     # Deps & scripts
├── next.config.ts   # React Compiler
├── tsconfig.json    # Strict TS + @/ alias
└── eslint.config.mjs # ESLint (Next.js/TS)
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