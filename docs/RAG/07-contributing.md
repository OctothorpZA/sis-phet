# Contributing Guide

## Workflow
1. Branch: `feat/new-sim`, `fix/bug-123`
2. Develop: Follow AGENTS.md conventions
3. Lint/Typecheck: `npm run lint &amp;&amp; npx tsc --noEmit`
4. Build: `npm run build`
5. Commit: Conventional Commits (`feat: add sim control`)
6. PR: Describe changes, link issues

## Code Review Checklist
- [ ] Lints pass
- [ ] Types pass
- [ ] Build passes
- [ ] Responsive on mobile/desktop
- [ ] Accessibility (screen reader)
- [ ] Performance (no console.time warnings)

## Adding Features
- New page: `src/app/simulations/page.tsx`
- API: `src/app/api/sim/route.ts`
- Tests: Add Vitest, `npm i -D vitest`

See docs/ for details.

Last updated: $(date)