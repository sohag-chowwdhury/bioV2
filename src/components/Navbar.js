import { Link } from "react-scroll";
import { useWheel } from "../Context/Wheel";
import '../css/effect.css';


import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
const navigation = [
  { ID: "01.", name: "About" },
  { ID: "02.", name: "Experience" },
  { ID: "03.", name: "Work" },
  { ID: "04.", name: "Contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({value}) {
  const {  modeValue,  modeSetFunc  } = useWheel() 
  const {  wheelPossition } = useWheel() 
  const [mood, setMode] = useState('light')
 const  moodChange = (e) =>{
    modeSetFunc(e)
    setMode(e)
  }
  return (
    <Disclosure
      as="nav"
      className=" dark:bg-white bg-gray-900 sticky z-20 top-0  h-15   shadow-xs  border-b dark:border-gray-300 border-gray-800"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button  className="inline-flex items-center justify-center rounded-md p-2 dark:text-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block dark:text-gray-700 text-gray-300 h-6 w-6"
                     
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block h-6 w-6 dark:text-green-800 text-green-300"
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
                      <div className="text-2xl sm:text-4xl dark:text-gray-700 dark:text-gray-700 text-gray-300 font-bold font-mono">SOHAG</div>
                      <div className=" -mt-6 text-3xl dark:text-gray-900 text-gray-700 sm:text-4xl xl:5xl font-bold font-danc" >chowdhury </div>
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
                        <p className="font-sans dark:font-bold hover:border-b-2 dark:text-gray-700 text-gray-300 hover:border-green-300/100 my-1">
                          <span className="dark:text-green-800 dark:mr-1 text-green-300">{item.ID}</span>
                          {item.name}
                        </p>
                      </Link>
                    ))}
                    <a
                      className="mt-2"
                      href="https://firebasestorage.googleapis.com/v0/b/student-blog-80add.appspot.com/o/personal%2FResume_Md_Sohag_Chowdhury.pdf?alt=media&token=018cc70b-6c6b-4974-93da-0d873c2c321f"
                      target="_blank"
                      download
                      rel="noreferrer"
                    >
                      <button
                        type="button"
                        className="flot-center  text-xs px-4 py-2 dark:bg-white bg-gray-800 text-sm font-semibold dark:text-gray-800 text-green-300 shadow-sm ring-2 ring-inset dark:ring-gray-600 ring-green-300 hover:bg-gray-700"
                      >
                        Resume
                      </button>
                      
                    </a>
                   
                  </div> 
                </div>
              </div>
                 <button onClick={()=>moodChange('light')} className={`${modeValue ==='light' ? 'hidden mx-2' : ''}`} ><img width="32" className="mx-2 lg:mx-10" height="32" src="https://img.icons8.com/emoji/32/crescent-moon-emoji.png" alt="crescent-moon-emoji"/></button>

                 <button onClick={()=>moodChange('dark')} className={`${modeValue ==='light' ? '' : 'hidden mx-2'}`} ><img width="56" className="mx-2 lg:mx-8" height="36" 
                 src="https://followyourheart.com/wp-content/uploads/2020/11/Sun.gif" alt="crescent-moon-emoji"/></button>
               </div>
          </div>

          <Disclosure.Panel className="sm:hidden dark:bg-white">
         
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item, index) => (
                <Link
                key={item.name}
                href={item.href}
                to={`${item.name}`}
                
                spy={true}              
                smooth={true}
                offset={80}
                duration={500}
                  className={classNames(
                    item.current
                      ? "dark:bg-white text-white"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white",
                    "block rounded-md px-3 py-2 text-sm font-medium"
                  )}
                 
                >
                  <p className="font-sans dark:text-green-600 text-gray-300 hover:border-green-300/100 my-1">
                    <span className="dark:text-green-900 text-green-300">{item.ID} </span>
                    {item.name}
                  </p>
                </Link>
                
              ))}
               <a
                      className="mt-[15%] mx-3"
                      href="https://firebasestorage.googleapis.com/v0/b/student-blog-80add.appspot.com/o/personal%2FResume_Md_Sohag_Chowdhury.pdf?alt=media&token=018cc70b-6c6b-4974-93da-0d873c2c321f"
                      target="_blank"
                      download
                      rel="noreferrer"
                    >
                      <button
                        type="button"
                        className="flot-center  text-xs px-7 py-2  dark:bg-white bg-gray-800 text-sm font-semibold text-green-300 shadow-sm  dark:text-gray-800  shadow-sm ring-2 dark:ring-gray-800 ring-green-400 hover:bg-gray-700"
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
