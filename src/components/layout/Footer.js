import React from 'react';

import ChiplabLogo from '/src/images/chilplab-white.svg';

const Footer = () => {
  return (
    <footer className='bg-gray-700 pb-6 pt-10 text-gray-300'>
      <div className='max-w'>
        <img
          src={ChiplabLogo}
          alt=''
          className='mx-0 px-8 md:mx-auto md:px-0'
        />
        <div className='pb-6 pt-10'>
          <div className='block justify-between mx-auto space-x-0 w-10/12 md:flex md:space-x-4'>
            <div>
              <h3 className='font-bold'>Poker Chips</h3>
              <ul className='py-6 space-y-2'>
                <li>
                  <a className='hover:text-white' href='#'>
                    Custom Poker Chips
                  </a>
                </li>
                <li>
                  <a className='hover:text-white' href='#'>
                    Poker Sets
                  </a>
                </li>
                <li>
                  <a className='hover:text-white' href='#'>
                    Composite Poker Chips
                  </a>
                </li>
                <li>
                  <a className='hover:text-white' href='#'>
                    Clay Poker Chips
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='font-bold'>Poker Supplies</h3>
              <ul className='py-6 space-y-2'>
                <li>
                  <a className='hover:text-white' href='#'>
                    All Poker Supplies
                  </a>
                </li>
                <li>
                  <a className='hover:text-white' href='#'>
                    Custom Poker Cases
                  </a>
                </li>
                <li>
                  <a className='hover:text-white' href='#'>
                    Stock Poker Cases
                  </a>
                </li>
                <li>
                  <a className='hover:text-white' href='#'>
                    Crystal Dealer Buttons
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='font-bold'>Customer Services</h3>
              <ul className='py-6 space-y-2'>
                <li>
                  <a className='hover:text-white' href='#'>
                    Contact Us
                  </a>
                </li>
                <li>
                  <a className='hover:text-white' href='#'>
                    Pricing
                  </a>
                </li>
                <li>
                  <a className='hover:text-white' href='#'>
                    Rush Delivery
                  </a>
                </li>
                <li>
                  <a className='hover:text-white' href='#'>
                    Artwork Guidelines
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='font-bold'>About Us</h3>
              <ul className='py-6 space-y-2'>
                <li>
                  <a className='hover:text-white' href='#'>
                    The ChipLab Difference
                  </a>
                </li>
                <li>
                  <a className='hover:text-white' href='#'>
                    Material Options
                  </a>
                </li>
                <li>
                  <a className='hover:text-white' href='#'>
                    Finishing Options
                  </a>
                </li>
                <li>
                  <a className='hover:text-white' href='#'>
                    Satisfaction Guarantee
                  </a>
                </li>
                <li>
                  <a className='hover:text-white' href='#'>
                    Inspiration Gallery
                  </a>
                </li>
                <li>
                  <a className='hover:text-white' href='#'>
                    Our Blog
                  </a>
                </li>
                <li>
                  <a className='hover:text-white' href='#'>
                    Free Samples
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='block border-gray-600 border-t-2 justify-start pt-4 px-8 md:flex md:justify-between md:px-20'>
          <small>© 2021 ChipLab. All Rights Reserved.</small>
          <ul className='flex space-x-4'>
            <li>
              <a className='text-sm' href='#'>
                Terms & Conditions
              </a>
            </li>
            <li>
              <a className='text-sm' href='#'>
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
