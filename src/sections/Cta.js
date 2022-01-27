import React from 'react';
import BannerFooter from 'src/images/block-1.jpeg';

export default function Cta() {
  return (
    <div
      className='bg-no-repeat px-14 py-10'
      style={{ backgroundImage: `url(${BannerFooter})` }}
    >
      <div className='bg-white/80 max-w-lg mx-auto px-4 py-10 rounded-lg text-center sm:px-6 lg:px-8'>
        <h2 className='font-extrabold text-3xl text-gray-700 tracking-tight sm:text-4xl'>
          <span className='block'>Try Before You Buy</span>
        </h2>
        <p className='mt-4'>
          Easy online ordering, various materials for every budget 1-4 day
          turnaround, made in the U.S.A
        </p>
        <div className='flex justify-center mt-8'>
          <div className='inline-flex rounded-full'>
            <a
              href='#'
              className='bg-green-600 font-medium inline-flex items-center justify-center px-6 py-3 rounded-full text-base text-white hover:bg-green-700'
            >
              Get Free Sample Pack
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
