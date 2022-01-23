import React from 'react';

import Button from '/src/components/button/Button';
import ChipLogoBannder from '/src/images/chip-banner.jpeg';

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${ChipLogoBannder})`,
        height: '420px',
      }}
      className='bg-right mb-20 py-6 md:bg-center md:mb-0 md:py-20 lg:mb-0'
    >
      <div className='layout'>
        <div className='space-y-5 text-center text-gray-800 md:space-y-10 md:text-left md:text-white'>
          <div className='bg-white mt-48 mx-auto px-4 py-6 shadow-xl space-y-6 w-full sm:p-8 md:bg-transparent md:mt-0 md:p-0 md:shadow-none md:space-y-8 md:w-full'>
            <div className='space-y-2 md:space-y-4'>
              <h1 className='font-normal text-3xl tracking-wider w-full sm:text-4xl md:text-6xl md:w-7/12'>
                CUSTOM <br className='block md:hidden lg:block' />{' '}
                <strong>POKER</strong> CHIPS
              </h1>
              <p className='mx-auto w-11/12 md:mx-0 md:w-6/12'>
                Easy online ordering, various materials for every budget 1-4 day
                turnaround, designed and printed in the U.S.A
              </p>
            </div>
            <div className='space-y-2 sm:flex-row md:flex md:space-x-4 md:space-y-0'>
              <div>
                <Button className='px-6 py-3 rounded-full text-white'>
                  Show Custom Poker Chips
                </Button>
              </div>
              <div>
                <Button
                  variant='outline'
                  className='border border-gray-800 px-6 py-3 rounded-full text-gray-800 md:border-white md:text-white hover:bg-white hover:text-gray-800'
                >
                  Get Free Samples
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
