import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import MaterialCard from '../card/MaterialCard';

const MaterialCarousel = ({ category }) => {
  return (
    <>
      <Swiper
        className='mt-10'
        modules={[Pagination]}
        pagination={{ clickable: true }}
        grabCursor={true}
        breakpoints={{
          400: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          860: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {category.categories &&
          category.categories.map((category) => (
            <SwiperSlide key={category.name}>
              <MaterialCard category={category} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default MaterialCarousel;
