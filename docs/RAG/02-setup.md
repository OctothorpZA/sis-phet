# Setup Guide

## Prerequisites
- Node.js 20+
- npm/yarn/pnpm

## Installation
```
git clone <repo>
cd sis-phet-dev
npm install
```

## Development
```
npm run dev
```
Open http://localhost:3000

## Build & Deploy
```
npm run build
npm run start
```
Deploy to Vercel/Netlify (Vercel recommended for Next.js).

## Commands
See AGENTS.md for full list (lint, typecheck).

## Environment
No .env yet. Add for API keys:
```
NEXT_PUBLIC_API_URL=...
```

## Troubleshooting
- Cache issues: `rm -rf .next node_modules/.cache`
- TS errors: `npx tsc --noEmit`
- Lint: `npm run lint -- --fix`

Last updated: $(date)