

interface PhetEmbedProps {
  url: string;
  title: string;
}

export default function PhetEmbed({ url, title }: Readonly<PhetEmbedProps>) {
  return (
    <div className='w-full'>
      <div className='relative w-full pb-[60.43%] overflow-hidden rounded-lg shadow-lg'> {/* 834/504 ratio */}
        <iframe
          src={url}
          title={title}
          className='absolute inset-0 w-full h-full border-0'
          allowFullScreen
          loading='lazy'
        />
      </div>
      <p className='mt-3 text-center text-sm text-gray-600'>
        Simulation by{' '}
        <a href='https://phet.colorado.edu' className='underline hover:text-blue-600'>
          PhET Interactive Simulations
        </a>
        , University of Colorado Boulder.
      </p>
    </div>
  );
}
