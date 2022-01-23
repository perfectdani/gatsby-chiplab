import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Testimonial = () => {
  return (
    <Swiper
      spaceBetween={30}
      grabCursor={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 100,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 20,
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
      <SwiperSlide>
        <div className='bg-white py-5 text-left hover:cursor-grab hover:shadow-xl'>
          <div className='flex items-center space-x-4'>
            <div className='bg-yellow-500 inline-block px-4 py-2 rounded-r-lg text-left text-white'>
              5.0
            </div>
            <div className='flex'>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
          </div>
          <p className='p-6'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga autem
            officia perspiciatis minima aliquid quibusdam iusto, natus odio
            nesciunt voluptatibus!
          </p>
          <div className='flex items-center px-6 space-x-4'>
            <img
              className='h-10 object-cover rounded-full w-10'
              src='https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
              alt=''
            />
            <div className='space-y-0'>
              <h4>Chris K.</h4>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='bg-white py-5 text-left hover:cursor-grab hover:shadow-xl'>
          <div className='flex items-center space-x-4'>
            <div className='bg-yellow-500 inline-block px-4 py-2 rounded-r-lg text-left text-white'>
              5.0
            </div>
            <div className='flex'>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
          </div>
          <p className='p-6'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga cum
            pariatur ducimus, in earum repellat minus saepe molestiae non, id
            repellendus ut qui et deserunt maxime recusandae rerum illum. Quas
            architecto quo ullam rem placeat!
          </p>
          <div className='flex items-center px-6 space-x-4'>
            <img
              className='h-10 object-cover rounded-full w-10'
              src='https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
              alt=''
            />
            <div className='space-y-0'>
              <h4>Crystal D</h4>
              <p className='text-sm'>Designer</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='bg-white py-5 text-left hover:cursor-grab hover:shadow-xl'>
          <div className='flex items-center space-x-4'>
            <div className='bg-yellow-500 inline-block px-4 py-2 rounded-r-lg text-left text-white'>
              5.0
            </div>
            <div className='flex'>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
          </div>
          <p className='p-6'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga cum
            pariatur ducimus, in earum repellat minus saepe molestiae non, id
            repellendus ut qui et deserunt maxime recusandae rerum illum. Quas
            architecto quo ullam rem placeat!
          </p>
          <div className='flex items-center px-6 space-x-4'>
            <img
              className='h-10 object-cover rounded-full w-10'
              src='https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
              alt=''
            />
            <div className='space-y-0'>
              <h4>Crystal D</h4>
              <p className='text-sm'>Designer</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='bg-white py-5 text-left hover:cursor-grab hover:shadow-xl'>
          <div className='flex items-center space-x-4'>
            <div className='bg-yellow-500 inline-block px-4 py-2 rounded-r-lg text-left text-white'>
              5.0
            </div>
            <div className='flex'>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
          </div>
          <p className='p-6'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga cum
            pariatur ducimus, in earum repellat minus saepe molestiae non, id
            repellendus ut qui et deserunt maxime recusandae rerum illum. Quas
            architecto quo ullam rem placeat!
          </p>
          <div className='flex items-center px-6 space-x-4'>
            <img
              className='h-10 object-cover rounded-full w-10'
              src='https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
              alt=''
            />
            <div className='space-y-0'>
              <h4>Crystal D</h4>
              <p className='text-sm'>Designer</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Testimonial;
