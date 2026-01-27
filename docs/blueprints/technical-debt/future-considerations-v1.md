# Future Considerations v1 - Post-Sprint 1

## Nice-to-Haves (Sprint 1 Optional / Sprint 2)
From Sprint 1 plan & Grok review:
- **Category Tabs/Filter**: Dropdown/tabs for Physics/Chemistry/etc. (low effort, high UX).
- **Advanced Search**: By title + description/keywords (fuse.js client-side).
- **Card Animations**: Hover scale/shadow, smooth transitions.
- **PWA Support**: Manifest + service worker for offline sim list (embeds online-only).
- **Loading States**: Skeleton cards, embed lazy-load feedback.

## Sprint 2 Priorities (Pure Next.js)
- **Auth**: Clerk (recommended: fast UI/dashboard) or Supabase/Auth.js.
  - Login/signup, profile (name/avatar/school).
  - Protected routes (favorites).
- **Favorites**: Heart icon → DB save/load.
- **Recent Sims**: "Continue where left off" (localStorage + sync).

## Technical Debt / Polish
- **Performance**: Image optimization (next/image all thumbs), bundle analysis.
- **A11y Deep**: Keyboard nav sim cards, iframe focus management.
- **Mobile Polish**: Touch gestures? Swipe between sims?
- **SEO**: Dynamic metadata per sim (title/desc/og:image).
- **Error Handling**: Embed fail → fallback screenshot/link.

## Analytics/Tracking (Sprint 3)
- View logs: Sim opens, time spent (visibility API).
- PostHog/Umami: Free, embed-friendly.

## Long-Term (Sprint 5+)
- Multi-lang: PhET _es.html etc. (locale param).
- Custom Branding: Override PhET UI? (iframe limits).
- Offline: Self-host sim zips? (legal/maintenance heavy).
- Admin: Sim curation DB, upload custom.

## Providers Comparison (Sprint 2 Auth)
| Provider | Pros | Cons | Free Tier |
|----------|------|------|-----------|
| Clerk | UI components, dashboard, social | $ | 10k MAU |
| Supabase | DB+Auth bundle, Postgres | Learning curve | 50k MAU |
| Auth.js | Free, flexible | Build UI yourself | Unlimited |

**Track Here**: Post-Sprint 1, reprioritize.

*v1 from Sprint 1 review. Updated: $(date)*
