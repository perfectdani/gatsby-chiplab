import React from 'react';
import Testimonial from 'src/components/Testimonial';

const CustomerSay = () => {
  return (
    <section className='bg-gray-100 py-10'>
      <div className='layout text-center'>
        <h5 className='font-bold text-green-500 text-lg tracking-widest'>
          TESTIMONIAL
        </h5>
        <h2>What our client say about us</h2>

        <div className='mt-10 text-left'>
          <Testimonial />
        </div>
      </div>
    </section>
  );
};

export default CustomerSay;
