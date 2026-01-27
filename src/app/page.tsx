'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { simulations } from '@/data/simulations';

export default function Home() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = Array.from(new Set(simulations.map((sim) => sim.category))).sort() as string[];
  const filteredSims = simulations.filter((sim) =>
    (activeCategory === 'All' || sim.category === activeCategory) &&
    (sim.title.toLowerCase().includes(query.toLowerCase()) || sim.category.toLowerCase().includes(query.toLowerCase()))
  );

  const thumbUrl = (slug: string, version?: string) => `https://phet.colorado.edu/sims/html/${slug}/${version ?? 'latest'}/${slug}-128.png`;

  return (
    <main className='min-h-screen bg-gray-50 px-4 py-12'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-4xl font-bold text-center mb-4'>PhET Simulations Collection</h1>
        <p className='text-center text-gray-600 mb-12 max-w-2xl mx-auto'>
          Explore interactive science and math simulations from PhET, University of Colorado Boulder.
        </p>

        <div className='mb-8 flex flex-wrap gap-2 justify-center'>
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === 'All'
                ? 'bg-blue-500 text-white shadow-md'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className='mb-8'>
          <input
            type='text'
            placeholder='Search simulations by title or category...'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className='w-full max-w-md mx-auto block px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
          />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {filteredSims.map((sim) => (
            <Link
              key={sim.slug}
              href={`/sim/${sim.slug}`}
              className='block bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden group'
            >
              <div className='p-6'>
                <Image
                  src={thumbUrl(sim.slug, sim.version)}
                  alt={`${sim.title} thumbnail`}
                  width={128}
                  height={128}
                  className='w-full h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform'
                />
                <h2 className='text-xl font-semibold mb-2'>{sim.title}</h2>
                <p className='text-sm text-gray-500'>{sim.category}</p>
              </div>
            </Link>
          ))}
        </div>

        {filteredSims.length === 0 && query && (
          <p className='text-center text-gray-500 mt-8'>No simulations match &quot;{query}&quot;. Try another search.</p>
        )}
      </div>
    </main>
  );
}
