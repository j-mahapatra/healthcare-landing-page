export default function Hero() {
  return (
    <div className='flex flex-col sm:flex-row p-12 mb-36 justify-center sm:justify-start'>
      <div className='flexCenter flex-col sm:items-start p-5 w-full sm:w-2/3'>
        <p className='text-white text-6xl sm:text-7xl text-center sm:text-left'>
          live life,
        </p>
        <p className='text-6xl sm:text-7xl textGradient text-center sm:text-left'>
          pain free
        </p>
        <p className='text-primary text-center sm:text-left my-8'>
          60+ Expert Physiotherapists for 250+ Conditions
        </p>
        <a
          href='#booking'
          className='flex w-fit box-border p-3 my-8 text-white hover:bg-primary hover:text-secondary transition-all border border-primary rounded-full'
        >
          Book an appointment
        </a>
      </div>
      <div className='relative flexCenter w-fit aspect-w-16 aspect-h-9'>
        <img
          src='doctor-image.png'
          alt='Hero Image'
          className='w-full z-10'
          loading='lazy'
        />
        <div className='absolute h-full w-full backgroundGradient' />
      </div>
    </div>
  );
}
