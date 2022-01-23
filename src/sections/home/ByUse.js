import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { byUses } from '../../data/by-use';

const ByUse = () => {
  return (
    <section className='bg-gray-50 py-10'>
      <div className='layout space-y-10'>
        <div className='text-center'>
          <h1>Shop by Use</h1>
          <h4>Browse templates specific to intended use for our poker chips</h4>
        </div>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {byUses.map((item) => (
            <SwiperSlide key={item.id}>
              <div className='bg-white rounded-xl w-12/12 hover:shadow-xl'>
                <img
                  className='bg-center h-64 mx-auto object-cover rounded-t-xl w-full'
                  src={item.image}
                  alt=''
                />
                <div className='px-6 py-5 space-y-4 text-center'>
                  <h4>{item.title}</h4>
                  <a
                    href='#'
                    className='inline-flex items-center text-green-600'
                  >
                    View All <BsArrowRight className='ml-2' />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ByUse;
