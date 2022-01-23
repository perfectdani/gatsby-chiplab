import React from 'react';
import Button from 'src/components/button/Button';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Material1Img from '/src/images/material-1.jpeg';
import Material2Img from '/src/images/material-2.jpeg';
import Material3Img from '/src/images/material-3.jpeg';

const Material = () => {
  return (
    <section className='bg-gray-100 py-10'>
      <div className='layout space-y-10'>
        <div className='text-center'>
          <h1>Shop by Material</h1>
          <h4>Choose from Clay Composite, Clay, and Ceramic Poker Chips</h4>
        </div>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          grabCursor={true}
          spaceBetween={30}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 40,
              centeredSlides: true,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 100,
              centeredSlides: true,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 50,
              centeredSlides: false,
            },
            860: {
              slidesPerView: 3,
              spaceBetween: 50,
              centeredSlides: false,
            },
          }}
        >
          <SwiperSlide>
            <div className='bg-white rounded-xl w-64 md:w-full hover:shadow-xl'>
              <img
                className='object-cover rounded-t-xl w-full'
                src={Material1Img}
                alt=''
              />
              <div className='px-6 py-5 space-y-4 text-center'>
                <h4>Composite Poker Chips</h4>
                <p className='text-gray-600'>
                  Our original and most popular poker chips. Both faces are
                  customizable. Available various styles. Direct-to-chip
                  printing.
                </p>
                <ul>
                  <li className='text-gray-600'>
                    25 chips for{' '}
                    <strong className='font-bold text-gray-800'>$25.00</strong>
                  </li>
                  <li className='text-gray-600'>
                    100 chips for{' '}
                    <strong className='font-bold text-gray-800'>$89</strong>
                  </li>
                  <li className='text-gray-600'>
                    200 chips for{' '}
                    <strong className='font-bold text-gray-800'>$158...</strong>
                  </li>
                </ul>
                <Button variant='outline' className='px-6 text-green-600'>
                  Customize
                </Button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-white rounded-xl w-64 md:w-full hover:shadow-xl'>
              <img
                className='object-cover rounded-t-xl w-full'
                src={Material2Img}
                alt=''
              />
              <div className='px-6 py-5 space-y-4 text-center'>
                <h4>Clay Poker Chips</h4>
                <p className='text-gray-600'>
                  Slightly heavier than our Composite chips. Feel softer and
                  stack better, but smaller printable area than Composites.
                </p>
                <ul>
                  <li className='text-gray-600'>
                    25 chips for{' '}
                    <strong className='font-bold text-gray-800'>$28.50</strong>
                  </li>
                  <li className='text-gray-600'>
                    100 chips for{' '}
                    <strong className='font-bold text-gray-800'>$104</strong>
                  </li>
                  <li className='text-gray-600'>
                    200 chips for{' '}
                    <strong className='font-bold text-gray-800'>$188...</strong>
                  </li>
                </ul>
                <Button variant='outline' className='px-6 text-green-600'>
                  Customize
                </Button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-white rounded-xl w-64 md:w-full hover:shadow-xl'>
              <img
                className='object-cover opacity-25 rounded-t-xl w-full'
                src={Material3Img}
                alt=''
              />
              <div className='opacity-25 px-8 py-5 space-y-4 text-center'>
                <h4>Ceramic Poker Chips</h4>
                <p className='text-gray-600'>
                  Both faces and the rolling edge are customizable. Lighter
                  chip, but they stack well and play well.
                </p>
                <ul>
                  <li className='text-gray-600'>
                    25 chips for{' '}
                    <strong className='font-bold text-gray-800'>$29.75</strong>
                  </li>
                  <li className='text-gray-600'>
                    100 chips for{' '}
                    <strong className='font-bold text-gray-800'>$109</strong>
                  </li>
                  <li className='text-gray-600'>
                    200 chips for{' '}
                    <strong className='font-bold text-gray-800'>$198...</strong>
                  </li>
                </ul>
                <Button variant='outline' className='px-6 text-green-600'>
                  Customize
                </Button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Material;
