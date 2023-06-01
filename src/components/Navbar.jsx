import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, PhoneIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../images/logo.png'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const isActive = path => location.pathname === path

  return (
    <Disclosure
      as="nav"
      className="bg-white shadow"
      onClose={() => setIsOpen(prev => !prev)}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
            <div className="flex h-16 justify-between">
              <div className="flex">
                {/* Logo */}
                <Link to="/" className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src={logo}
                    alt="Logo"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src={logo}
                    alt="Logo"
                  />
                </Link>
                {/* Nav */}
              </div>

              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {/* Current: "border-lime-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                <Link
                  to="/"
                  className={classNames(
                    'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium',
                    isActive('/')
                      ? 'border-lime-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  )}
                >
                  主页
                </Link>
                <Link
                  to="/about"
                  className={classNames(
                    'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium',
                    isActive('/about')
                      ? 'border-lime-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  )}
                >
                  常见问题
                </Link>
                <Link
                  to="/clients"
                  className={classNames(
                    'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium',
                    isActive('/clients')
                      ? 'border-lime-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  )}
                >
                  合作医院
                </Link>
              </div>

              {/* <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <button
                  type="button"
                  className="rounded-full bg-white px-4 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
                >
                  <span className="sr-only">View notifications</span>
                  <PhoneIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <a
                  href="tel:4008346186"
                  className="text-sm font-medium text-gray-900"
                >
                  400-834-6186
                </a>
              </div> */}

              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button
                  className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lime-500"
                  onClick={() => setIsOpen(prev => !prev)}
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-3 text-center">
              {/* Current: "bg-indigo-50 border-lime-500 text-lime-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Link
                to="/"
                className="block border-l-4 border-lime-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-lime-700"
              >
                <Disclosure.Button as="a">主页</Disclosure.Button>
              </Link>
              <Link
                to="/about"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                <Disclosure.Button as="a">常见问题</Disclosure.Button>
              </Link>
              <Link
                to="/clients"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                <Disclosure.Button as="a">合作医院</Disclosure.Button>
              </Link>
            </div>
            <div className="border-t border-gray-200 pt-4 pb-3">
              <div className="flex justify-center items-center px-4">
                <div
                  type="button"
                  className="flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
                >
                  <span className="sr-only">View notifications</span>
                  <PhoneIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <a
                  href="tel:4008346186"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                >
                  400-834-6186
                </a>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar
