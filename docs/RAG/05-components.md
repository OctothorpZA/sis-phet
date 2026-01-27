# Component Reference

## Current Components
### RootLayout (src/app/layout.tsx)
- Props: { children: React.ReactNode }
- Features: Geist fonts, viewport, Tailwind, body classes (dark mode)
- HTML structure: <html><body>{children}</body></html>

### Home Page (src/app/page.tsx)
- Renders: Hero with Next.js logo + Vercel link
- Tailwind: Flex layout, gradients, buttons

## Patterns for New Components
- PascalCase, FC<Props>
- Typed props: interface Props { ... }
- Server Components default (use 'use client' for interactivity)
- Accessibility: aria-labels, semantic HTML

Example New Component:
```tsx
'use client';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export function Button({ children, variant = 'primary' }: ButtonProps) {
  return (
    &lt;button className={`px-4 py-2 rounded ${variant === 'primary' ? 'bg-blue-500' : 'bg-gray-500'} text-white`}&gt;
      {children}
    &lt;/button&gt;
  );
}
```

## Optimization
- next/image for images
- Suspense for loading states

Last updated: $(date)