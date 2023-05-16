import { Link } from "react-scroll";
import { useWheel } from "../Context/Wheel";

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

export default function Navbar({value}) {
  const {  wheelPossition } = useWheel() 

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
                    <div className="">
                      <div className="text-2xl sm:text-4xl text-gray-400 font-bold font-mono">SOHAG</div>
                      <div className=" -mt-6 text-3xl text-gray-700 sm:text-4xl xl:5xl font-bold font-danc" >chowdhury</div>
                    </div>
                  </Link>
                </div>
                <div className="flex flex-shrink-0 items-center">
                
                </div>
              </div>
              <div className={`${wheelPossition < 8 ? "hidden":"flex flex-1 items-center justify-center sm:items-stretch sm:justify-end"}`}>
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
                      href="https://firebasestorage.googleapis.com/v0/b/student-blog-80add.appspot.com/o/personal%2Fresume_sohag.pdf?alt=media&token=1a61f3c4-1b02-4717-9f0c-dcbe666b3bf9"
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
                 <span  className={`${ wheelPossition > 1 &&  wheelPossition < 4 ? "": 'hidden'}`}> <img className="w-36" src="https://www.kidlo.com/html5_games/loading_for_game.gif"></img></span>
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
               <a
                      className="mt-4 mx-3"
                      href="https://firebasestorage.googleapis.com/v0/b/student-blog-80add.appspot.com/o/personal%2Fresume_sohag.pdf?alt=media&token=1a61f3c4-1b02-4717-9f0c-dcbe666b3bf9"
                      target="_blank"
                      download
                      rel="noreferrer"
                    >
                      <button
                        type="button"
                        className="flot-center  text-xs px-7 py-2  bg-gray-800 text-sm font-semibold text-green-300 shadow-sm ring-1 ring-inset ring-green-300 hover:bg-gray-700"
                      >
                        Resume
                      </button>
                    </a>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
