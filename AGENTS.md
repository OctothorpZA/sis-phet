# AGENTS.md

This file documents conventions, commands, and guidelines for agentic coding agents (like opencode)
working in this repository. Follow these strictly to maintain consistency.

## Project Overview (~10 LOC summary)
- **Type**: Next.js 16.1.5 App Router project with React 19.2.3, TypeScript, Tailwind CSS v4.
- **Structure**:
  ```
  src/
  └── app/          # App Router: layout.tsx, page.tsx, loading.tsx, etc.
      ├── globals.css # Tailwind + custom styles
      └── favicon.ico
  public/           # Static assets (images, etc.)
  ```
- **Key Configs**: eslint.config.mjs (Next.js/TS), tsconfig.json (strict TS), next.config.ts (React Compiler).
- **No tests, no Prettier, minimal setup**. Add features following Next.js docs.
- **Deployment**: Vercel optimized (uses next/font, next/image).

## Commands (Run these after changes)
### Development Server
```
npm run dev
```
Starts `next dev` on http://localhost:3000. Hot reload enabled.

### Production Build
```
npm run build
```
Runs `next build`. Outputs to `.next/`. Check for errors.

### Start Production
```
npm run start
```
Runs `next start` for built app.

### Lint (MANDATORY after edits)
```
npm run lint
```
Runs ESLint (full codebase). Flat config via eslint.config.mjs.
- Fixes auto-fixable issues: `npm run lint -- --fix`
- Specific files: `npx eslint src/app/page.tsx`
- **ALWAYS run before committing**.

### Type Check
No npm script. Run:
```
npx tsc --noEmit
```
Enforces strict TS.

### Tests (Not configured)
- No test framework (no Jest/Vitest deps, no test files).
- To add: `npm i -D vitest @testing-library/react jsdom`
- Single test example (future): `npx vitest src/app/page.test.tsx`
- Run all: `npm test` (add script).

### Install Deps
```
npm install
```

### Other Useful
```
npm run lint:fix  # Add if needed: "lint:fix": "next lint --fix"
rm -rf .next node_modules/.cache  # Clean cache
```

## Code Style Guidelines (From ESLint + Next.js/TS defaults)

### Imports (eslint-plugin-import enforced)
- **Order** (mandatory): external > internal > parent > sibling > index.
  ```
  import type { Metadata } from 'next';     // External
  import { GeistSans } from 'next/font/google'; // External
  import Image from 'next/image';           // External
  import './globals.css';                   // Side-effect (bottom)
  ```
- Use **path aliases**: `@/components/Button` → `src/components/Button`.
- No relative deep imports (e.g., avoid `../../../`).
- Group types: `import type { ... }` separate.
- No unused imports (lint error).

### Formatting
- **No Prettier** → Use VSCode/Editor format on save (TS/ESLint).
- Indent: 2 spaces.
- Quotes: **Single quotes** (`'`) in JS/JSX.
- Semicolons: **Required**.
- Trailing commas: `es5` (objects/arrays/functions).
- Line length: 100 chars (typescript-eslint/max-len).
- Arrow functions: Block body for multi-line.

Example:
```tsx
const metadata: Metadata = {
  title: 'App',
  description: 'Next.js App',
};
```

### Naming Conventions
- **Components/Types/Interfaces**: PascalCase (`RootLayout`, `ButtonProps`).
- **Variables/Functions/Props**: camelCase (`currentUser`, `handleClick`).
- **Constants**: UPPER_SNAKE_CASE (rare) or camelCase `const MAX_WIDTH = 1200;`.
- **Files**: kebab-case or PascalCase (`button.tsx`, `UserProfile.tsx`).

### Types & TypeScript (strict: true)
- **No `any`** → Use `unknown`, generics, or specific types.
- Props: `interface Props { children: React.ReactNode; }`
- Functions: `const fn = (arg: string): number => { ... }`
- Null/Undefined: Use `?` optionals, strictNullChecks.
- Enums: Prefer `enum` or union literals (`'pending' | 'success'`).

Example:
```tsx
interface LayoutProps {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<LayoutProps>) {
  return <html>{children}</html>;
}
```

### Components & React
- **Functional components only** (no class).
- JSX: `react-jsx` runtime (no import React).
- Hooks: Follow rules-of-hooks (ESLint).
- Keys in lists: Stable IDs.
- Accessibility: jsx-a11y rules (alt, labels, roles).
- Optimization: `next/image`, `next/font`; React Compiler enabled.

### Tailwind CSS
- Utility classes: `className="flex min-h-screen flex-col ..."`
- Dark mode: `dark:bg-gray-900`
- Custom: Extend in `globals.css` (@tailwind base/components/utilities;).
- No inline styles.

### Error Handling
- **Components**: Use Next.js `error.tsx` boundaries.
- Runtime: `try/catch` → log + user-friendly message.
- API/Async: `await` with try/catch; `Error` constructor.
- Validation: Zod/Yup for forms (add if needed).
- No console.error in prod.

Example:
```tsx
try {
  const data = await fetchData();
} catch (error) {
  console.error('Fetch failed:', error);
  // Show toast/error UI
}
```

### Commits & Git
- Messages: Conventional Commits (`feat: add button`, `fix: lint issues`).
- Pre-commit: Lint + typecheck pass.
- **NEVER commit secrets** (.env, keys).
- Branches: feature/xxx.

## Cursor / Copilot Rules
- None (.cursor/rules/, .cursorrules, .github/copilot-instructions.md absent).
- Follow this AGENTS.md instead.

## Agent Workflow Reminders
1. **Search first**: Use glob/grep to understand context.
2. **Read before edit**: Always `read` files before `edit`.
3. **Mimic patterns**: Copy existing style/imports.
4. **Verify changes**:
   ```
   npm run lint
   npx tsc --noEmit
   npm run build  # For full check
   ```
5. **No new deps** without asking user.
6. **Tests**: Add + run before big changes.
7. **Proactive**: Use Task/explore for complex analysis.

## Additional Conventions
- **Performance**: Core Web Vitals (ESLint); lazy load, suspense.
- **SEO/Metadata**: Export `metadata: Metadata`.
- **Fonts/Images**: Use Next.js optimized.
- **State**: Prefer URLSearchParams/context over localStorage.
- Expand as project grows.

Last updated: $(date)
