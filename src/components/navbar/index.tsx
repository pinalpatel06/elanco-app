import { FC } from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import { Link, useLocation } from 'react-router-dom'


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Navbar: FC<{ isHomePage: boolean }> = (props) => {
  const location=useLocation();

  const navigation = [
    { name: 'HOME Page', href: '/', current:location.pathname==="/"? true:false },
  ]
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="position-absolute">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch">
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item, i) => {
                        if (item.name != 'PRODUCTS' && item.name != 'HOME') {
                          return (
                            <a
                              key={i}
                              href={props.isHomePage ? item.href : '/'}
                              className={classNames(
                                item.current
                                  ? 'gray-900 font-medium'
                                  : 'text-gray-400 hover:font-medium hover:text-gray-900',
                                'px-3 py-2 text-sm',
                              )}
                              aria-current={item.current ? 'page' : undefined}
                            >
                              {item.name}
                            </a>
                          )
                        } else {
                          return (
                            <Link
                              to={item.href}
                              key={i}
                              className={classNames(
                                item.current
                                  ? 'gray-900 font-medium'
                                  : 'text-gray-400 hover:font-medium hover:text-gray-900',
                                'px-3 py-2 text-sm',
                              )}
                              aria-current={item.current ? 'page' : undefined}
                            >
                              {item.name}
                            </Link>
                          )
                        }
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 ">
                {navigation.map((item, i) => (
                  <div className="border-b-2 p-2">
                    <Disclosure.Button
                      key={i}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'pink-500 font-medium'
                          : 'text-gray-400 hover:font-medium hover:text-gray-900',
                        'px-3 py-2 text-sm ',
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  </div>
                ))}
              </div>
            </Disclosure.Panel>
          </div>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar
