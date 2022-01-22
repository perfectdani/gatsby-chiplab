import * as React from 'react'

const HeaderMark = () => {
  return (
    <div className='flex xl:space-x-4 p-1 items-center justify-center flex-wrap bg-red-600'>
      <span className='text-white text-sm'><b className='decoration-white'>Last Week.</b>  22% Off All Custom Chips and More.</span>
      <span className='text-white text-sm px-2 py-2 rounded-md text-sm font-medium'>|</span>
      <span className='text-white text-sm'>Use Code: NEWYEAR22</span>
      <span className='text-white text-sm px-2 py-2 rounded-md text-sm font-medium'>|</span>
      <span className='text-white text-sm'>Free Ship over $49</span>
      <span className='text-white text-sm px-2 py-2 rounded-md text-sm font-medium'>|</span>
      <span className='text-white text-sm'>Ends 1/23</span>
      <span className='text-white text-sm px-2 py-2 rounded-md text-sm font-medium'>|</span>
      <span className='text-white text-sm'>Details</span>
    </div>
  )
}

export default HeaderMark

