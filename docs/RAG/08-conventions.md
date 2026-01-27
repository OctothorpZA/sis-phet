# Conventions & Best Practices

Cross-reference AGENTS.md for agents.

## Key Rules
- **Imports**: Ordered (external first), use @/ aliases
- **Formatting**: Single quotes, semicolons, 2-space indent
- **Types**: No `any`, strict null checks
- **Components**: Functional, typed props
- **Tailwind**: Utility classes, no inline styles
- **Error Handling**: try/catch, Next.js error.tsx

## Performance Tips
- Server Components &gt; Client
- Streaming with Suspense
- Image optimization
- Memoization (React Compiler helps)

## Security
- Validate inputs (Zod)
- No secrets in code
- CSP headers in next.config

Last updated: $(date)