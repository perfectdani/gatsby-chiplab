import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import Testimonial from 'src/components/Testimonial';

const CustomerSay = () => {
  return (
    <section className='bg-gray-100 py-10'>
      <div className='text-center'>
        <h1>What Our Customers Say</h1>
        <h4>4.7 out of 5 Stars on Our Reviews</h4>
        <div className='py-10 text-center'>
          <Testimonial />
          <a href='#' className='inline-flex items-center text-green-500'>
            View All 5402 Reviews <BsArrowRight className='ml-2' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CustomerSay;
