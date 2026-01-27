# Styling Guide

## Tailwind CSS v4
- PostCSS config with @tailwindcss/postcss
- globals.css:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
- Usage: `className=&quot;flex flex-col min-h-screen bg-white dark:bg-black&quot;`

## Themes
- Dark mode: `dark:` prefix (enabled via class)
- Custom tokens: Extend in tailwind.config.ts (none yet)

## Responsive
- sm/md/lg/xl/2xl breakpoints
- Mobile-first

## Components
- Utility-first: No custom components yet
- Future: Headless UI / shadcn/ui for buttons, modals

## Best Practices
- Avoid inline styles
- Extract repeated classes to CSS vars / @apply
- Purge unused: Next.js handles

Example:
```tsx
&lt;div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4 p-6&quot;&gt;
  {/* content */}
&lt;/div&gt;
```

Last updated: $(date)