import React from 'react';
import Button from 'src/components/button/Button';

const SignUp = () => {
  return (
    <div className='bg-[#eeba40] block items-center justify-between px-10 py-8 rounded-none w-full md:flex md:rounded-xl'>
      <div className='mb-3 text-center md:mb-0 md:text-left'>
        <h1 className='text-xl md:text-3xl'>SIGN UP & GET TO THE LIST</h1>
        <h3 className='text-sm md:text-lg'>Special offers and news.</h3>
      </div>
      <div className='mx-auto relative space-y-2 w-12/12 md:mx-0 md:space-y-0 md:w-auto'>
        <input
          className='bg-white pl-5 pr-0 py-3 rounded-full w-full md:pr-14 md:w-7/12 focus:outline-none'
          type='text'
          placeholder='Type Your Email'
        />
        <Button className='px-8 py-3 relative rounded-full text-white w-full md:absolute md:right-6 md:w-auto'>
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default SignUp;
