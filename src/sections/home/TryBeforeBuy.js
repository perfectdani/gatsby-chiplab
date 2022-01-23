import React from 'react';
import Button from 'src/components/button/Button';
import BannerFooter from 'src/images/block-1.jpeg';

const TryBeforeBuy = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${BannerFooter})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      className='py-20'
    >
      <div
        className='mx-auto px-8 py-10 rounded-xl space-y-6 text-center w-11/12 md:px-14 md:w-5/12'
        style={{ backgroundColor: 'rgba(245, 245, 245, 80%)' }}
      >
        <h1 className='text-xl md:text-3xl'>Try Before You Buy</h1>
        <p className='text-sm md:text-lg'>
          Easy online ordering, various materials for every budget 1-4 day
          turnaround, made in the U.S.A
        </p>
        <Button className='px-6 py-3 rounded-full text-white'>
          Get Free Sample Pack
        </Button>
      </div>
    </section>
  );
};

export default TryBeforeBuy;
