import React from 'react';
import LikeIcon from 'src/images/icons/like.svg';
import MedalIcon from 'src/images/icons/medal.svg';
import StopWatchIcon from 'src/images/icons/stopwatch.svg';
import TruckIcon from 'src/images/icons/truck.svg';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const incentives = [
  {
    name: 'Satification Guaranteed',
    imageSrc: LikeIcon,
    description:
      "We'll do what it takes to make sure you're loves with your chips.",
  },
  {
    name: 'Top Rated',
    imageSrc: MedalIcon,
    description: 'We have 4.8 out of rating 5',
  },
  {
    name: 'Free Shipping',
    imageSrc: TruckIcon,
    description: 'When you spend $50+ Ships in 1-4 Days',
  },
  {
    name: 'Upgrade to Rush Shipping',
    imageSrc: StopWatchIcon,
    description: 'Ships next day if ordered before 3pm MST',
  },
];

export default function Feature() {
  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8'>
        <div className='bg-gray-50 px-6 py-16 rounded-2xl sm:p-16'>
          <div className='max-w-xl mx-auto lg:max-w-none'>
            <div className='text-center'>
              <h2 className='font-extrabold text-2xl text-gray-900 tracking-tight'>
                We built our business on customer service
              </h2>
            </div>
            <Swiper
              className='max-w-sm mt-12 mx-auto sm:max-w-none'
              modules={[Pagination]}
              pagination={{ clickable: true }}
              loop={true}
              breakpoints={{
                400: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                600: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                860: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              spaceBetween={50}
            >
              {incentives.map((incentive) => (
                <SwiperSlide key={incentive.name}>
                  <div
                    key={incentive.name}
                    className='text-center lg:block lg:text-center'
                  >
                    <div className='sm:flex-shrink-0'>
                      <div className='flow-root'>
                        <img
                          className='mx-auto'
                          src={incentive.imageSrc}
                          alt=''
                        />
                      </div>
                    </div>
                    <div className='mt-3 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6'>
                      <h3 className='font-medium text-gray-900 text-sm'>
                        {incentive.name}
                      </h3>
                      <p className='mt-2 text-gray-500 text-sm'>
                        {incentive.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
