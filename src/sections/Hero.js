import React from 'react';

import ChipLogoBanner from '/src/images/chip-banner.jpeg';

export default function Example() {
  return (
    <div className='bg-white'>
      <main>
        <div className='relative'>
          <div className='relative shadow-xl sm:overflow-hidden'>
            <div className='absolute inset-0'>
              <img
                className='h-full object-cover w-full'
                src={ChipLogoBanner}
                alt='People working on laptops'
              />
            </div>
            <div className='px-4 py-16 relative sm:px-6 sm:py-24 lg:px-8 lg:py-32'>
              <h1 className='font-extrabold text-4xl text-center tracking-tight sm:text-5xl md:text-left lg:text-6xl'>
                <span className='block text-white'>Custom Poker Chips</span>
              </h1>
              <p className='max-w-lg mt-6 mx-auto text-center text-gray-200 text-xl sm:max-w-3xl md:mx-0 md:text-left'>
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className='justify-center max-w-sm mt-10 mx-auto sm:flex sm:max-w-none md:justify-start'>
                <div className='space-y-4 sm:gap-5 sm:grid-cols-2 sm:inline-grid sm:mx-auto sm:space-y-0 md:mx-0'>
                  <a
                    href='#'
                    className='bg-green-500 border border-transparent flex font-medium items-center justify-center px-4 py-3 rounded-full shadow-sm text-base text-white sm:px-8 hover:bg-green-600'
                  >
                    Shop Custom Poker Chips
                  </a>
                  <a
                    href='#'
                    className='bg-opacity-60 border border-white flex font-medium items-center justify-center px-4 py-3 rounded-full shadow-sm text-base text-white sm:px-8 hover:bg-opacity-70'
                  >
                    Get Free Samples
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
