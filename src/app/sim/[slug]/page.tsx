import Link from 'next/link';
import { notFound } from 'next/navigation';
import PhetEmbed from '@/components/PhetEmbed';
import { simulations } from '@/data/simulations';
import type { Metadata } from 'next';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Readonly<Props>): Promise<Metadata> {
  const { slug } = await params;
  const sim = simulations.find((s) => s.slug === slug);
  if (!sim) {
    return { title: 'Simulation Not Found' };
  }
  return {
    title: sim.title,
    description: `Interactive ${sim.category.toLowerCase()} simulation: ${sim.title}`,
  };
}

export async function generateStaticParams() {
  return simulations.map((sim) => ({ slug: sim.slug }));
}

export default async function SimPage({ params }: Readonly<Props>) {
  const { slug } = await params;
  const sim = simulations.find((s) => s.slug === slug);

  if (!sim) {
    notFound();
  }

  return (
    <main className='min-h-screen bg-gray-50 px-4 py-12'>
      <div className='max-w-6xl mx-auto'>
        <Link
          href='/'
          className='inline-flex items-center gap-1 text-blue-600 hover:underline mb-6 text-lg'
        >
          ← Back to Simulations
        </Link>
        <header className='mb-8'>
          <h1 className='text-3xl font-bold mb-2'>{sim.title}</h1>
          <p className='text-xl text-gray-600'>{sim.category}</p>
        </header>
        <PhetEmbed url={sim.embedUrl} title={sim.title} />
      </div>
    </main>
  );
}
