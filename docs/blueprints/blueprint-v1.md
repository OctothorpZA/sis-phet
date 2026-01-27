# PhET Simulations PoC Blueprint - v1

## Overview
Blueprint for a Next.js Proof-of-Concept (PoC) website embedding PhET Interactive Simulations (https://phet.colorado.edu). 
- **Embed via iframes** from official PhET servers (CC BY 4.0, attribution required).
- ~170 HTML5 sims; start with 10 popular.
- Features: Home grid, dynamic /sim/[slug], responsive embeds, Tailwind UI.
- Future: Laravel backend for users/tracking.

## Project Goals (PoC)
- Home: Grid of sim cards (title, category, preview).
- Detail: Embed iframe (responsive 834x504 ratio).
- Attribution footer.
- Search/filter optional.
- No backend/DB (hardcode list).

## Setup (Verified)
```
npx create-next-app@latest sis-phet-dev --typescript --eslint --tailwind --app --src-dir --import-alias "@/*" --react-compiler
cd sis-phet-dev
npm run dev
```
- Matches: TS, ESLint, Tailwind, src/, App Router, @/*, React Compiler.

## File Structure
```
src/
├── data/
│   └── simulations.ts  # Sim list (type + array)
├── components/
│   └── PhetEmbed.tsx   # Responsive iframe
├── app/
│   ├── page.tsx        # Home grid
│   ├── sim/
│   │   └── [slug]/
│   │       └── page.tsx # Dynamic embed
│   ├── globals.css     # Tailwind
│   └── layout.tsx      # Fonts/providers
```

## Core Data: src/data/simulations.ts
```tsx
export type Simulation = {
  slug: string;
  title: string;
  category: string;
  description?: string;
  embedUrl: string;  // https://phet.colorado.edu/sims/html/[slug]/latest/[slug]_en.html
};

export const simulations: Simulation[] = [
  { slug: "forces-and-motion-basics", title: "Forces and Motion: Basics", category: "Physics", embedUrl: "https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_en.html" },
  { slug: "states-of-matter-basics", title: "States of Matter: Basics", category: "Chemistry", embedUrl: "https://phet.colorado.edu/sims/html/states-of-matter-basics/latest/states-of-matter-basics_en.html" },
  { slug: "circuit-construction-kit-basics", title: "Circuit Construction Kit: Basics", category: "Physics", embedUrl: "https://phet.colorado.edu/sims/html/circuit-construction-kit-basics/latest/circuit-construction-kit-basics_en.html" },
  { slug: "acid-base-solutions", title: "Acid-Base Solutions", category: "Chemistry", embedUrl: "https://phet.colorado.edu/sims/html/acid-base-solutions/latest/acid-base-solutions_en.html" },
  { slug: "build-an-atom", title: "Build an Atom", category: "Chemistry", embedUrl: "https://phet.colorado.edu/sims/html/build-an-atom/latest/build-an-atom_en.html" },
  { slug: "balancing-act", title: "Balancing Act", category: "Physics", embedUrl: "https://phet.colorado.edu/sims/html/balancing-act/latest/balancing-act_en.html" },
  { slug: "molecule-polarity", title: "Molecule Polarity", category: "Chemistry", embedUrl: "https://phet.colorado.edu/sims/html/molecule-polarity/latest/molecule-polarity_en.html" },
  { slug: "gravity-and-orbits", title: "Gravity and Orbits", category: "Earth & Space", embedUrl: "https://phet.colorado.edu/sims/html/gravity-and-orbits/latest/gravity-and-orbits_en.html" },
  { slug: "natural-selection", title: "Natural Selection", category: "Biology", embedUrl: "https://phet.colorado.edu/sims/html/natural-selection/latest/natural-selection_en.html" },
  { slug: "area-builder", title: "Area Builder", category: "Math", embedUrl: "https://phet.colorado.edu/sims/html/area-builder/latest/area-builder_en.html" },
  // Add more: Browse https://phet.colorado.edu/en/simulations?type=html
];
```

## Embed Component: src/components/PhetEmbed.tsx
```tsx
"use client";

interface PhetEmbedProps { url: string; title: string; }

export default function PhetEmbed({ url, title }: PhetEmbedProps) {
  return (
    <div className="w-full">
      <div className="relative w-full pb-[60.43%] overflow-hidden rounded-lg shadow-lg"> {/* 834/504 ratio */}
        <iframe src={url} title={title} className="absolute inset-0 w-full h-full border-0" allowFullScreen loading="lazy" />
      </div>
      <p className="mt-3 text-center text-sm text-gray-600">
        Simulation by <a href="https://phet.colorado.edu" className="underline hover:text-blue-600">PhET Interactive Simulations</a>, University of Colorado Boulder.
      </p>
    </div>
  );
}
```

## Home: src/app/page.tsx
```tsx
import Link from "next/link";
import { simulations } from "@/data/simulations";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">PhET Simulations</h1>
        <p className="text-center text-gray-600 mb-12">Interactive science & math sims from University of Colorado Boulder.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {simulations.map((sim) => (
            <Link key={sim.slug} href={`/sim/${sim.slug}`} className="block bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{sim.title}</h2>
                <p className="text-sm text-gray-500">{sim.category}</p>
                <div className="bg-gray-100 h-32 mt-4 flex items-center justify-center rounded text-gray-400">Preview</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
```

## Sim Page: src/app/sim/[slug]/page.tsx
```tsx
import { simulations } from "@/data/simulations";
import PhetEmbed from "@/components/PhetEmbed";
import { notFound } from "next/navigation";
import Link from "next/link";

interface Props { params: { slug: string }; }

export default function SimPage({ params }: Props) {
  const sim = simulations.find(s => s.slug === params.slug);
  if (!sim) notFound();

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">&larr; All Simulations</Link>
        <h1 className="text-3xl font-bold mb-2">{sim.title}</h1>
        <p className="text-gray-600 mb-8 text-lg">{sim.category}</p>
        <PhetEmbed url={sim.embedUrl} title={sim.title} />
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return simulations.map(sim => ({ slug: sim.slug }));
}
```

## Polish / Next
- **Thumbnails**: `<img src="https://phet.colorado.edu/sims/html/${sim.slug}/assets/${sim.slug}-128.png" />`
- **Search**: Add input + filter simulations.
- **Categories**: Tabs/grid filter.
- **Future Laravel**: DB for sims/users, Inertia React frontend.

## Deployment
`npm run build && vercel deploy`

*Blueprint v1 - Ready to implement. Last updated: $(date)*
