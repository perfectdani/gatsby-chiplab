import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import React, { Fragment } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FiLogIn } from 'react-icons/fi';
import ChiplabLogo from 'src/images/chilplab.svg';
const navigation = [
  { name: 'Custom Poker Chips', href: '/custom-poker-chips' },
  { name: 'Poker Sets', href: '/poker-sets' },
  { name: 'Poker Supplies', href: '/poker-supplies' },
];

export default function Header() {
  return (
    <Popover as='header' className='relative'>
      <div className='py-4'>
        <nav
          className='flex items-center justify-between max-w-6xl mx-auto px-6 relative sm:px-6'
          aria-label='Global'
        >
          <div className='flex flex-1 items-center'>
            <div className='flex items-center justify-between w-full md:w-auto'>
              <div className='-mr-2 flex items-center md:hidden'>
                <Popover.Button className='focus-ring-inset inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  <MenuIcon className='h-6 w-6' aria-hidden='true' />
                </Popover.Button>
              </div>
              <a href='#'>
                <span className='sr-only'>ChipLab</span>
                <img src={ChiplabLogo} alt='' className='h-8 w-auto sm:h-10' />
              </a>
              <a
                href='#'
                className='font-bold inline-flex items-center py-2 relative text-base md:hidden hover:text-green-500'
              >
                <AiOutlineShoppingCart className='h-6 mr-1 w-6 sm:h-auto sm:w-auto' />
                <span className='hidden sm:block'>Cart (0)</span>
                <span className='-right-5 absolute bg-green-600 font-bold inline-flex items-center justify-center leading-none mr-2 px-2 py-1 rounded-full text-red-100 text-xs top-0 sm:hidden'>
                  0
                </span>
              </a>
            </div>
            <div className='divide-gray-300 divide-x flex'>
              <div className='hidden mr-4 space-x-4 md:flex md:ml-10'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='font-medium text-base hover:text-green-400'
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className='hidden pl-4 space-x-4 md:flex'>
                <a
                  className='font-medium text-base hover:text-green-400'
                  href='#'
                >
                  Inspiration
                </a>
                <a
                  className='font-medium text-base hover:text-green-400'
                  href='#'
                >
                  Reorder
                </a>
              </div>
            </div>
          </div>
          <div className='hidden md:flex md:items-center md:space-x-1'>
            <a
              href='#'
              className='border border-green-500 font-bold inline-flex items-center px-8 py-2 rounded-full text-base hover:bg-green-500 hover:text-white'
            >
              <FiLogIn className='mr-1' /> Log In
            </a>
            <a
              href='#'
              className='font-bold inline-flex items-center px-8 py-2 text-base hover:text-green-500'
            >
              <AiOutlineShoppingCart className='mr-1' /> Cart (0)
            </a>
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter='duration-150 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel
          focus
          className='absolute inset-x-0 origin-top p-2 top-0 transform transition z-10 md:hidden'
        >
          <div className='bg-white overflow-hidden ring-1 ring-black ring-opacity-5 rounded-lg shadow-md'>
            <div className='flex items-center justify-between pt-4 px-5'>
              <div>
                <img src={ChiplabLogo} alt='' className='h-8 w-auto sm:h-10' />
              </div>
              <div className='-mr-2'>
                <Popover.Button className='bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-inset'>
                  <span className='sr-only'>Close menu</span>
                  <XIcon className='h-6 w-6' aria-hidden='true' />
                </Popover.Button>
              </div>
            </div>
            <div className='flex justify-between pb-6 pt-5'>
              <div className='px-2 space-y-1'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='block font-medium px-3 py-2 rounded-md text-base text-gray-900 hover:bg-gray-50'
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href='#'
                  className='block font-medium px-3 py-2 rounded-md text-base text-gray-900 hover:bg-gray-50'
                >
                  Inspiration
                </a>
                <a
                  href='#'
                  className='block font-medium px-3 py-2 rounded-md text-base text-gray-900 hover:bg-gray-50'
                >
                  Reorder
                </a>
              </div>
              <div className='px-5'>
                <a
                  href='#'
                  className='border border-green-500 font-bold inline-flex items-center px-8 py-2 rounded-full text-base hover:bg-green-500 hover:text-white'
                >
                  <FiLogIn className='mr-1' /> Log In
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
