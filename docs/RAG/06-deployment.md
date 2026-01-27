# Deployment & CI/CD

## Vercel (Recommended)
1. Push to GitHub
2. Connect repo in Vercel dashboard
3. Auto-deploys on push

## Environment Variables
- NEXT_PUBLIC_*: Client-side
- Server-only: No prefix

## Custom Builds
- next.config.ts: Experimental features
- Output: `next build &amp;&amp; next export` for static

## Monitoring
- Vercel Analytics
- Sentry for errors (add later)

## Docker (Optional)
```
# Dockerfile
FROM node:20-alpine
COPY . .
RUN npm ci
RUN npm run build
CMD [&quot;npm&quot;, &quot;start&quot;]
```

Last updated: $(date)