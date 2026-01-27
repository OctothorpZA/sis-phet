export interface Simulation {
  readonly slug: string;
  readonly version?: string;
  readonly title: string;
  readonly category: string;
  readonly embedUrl: string;
  readonly thumbnail?: string;
}

export const simulations: readonly Simulation[] = [
  {
    slug: 'forces-and-motion-basics',
    version: '2.6.1',
    title: 'Forces and Motion: Basics',
    category: 'Physics',
    embedUrl: 'https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_en.html',
  },
  {
    slug: 'states-of-matter-basics',
    version: '1.2.21',
    title: 'States of Matter: Basics',
    category: 'Chemistry',
    embedUrl: 'https://phet.colorado.edu/sims/html/states-of-matter-basics/latest/states-of-matter-basics_en.html',
  },
  {
    slug: 'circuit-construction-kit-ac',
    version: '1.0.20',
    title: 'Circuit Construction Kit: AC',
    category: 'Physics',
    embedUrl: 'https://phet.colorado.edu/sims/html/circuit-construction-kit-ac/latest/circuit-construction-kit-ac_en.html',
  },
  {
    slug: 'circuit-construction-kit-dc',
    version: '1.4.2',
    title: 'Circuit Construction Kit: DC',
    category: 'Physics',
    embedUrl: 'https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_en.html',
  },
  {
    slug: 'acid-base-solutions',
    version: '1.3.12',
    title: 'Acid-Base Solutions',
    category: 'Chemistry',
    embedUrl: 'https://phet.colorado.edu/sims/html/acid-base-solutions/latest/acid-base-solutions_en.html',
  },
  {
    slug: 'build-an-atom',
    version: '1.8.3',
    title: 'Build an Atom',
    category: 'Chemistry',
    embedUrl: 'https://phet.colorado.edu/sims/html/build-an-atom/latest/build-an-atom_en.html',
  },
  {
    slug: 'balancing-act',
    version: '1.3.4',
    title: 'Balancing Act',
    category: 'Physics',
    embedUrl: 'https://phet.colorado.edu/sims/html/balancing-act/latest/balancing-act_en.html',
  },
  {
    slug: 'molecule-polarity',
    version: '1.3.13',
    title: 'Molecule Polarity',
    category: 'Chemistry',
    embedUrl: 'https://phet.colorado.edu/sims/html/molecule-polarity/latest/molecule-polarity_en.html',
  },
  {
    slug: 'gravity-and-orbits',
    version: '1.6.25',
    title: 'Gravity and Orbits',
    category: 'Earth & Space',
    embedUrl: 'https://phet.colorado.edu/sims/html/gravity-and-orbits/latest/gravity-and-orbits_en.html',
  },
  {
    slug: 'natural-selection',
    version: '1.5.12',
    title: 'Natural Selection',
    category: 'Biology',
    embedUrl: 'https://phet.colorado.edu/sims/html/natural-selection/latest/natural-selection_en.html',
  },
  {
    slug: 'area-builder',
    version: '1.1.36',
    title: 'Area Builder',
    category: 'Math',
    embedUrl: 'https://phet.colorado.edu/sims/html/area-builder/latest/area-builder_en.html',
  },
];
