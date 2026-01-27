export interface Simulation {
  readonly slug: string;
  readonly version: string;
  readonly title: string;
  readonly category: string;
  readonly embedUrl: string;
  readonly thumbnail?: string;
}

export const simulations: readonly Simulation[] = [
  {
    slug: 'forces-and-motion-basics',
    version: '1.0.0',
    title: 'Forces and Motion: Basics',
    category: 'Physics',
    embedUrl: 'https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_en.html',
  },
  {
    slug: 'states-of-matter-basics',
    version: '1.0.0',
    title: 'States of Matter: Basics',
    category: 'Chemistry',
    embedUrl: 'https://phet.colorado.edu/sims/html/states-of-matter-basics/latest/states-of-matter-basics_en.html',
  },
  {
    slug: 'circuit-construction-kit-basics',
    version: '1.0.0',
    title: 'Circuit Construction Kit: Basics',
    category: 'Physics',
    embedUrl: 'https://phet.colorado.edu/sims/html/circuit-construction-kit-basics/latest/circuit-construction-kit-basics_en.html',
  },
  {
    slug: 'acid-base-solutions',
    version: '1.0.0',
    title: 'Acid-Base Solutions',
    category: 'Chemistry',
    embedUrl: 'https://phet.colorado.edu/sims/html/acid-base-solutions/latest/acid-base-solutions_en.html',
  },
  {
    slug: 'build-an-atom',
    version: '1.0.0',
    title: 'Build an Atom',
    category: 'Chemistry',
    embedUrl: 'https://phet.colorado.edu/sims/html/build-an-atom/latest/build-an-atom_en.html',
  },
  {
    slug: 'balancing-act',
    version: '1.0.0',
    title: 'Balancing Act',
    category: 'Physics',
    embedUrl: 'https://phet.colorado.edu/sims/html/balancing-act/latest/balancing-act_en.html',
  },
  {
    slug: 'molecule-polarity',
    version: '1.0.0',
    title: 'Molecule Polarity',
    category: 'Chemistry',
    embedUrl: 'https://phet.colorado.edu/sims/html/molecule-polarity/latest/molecule-polarity_en.html',
  },
  {
    slug: 'gravity-and-orbits',
    version: '1.0.0',
    title: 'Gravity and Orbits',
    category: 'Earth & Space',
    embedUrl: 'https://phet.colorado.edu/sims/html/gravity-and-orbits/latest/gravity-and-orbits_en.html',
  },
  {
    slug: 'natural-selection',
    version: '1.0.0',
    title: 'Natural Selection',
    category: 'Biology',
    embedUrl: 'https://phet.colorado.edu/sims/html/natural-selection/latest/natural-selection_en.html',
  },
  {
    slug: 'area-builder',
    version: '1.0.0',
    title: 'Area Builder',
    category: 'Math',
    embedUrl: 'https://phet.colorado.edu/sims/html/area-builder/latest/area-builder_en.html',
  },
];
