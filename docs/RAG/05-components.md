# Component Reference

## Current Components (Sprint 1)
### RootLayout (src/app/layout.tsx)
- Props: Readonly<{ children: React.ReactNode }>
- Features: Geist fonts, dark mode, metadata.

### Home (src/app/page.tsx) `'use client'`
- Features: Sim grid (responsive 1-4 cols), search/filter, category tabs, thumbnails/hover.
- State: query/activeCategory.

### SimPage (src/app/sim/[slug]/page.tsx) `async`
- Features: Embed iframe, dynamic metadata/SSG, notFound, back link.

### PhetEmbed (src/components/PhetEmbed.tsx)
- Props: url/title.
- Features: Responsive (60.43% ratio), attribution link.

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