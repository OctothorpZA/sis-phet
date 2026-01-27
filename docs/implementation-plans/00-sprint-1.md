# Sprint 1 Implementation Plan: PhET PoC MVP

## Sprint Overview
**Duration**: 1 week (5 working days)  
**Goal**: Deliver functional Next.js PoC embedding 10+ PhET simulations per blueprint-v1.  
**Definition of Done**: Deployed to Vercel, client demo-ready, lint/types pass.  
**Team**: Developer (self/agent), review via PR.  
**Velocity**: 20-30 story points.

## User Stories (Prioritized)
1. **As a visitor, I can browse a grid of PhET simulations by category.** (8 pts)
   - AC: Responsive grid (1-4 cols), cards with title/category/preview.
   
2. **As a visitor, I can launch any simulation in a full embed page.** (8 pts)
   - AC: /sim/[slug] loads iframe, responsive, attribution footer, back link.

3. **As a visitor, I can search/filter simulations.** (5 pts)
   - AC: Search bar filters by title/category (client-side).

4. **As an admin/developer, the site builds/deploys cleanly.** (3 pts)
   - AC: npm run build succeeds, Vercel deploy.

5. **As a visitor, sim previews use PhET thumbnails.** (3 pts)
   - AC: Cards show official 128px images.

**Total**: 27 pts.

## Tasks Breakdown
### Prep (Day 1)
- [ ] Review blueprint-v1.md, confirm 10 sims list.
- [ ] Run `npm run dev`, verify base app.
- [ ] Lint/typecheck: `npm run lint && npx tsc --noEmit`.

### Data & Components (Day 1-2)
- [ ] Create `src/data/simulations.ts` (10 sims, type + array).
- [ ] Build `src/components/PhetEmbed.tsx` (iframe wrapper, attribution).
- [ ] Test embed standalone.

### Home Page (Day 2)
- [ ] Update `src/app/page.tsx`: Grid cards, Link to /sim/[slug].
- [ ] Add Tailwind: Cards hover, responsive grid.
- [ ] Thumbnails: `<Image src={`https://phet.colorado.edu/sims/html/${slug}/assets/${slug}-128.png`} />`.

### Dynamic Page (Day 3)
- [ ] Add `src/app/sim/[slug]/page.tsx`: Find sim, PhetEmbed, notFound(), generateStaticParams.
- [ ] Back link, title/category header.

### Polish & Search (Day 4)
- [ ] Home: Search input → filter simulations (useState).
- [ ] Category tabs/filter (optional).
- [ ] Mobile: Test responsive (Chrome devtools).
- [ ] Accessibility: alt texts, aria-labels.

### Deploy & Test (Day 5)
- [ ] `npm run build` → fix errors.
- [ ] Commit/PR: feat(sprint1): implement PhET PoC MVP.
- [ ] Deploy Vercel: vercel --prod.
- [ ] Test: 3 browsers, mobile, embeds load.
- [ ] Client demo/handover.

## Dependencies/Blockers
- PhET embed URLs stable.
- No backend needed.

## Success Metrics
- 10 sims working.
- <2s page loads.
- 100% Lighthouse mobile score.

## Key Decisions

- **Single Stack**: Pure Next.js—no Laravel until Sprint 5+ (use Server Actions + BaaS: Clerk/Supabase/Auth.js).
- **PoC Focus**: Demo-ready frontend (grid, embeds, search/thumbnails core).
- **Balanced Scope**: 27pts, Grok-approved—not over-engineered (category tabs optional).

## Retrospective Items
- What went well?
- Improvements for Sprint 2 (auth + favorites)?

*Generated from blueprint-v1. Sprint 1: $(date)*
