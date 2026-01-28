# Sprint 2 Implementation Plan: UI Polish & Nice-to-Haves

## Sprint Overview
**Duration**: 3 days.  
**Goal**: Polish PoC UX (shadcn comps, search, PWA)—client-ready MVP.  
**DoD**: Lint/build clean, Lighthouse 95%+.  
**Decisions**: shadcn Tailwind comps, fuse.js search, native PWA.  
**Velocity**: 15 pts.

## User Stories
1. **shadcn UI** (6pts)
   - AC: Navbar, modals, tables w/ shadcn.

2. **Advanced Search** (4pts)
   - AC: fuse.js fuzzy title/desc.

3. **PWA/Loading** (5pts)
   - AC: manifest, skeletons shimmer.

**Total**: 15pts.

## Tasks
### Prep (Day 1)
- npx shadcn add navbar modal table input select tooltip
- Lint deps.

### UI (Day 1-2)
- Navbar: Home/Login (shadcn).
- Vercel Analytics/Speed Insights: Layout components.
- Skeletons: Grid shimmer (css animate).

### Search/PWA (Day 2)
- fuse.js: Import desc to data, fuzzy search.
- public/manifest.json icons/theme.

### Verify (Day 3)
- Lint/build.
- Lighthouse audit.
- Commit feat(sprint2): UI polish.

## Nice-to-Haves Integrated
- shadcn comps ✓
- fuse search ✓
- Loading/PWA ✓

## Dependencies
- shadcn CLI adds (no runtime).

## Metrics
- Lighthouse 95%+ PWA/perf.
- Bundle <200kb.

*Light polish post-Sprint 1. $(date)*
