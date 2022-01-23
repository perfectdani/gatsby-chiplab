import * as React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FiLogIn } from 'react-icons/fi';

import Button from '/src/components/button/Button';
import ChiplabLogo from '/src/images/chilplab.svg';

const links = [
  { href: '/', label: 'Custom Poker Chips' },
  { href: '/for-everyone', label: 'Poker Sets' },
  { href: '/benefit', label: 'Poker Supplies' },
];

export default function Header() {
  const [showDrawer, setShowDrawer] = React.useState(false);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
    document.getElementById('hamburger-menu').classList.toggle('open');
  };

  return (
    <header className='bg-white py-2 sticky top-0 z-50'>
      <div className='flex h-14 items-center justify-between layout'>
        <div className='flex space-x-2 lg:hidden'>
          <div
            onClick={toggleDrawer}
            id='hamburger-menu'
            className='icon nav-icon-5'
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <h5 className='font-bold hidden lg:block'>Menu</h5>
        </div>
        <div className='flex items-center space-x-6'>
          <a href='/'>
            <img src={ChiplabLogo} alt='' />
          </a>
          <nav className='divide-gray-500 hidden items-center lg:flex'>
            <ul className='flex items-center px-4 space-x-4'>
              {links.map(({ href, label }) => (
                <li key={`${href}${label}`}>
                  <a href={href} className='hover:text-green-500'>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <p>|</p>
            <ul className='flex items-center px-4 space-x-4'>
              <li>
                <a href='#' className='hover:text-green-500'>
                  Inspiration
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-green-500'>
                  Reorder
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className='flex items-center'>
          <Button
            variant='outline'
            className='font-bold hidden px-8 py-1 lg:flex'
          >
            <FiLogIn className='mr-1' /> Log In
          </Button>
          <Button
            variant='ghost'
            className='flex font-bold px-3 py-2 relative text-gray-800 md:px-8 hover:bg-transparent hover:text-green-600'
          >
            <AiOutlineShoppingCart className='h-6 mr-1 w-6 sm:h-auto sm:w-auto' />
            <span className='hidden sm:block'>Cart (0)</span>
            <span className='-right-2 absolute bg-green-600 font-bold inline-flex items-center justify-center leading-none mr-2 px-2 py-1 rounded-full text-red-100 text-xs top-0 sm:hidden'>
              0
            </span>
          </Button>
        </div>
      </div>

      {showDrawer && (
        <div className='absolute bg-white p-6 w-full'>
          <div className='block items-start justify-between sm:flex'>
            <ul className='space-y-4'>
              <li>
                <a className='h4 hover:text-green-600' href='#'>
                  Custom Poker Chips
                </a>
              </li>
              <li>
                <a className='font-normal h4 hover:text-green-600' href='#'>
                  Poker Sets
                </a>
              </li>
              <li>
                <a className='font-normal h4 hover:text-green-600' href='#'>
                  Poker Supplies
                </a>
              </li>
              <hr />
              <li>
                <a className='font-normal h4 hover:text-green-600' href='#'>
                  Inspiration
                </a>
              </li>
              <li>
                <a className='font-normal h4 hover:text-green-600' href='#'>
                  Reorder
                </a>
              </li>
            </ul>
            <Button
              variant='outline'
              className='font-bold inline-flex mt-3 px-8 py-2 sm:flex sm:mt-0'
            >
              <FiLogIn className='mr-1' /> Log In
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
