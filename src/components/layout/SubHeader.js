/* eslint-disable react/no-unescaped-entities */
import { XIcon } from '@heroicons/react/outline';
import React from 'react';

export default function SubHeader() {
  return (
    <div className='bg-red-600 relative'>
      <div className='max-w-7xl mx-auto px-3 py-3 sm:px-6 lg:px-8'>
        <div className='pr-16 sm:px-16 sm:text-center'>
          <p className='font-medium text-white'>
            <span className='md:hidden'>We announced a new product!</span>
            <span className='hidden md:inline'>
              Big news! We're excited to announce a brand new product.
            </span>
            <span className='block sm:inline-block sm:ml-2'>
              <a href='#' className='font-bold text-white underline'>
                {' '}
                Learn more <span aria-hidden='true'>&rarr;</span>
              </a>
            </span>
          </p>
        </div>
        <div className='absolute flex inset-y-0 items-start pr-1 pt-1 right-0 sm:items-start sm:pr-2 sm:pt-1'>
          <button
            type='button'
            className='flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white'
          >
            <span className='sr-only'>Dismiss</span>
            <XIcon className='h-6 text-white w-6' aria-hidden='true' />
          </button>
        </div>
      </div>
    </div>
  );
}
