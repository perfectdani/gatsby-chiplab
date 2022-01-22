import * as React from 'react'

export default function Example() {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img
          className="w-full h-full  object-cover"
          // src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
          src="https://www.chiplab.com/skin/frontend/rwd/chiplab/images/Chip%20Banner.jpg"
          alt=""
        />
        <div className="absolute inset-0 mix-blend-multiply" aria-hidden="true" />
      </div>
      <div className="relative max-w-6xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className='sm:px-0 lg:px-8'>
            <p className="text-lg  tracking-tight text-white sm:text-6xl lg:text-6xl">CUSTOM</p>
            <p className="text-lg  tracking-tight text-white sm:text-6xl lg:text-6xl"><b>POKER</b> CHIPS</p>
            <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
              Easy online ordering, various materials for every budget 1-4 day turnaround, designed and printed in the U.S.A.
            </p>

            <button
                type="button"
                className="inline-flex items-center px-8 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-green-500 to-green-600 hover:to-green-700"
            >
                Shop Custom Poker Chips
            </button>

            <button
                type="button"
                className="inline-flex items-center mx-4 px-8 py-2 border border-white border-transparent text-base font-medium rounded-full shadow-sm text-white from-grey-300  hover:bg-white hover:text-black  hover:transition hover:duration-300"
            >
                Get Free Samples
            </button>
        </div>
      </div>
    </div>
  )
}