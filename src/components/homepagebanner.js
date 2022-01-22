import * as React from 'react'

export default function Example() {
  return (
    <div className="relative bg-indigo-800">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
          alt=""
        />
        <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply" aria-hidden="true" />
      </div>
      <div className="relative max-w-6xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className='sm:px-0 lg:px-8'>
            <p className="text-lg  tracking-tight text-white sm:text-6xl lg:text-6xl">CUSTOM</p>
            <p className="text-lg  tracking-tight text-white sm:text-6xl lg:text-6xl"><b>POKER</b> CHIPS</p>
            <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque lacus nisi urna, arcu sociis eu. Orci vel
            lectus nisl eget eget ut consectetur. Sit justo viverra non adipisicing elit distinctio.
            </p>

            <button
                type="button"
                className="inline-flex items-center px-8 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Shop Custom Poker Chips
            </button>
        </div>
      </div>
    </div>
  )
}