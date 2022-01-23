/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import LikeIcon from '/src/images/icons/like.svg';
import MedalIcon from '/src/images/icons/medal.svg';
import StopWatchIcon from '/src/images/icons/stopwatch.svg';
import TruckIcon from '/src/images/icons/truck.svg';

const Benefit = () => {
  return (
    <section className='layout py-20'>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        spaceBetween={50}
      >
        <SwiperSlide>
          <div className='space-y-4 text-center'>
            <img src={LikeIcon} alt='' className='mx-auto' />
            <h4 className='font-bold'>
              <strong>Satifaction Guaranteed</strong>
            </h4>
            <hr className='border-yellow-500 mx-auto w-2/12' />
            <p>We'll do what it takes to make sure you love your chips</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='space-y-4 text-center'>
            <img src={MedalIcon} alt='' className='mx-auto' />
            <h4 className='font-bold'>
              <strong>Top Rated</strong>
            </h4>
            <hr className='border-yellow-500 mx-auto w-2/12' />
            <p>We have 4.8 out of 5 rating</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='space-y-4 text-center'>
            <img src={TruckIcon} alt='' className='mx-auto' />
            <h4 className='font-bold'>
              <strong>Free Shipping</strong>
            </h4>
            <hr className='border-yellow-500 mx-auto w-2/12' />
            <p>When you spend $50+ Ships in 1-4 Days</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='space-y-4 text-center'>
            <img src={StopWatchIcon} alt='' className='mx-auto' />
            <h4 className='font-bold'>
              <strong>Upgdrade to Rush Shipping</strong>
            </h4>
            <hr className='border-yellow-500 mx-auto w-2/12' />
            <p>Ships next day of ordered before 3pm MST</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Benefit;
