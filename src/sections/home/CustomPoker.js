import React from 'react';

const CustomPoker = () => {
  return (
    <section className='bg-white py-20'>
      <div className='layout'>
        <div className='inline-block justify-between space-y-6 text-center md:flex md:text-left'>
          <div className='space-y-6 w-full md:w-5/12'>
            <h5 className='text-green-700 tracking-widest'>
              Ordering Custom Poker Chips
            </h5>
            <h1>Free shipping, design online, fast turnaround.</h1>
            <p>
              We aim to be easiest and fastest way to buy casino grade custom
              poker chips in the world. All of our chips are made by us from the
              finest materials right here in the United States. Whether you need
              25 chips or 500,000 chips, we can help. Print runs start at $25.
              Samples are always free.
            </p>
          </div>
          <iframe
            className='h-80 w-full md:w-6/12'
            src='https://www.youtube.com/embed/nKzKJT32UWc'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default CustomPoker;
