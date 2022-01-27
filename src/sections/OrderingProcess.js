import React from 'react';

export default function OrderingProcess() {
  return (
    <div className='bg-white overflow-hidden pb-32 pt-16 relative'>
      <div className='relative'>
        <div className='place-items-center lg:gap-24 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:max-w-7xl lg:mx-auto lg:px-8'>
          <div className='max-w-xl mx-auto px-4 sm:px-6 lg:max-w-none lg:mx-0 lg:px-0 lg:py-16'>
            <div>
              <div>
                <h5 className='text-green-500 tracking-widest'>
                  Ordering Custom Poker Chips
                </h5>
              </div>
              <div className='mt-6'>
                <h2 className='font-extrabold text-3xl text-gray-900 tracking-tight'>
                  Free shipping, design online, fast turnaround.
                </h2>
                <p className='mt-4 text-gray-500 text-lg'>
                  We aim to be easiest and fastest way to buy casino grade
                  custom poker chips in the world. All of our chips are made by
                  us from the finest materials right here in the United States.
                  Whether you need 25 chips or 500,000 chips, we can help. Print
                  runs start at $25. Samples are always free.
                </p>
              </div>
            </div>
          </div>
          <div className='mt-12 w-full sm:mt-16 lg:mt-0'>
            <div className=''>
              <iframe
                className='h-72 w-full md:w-12/12'
                src='https://www.youtube.com/embed/nKzKJT32UWc'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
