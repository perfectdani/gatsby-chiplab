import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={30}
      grabCursor={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        860: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      }}
    >
      <SwiperSlide>
        <div className='bg-white border px-8 py-6 rounded-md space-y-6'>
          <h4 className='font-bold'>Modern look & trending design</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos porro
            vitae adipisci eos maiores dolore voluptate eius id dolor, a ipsa
            eveniet, nulla cupiditate nihil sint suscipit, nobis totam ea?
          </p>
          <div className='flex items-center space-x-4'>
            <img
              src='https://images.pexels.com/photos/3310695/pexels-photo-3310695.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
              alt=''
              className='h-12 object-cover rounded-full w-12'
            />
            <div>
              <h4>Jon Doe</h4>
              <h5>Co Founder of IBM</h5>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='bg-white border px-8 py-6 rounded-md space-y-6'>
          <h4 className='font-bold'>Modern look & trending design</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos porro
            vitae adipisci eos maiores dolore voluptate eius id dolor, a ipsa
            eveniet, nulla cupiditate nihil sint suscipit, nobis totam ea?
          </p>
          <div className='flex items-center space-x-4'>
            <img
              src='https://images.pexels.com/photos/3310695/pexels-photo-3310695.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
              alt=''
              className='h-12 object-cover rounded-full w-12'
            />
            <div>
              <h4>Jon Doe</h4>
              <h5>Co Founder of IBM</h5>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='bg-white border px-8 py-6 rounded-md space-y-6'>
          <h4 className='font-bold'>Modern look & trending design</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos porro
            vitae adipisci eos maiores dolore voluptate eius id dolor, a ipsa
            eveniet, nulla cupiditate nihil sint suscipit, nobis totam ea?
          </p>
          <div className='flex items-center space-x-4'>
            <img
              src='https://images.pexels.com/photos/3310695/pexels-photo-3310695.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
              alt=''
              className='h-12 object-cover rounded-full w-12'
            />
            <div>
              <h4>Jon Doe</h4>
              <h5>Co Founder of IBM</h5>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Testimonial;
