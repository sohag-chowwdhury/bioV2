import { Link } from "react-scroll";

import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { ID: "01.", name: "About", href: "#", of: "-80", current: false },
  { ID: "02.", name: "Experience", href: "#Experience", current: false },
  { ID: "03.", name: "Work", href: "#", current: false },
  { ID: "04.", name: "Contact", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="bg-gray-900 sticky z-20 top-0  h-20   shadow-xs"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block text-gray-400 h-6 w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block h-6 w-6 text-green-400"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center sm:px-0 px-10">
                  <Link
                    to="Hero"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={1000}
                    className="text-gray-300   ,
                          'rounded-md px-10 sm:px-0 py-2 text-sm font-medium"
                  >
                    <p className="font-danc text-green-300 px-10 sm:px-0  font-bold text-4xl">
                      {" "}
                      Sohag <span className="text-sm">Chowdhury</span>
                    </p>
                  </Link>
                </div>
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="w-12"
                    src="https://i.stack.imgur.com/4jEew.gif"
                  ></img>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        to={`${item.name}`}
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={1000}
                        className="text-gray-300  ,
                          'rounded-md px-3 py-2 text-sm font-medium"
                      >
                        <p className="font-sans hover:border-b-2 text-gray-400 hover:border-green-300/100 my-1">
                          <span className="text-green-400">{item.ID}</span>{" "}
                          {item.name}
                        </p>
                      </Link>
                    ))}
                    <a
                      className="mt-2"
                      href="https://firebasestorage.googleapis.com/v0/b/student-blog-80add.appspot.com/o/personal%2Fsohag_resume.pdf?alt=media&token=c8bbfe99-3e6a-455c-970a-70732cb01856"
                      target="_blank"
                      download
                      rel="noreferrer"
                    >
                      <button
                        type="button"
                        className="flot-center  text-xs px-4 py-2  bg-gray-800 text-sm font-semibold text-green-300 shadow-sm ring-1 ring-inset ring-green-300 hover:bg-gray-700"
                      >
                        Resume
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden bg-gray-900">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  to={`${item.name}`}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={1000}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  <p className="font-sans text-gray-400 hover:border-green-300/100 my-1">
                    <span className="text-green-400">{item.ID}</span>{" "}
                    {item.name}
                  </p>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
