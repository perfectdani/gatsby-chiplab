import React from 'react';

export default function NewsLetter() {
  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
        <div className='bg-yellow-500 px-6 py-6 rounded-lg md:px-12 md:py-12 lg:px-16 lg:py-16 xl:flex xl:items-center'>
          <div className='xl:flex-1 xl:w-0'>
            <h2 className='font-extrabold text-2xl text-gray-900 tracking-tight sm:text-3xl'>
              SIGN UP & GET TO THE LIST
            </h2>
            <p className='leading-6 max-w-3xl mt-3 text-gray-700 text-lg'>
              Special offers and news.
            </p>
          </div>
          <div className='mt-8 sm:max-w-md sm:w-full xl:ml-8 xl:mt-0'>
            <form className='sm:flex'>
              <label htmlFor='email-address' className='sr-only'>
                Email address
              </label>
              <input
                id='email-address'
                name='email-address'
                type='email'
                autoComplete='email'
                required
                className='border-white placeholder-gray-500 px-5 py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-700 focus:ring-white'
                placeholder='Type your email'
              />
              <button
                type='submit'
                className='bg-green-500 border border-transparent flex font-medium items-center justify-center mt-3 px-5 py-3 rounded-md shadow text-base text-white w-full sm:flex-shrink-0 sm:ml-3 sm:mt-0 sm:w-auto hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white'
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
