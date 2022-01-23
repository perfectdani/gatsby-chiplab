import React from 'react';
import Button from 'src/components/button/Button';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { shopStyles } from '../../data/shop-styles';

const Style = () => {
  return (
    <section className='bg-gray-200 py-10'>
      <div className='layout space-y-10'>
        <div className='text-center'>
          <h1>Shop by Style</h1>
          <h4>Choose from various edge pattern styles</h4>
        </div>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 100,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 30,
              centeredSlides: true,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            860: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {shopStyles.map((item) => (
            <SwiperSlide key={item.id}>
              <div className='bg-white rounded-xl hover:shadow-xl'>
                <img
                  className='bg-center h-56 mx-auto object-cover rounded-t-xl'
                  src={item.image}
                  alt=''
                />
                <div className='px-6 py-5 space-y-4 text-center'>
                  <h4>{item.name}</h4>
                  <p className='text-gray-600'>{item.description}</p>
                  <Button variant='outline' className='px-6 text-green-600'>
                    Customize
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Style;
