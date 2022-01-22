import React, { Fragment } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon, ShoppingCartIcon, LoginIcon } from '@heroicons/react/outline'
import HeaderLogo from "../images/header-logo.svg"

const navigation = [
  { name: 'Custom Pocker Chips', href: '#', current: true },
  { name: 'Pocker Sets', href: '#', current: false },
  { name: 'Pocker Supplies', href: '#', current: false },
  { name: 'Inspiration', href: '#', current: false },
  { name: 'Recoder', href: '#', current: false },
]

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}


const Header = ({ siteTitle }) => (
  <Disclosure as="nav" className="bg-white">
    {({ open }) => (
      <>
        <div className="max-w-[1170px] mx-auto py-0 lg:px-5 xl:px-0 sm:h-16 lg:h-16">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch lg:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <Link className="" to="/">
                  <HeaderLogo
                    style={{ marginBottom: "0px" }}
                  />
                </Link>
              </div>
              <div className="hidden lg:block sm:ml-6">
                <div className="flex xl:space-x-4">
                  {navigation.map((item, index) => {
                    return <>
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'text-gray-900 text-white' : 'text-gray-900 hover:text-green-500',
                        'px-2 py-2 rounded-md text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                    {
                      index === 2 ? <span
                      key={item.name}
                      className={classNames(
                        'text-gray-900',
                        'px-2 py-2 rounded-md text-sm font-medium'
                      )}
                      >|</span> : <></>
                    }
                    </>
                  })}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center sm:pr-0 ">
          
              <button
                type="button"
                className="hidden lg:inline-flex inline-flex items-center px-8 mr-4 py-1 border border-transparent text-xs rounded-full shadow-sm border-green-600 text-black bg-white hover:bg-green-600 hover:text-white "
              >
                <LoginIcon className="w-6" />
                <span>Log In</span>
              </button>

              {/* Profile dropdown */}
              <div className="flow-root">
                <a href="#" className="group -m-2 p-2 flex items-center">
                  <ShoppingCartIcon
                    className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">Cart({0})</span>
                  <span className="sr-only">items in cart, view bag</span>
                </a>
              </div>
  
            </div>
          </div>
        </div>
        
        <Disclosure.Panel className="lg:hidden bg-slate-50">
        <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
          <div className="flex px-2 pt-2 pb-3 space-y-1">
            <div className="md:w-2/3 sm:w-1/2">
              {navigation.map((item, index) => {
                return <>
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? ' text-black' : 'text-slate-800  hover:text-green-500',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
                {
                  index === 2 ? <div className="w-full border-t border-gray-300 mx-3"></div> : <></>
                }
                </>
              })}
            </div>
            <div className="md:w-1/3 sm:w-1/2 text-center">
              <button
                type="button"
                className="inline-flex items-center px-8 mr-4 py-1 border border-transparent text-xs rounded-full shadow-sm border-green-600 text-black bg-white hover:bg-green-600 hover:text-white "
              >
                <LoginIcon className="w-6" />
                <span>Log In</span>
              </button>
            </div>
          </div>
        </Transition.Child>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
)

export default Header