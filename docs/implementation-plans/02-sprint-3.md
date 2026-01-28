# Sprint 3 Implementation Plan: Auth & User Features

## Sprint Overview
**Duration**: 1 week.  
**Goal**: Add user auth/favorites (pure Next.js + Clerk)—extend PoC to MVP.  
**DoD**: Live Vercel, login/fav working, lint/types/tests pass.  
**Decisions**: Clerk (fast UI/free tier); no Laravel.  
**Velocity**: 25-35 pts.

## User Stories
1. **Auth Flow** (10pts)
   - AC: Sign up/login (email/social), logout, protected favs.

2. **Profile** (6pts)
   - AC: View/edit name/avatar/school.

3. **Favorites** (8pts)
   - AC: Heart sim cards → save/load (DB), fav-only view.

4. **Recent Sims** (4pts)
   - AC: LocalStorage 'Continue' list.

5. **UI Polish** (5pts)
   - AC: Loading skeletons, advanced search (fuse.js), PWA manifest.

**Total**: 33pts.

## Tasks
### Prep (Day 1)
- git checkout -b sprint-3
- npm i @supabase/supabase-js @supabase/ssr @supabase/auth-helpers-nextjs fuse.js
- npm i -D vitest @testing-library/react jsdom @vitest/ui
- npx shadcn@latest init && npx shadcn@latest add button card dialog badge avatar
- Supabase: Dashboard project → SQL tables (profiles/user_favs), RLS policies.
- Lint/audit deps verify.

### Auth (Day 1-2)
- Middleware.tsx: createSupabaseMiddleware.
- /sign-in /sign-up /profile pages (Supabase auth).
- Navbar: User avatar/menu (SupabaseUser).

### Profile/Favs (Day 2-3)
- /profile page (SupabaseUser data).
- DB: supabase_user_favs (user_id/sim_slug).
- Heart mutations (Supabase client Server Action).

### Polish (Day 4)
- shadcn components: Profile/favs UI (button/card/dialog).
- fuse.js advanced search (title/desc/keywords).
- Vitest tests: Auth/favs snapshots (`npm test`).
- Loading skeletons (shimmer grid).
- PWA manifest.json (native icons/theme).

### Deploy/Test (Day 5)
- Build/lint.
- Vercel env (SUPABASE_URL/ANON_KEY).
- Test login/fav multi-browser.

## Nice-to-Haves (Future-Consid Integrated)
- **Advanced Search**: fuse.js ✓ Sprint 2.
- **Loading States**: Skeletons ✓
- **PWA**: Manifest ✓

## Dependencies
- Clerk keys (user).
- No new deps ask.

## Metrics
- Favs persist login.
- Lighthouse 95%+.
- <1s loads.

*From Sprint 1 close + future-considerations. $(date)*
