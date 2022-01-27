import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import StyleCard from '../card/StyleCard';

const StyleCarousel = ({ category }) => {
  return (
    <>
      <Swiper
        className='mt-10'
        spaceBetween={20}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        grabCursor={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          636: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
        }}
      >
        {category.categories &&
          category.categories.map((category) => (
            <SwiperSlide key={category.name}>
              <StyleCard category={category} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default StyleCarousel;
