import React from 'react';
import { RiFlashlightFill } from 'react-icons/ri';

const SubHeader = () => {
  return (
    <div className='bg-red-700 px-2 py-1 text-white'>
      <nav className='justify-center mx-auto text-center'>
        <p className='items-center mx-auto space-x-2 text-center'>
          <span className='inline-flex'>
            <RiFlashlightFill />
          </span>
          <strong className='underline'>Last Week. </strong>
          <span>22% Off All Custom Chips and More &nbsp; &nbsp; |</span>
          <span>Use Code: NEWYEAR22 &nbsp; &nbsp; |</span>
          <span>Fre Ship Over $49 &nbsp; &nbsp; |</span>
          <span>Ends 1/23 &nbsp; &nbsp; |</span>
          <span className='underline'>
            <a href='/about/promotion-details'>Details</a>{' '}
          </span>
        </p>
      </nav>
    </div>
  );
};

export default SubHeader;
