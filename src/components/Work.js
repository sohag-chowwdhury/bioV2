import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "../css/aboutStyle.css";

export default function Work() {
  const [open, setOpen] = useState(0);
  const updateButtonValue = (e) => {
    setOpen(e);
  };

  return (
    <>
      <div
        id="Experience"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="grid grid-cols-1 mt-20 mx-3 lg:grid-cols-8 gap-4"
      >
        
        <div className="lg:col-start-2  mt-4 px-5 sm:px-12 lg:col-end-6"></div>
        <div className="lg:col-start-2 md:ml-20   px-5 sm:px-20 lg:col-end-8">
          <div className="relative">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-[40%] ml-[60%] sm:ml-[70%] md:ml-[60%] lg:ml-[60%] xl:ml-[50%] 2xl:ml-[35%]  mt-1 border-t-2 border-gray-700" />
            </div>
            <div className="relative flex justify-start">
              <h1 className="text-2xl font-oswald font-bold  dark:text-gray-700 text-gray-400 sm:text-3xl md:text-4xl">
                
                <span className="dark:text-green-600 text-green-400">02. </span> Where I've worked
              </h1>
            </div>
          </div>
          <div className="grid  grid-cols-1 sm:grid-cols-8 mt-12">
            <div className="sm:col-start-1 sm:col-end-3">
              <button
                type="button"
                onClick={() => updateButtonValue(0)}
                className={
                  "sm:w-full  bg-transparent font-sans font-semibold dark:text-gray-700 text-gray-400  px-2 py-3 text-xs text-xs sm:text-lg text-start font-semibold  shadow-sm hover:bg-gray-700" +
                  (open === 0
                    ? " border-green-400  border-l-4"
                    : " border-gray-400  border-l-2")
                }
              >
                <span className="dark:text-green-600 text-green-400  mx-2 hidden sm:inline">
                  01.
                </span>
                Ioty Signalfow
              </button>
              <button
                type="button"
                onClick={() => updateButtonValue(1)}
                className={
                  "sm:w-full  bg-transparent font-sans font-semibold dark:text-gray-700 text-gray-400  px-2 py-3  text-xs text-xs sm:text-lg text-start font-semibold  shadow-sm hover:bg-gray-700" +
                  (open === 1
                    ? " border-green-400  border-l-4"
                    : " border-gray-400  border-l-2")
                }
              >
                <span className="dark:text-green-600 text-green-400 mx-2  hidden sm:inline">
                  02.{" "}
                </span>{" "}
                Apukuski
              </button>
              <button
                type="button"
                onClick={() => updateButtonValue(2)}
                className={
                  "sm:w-full  bg-transparent font-sans font-semibold dark:text-gray-700 text-gray-400  px-2 py-3  text-xs text-xs sm:text-lg text-start font-semibold  shadow-sm hover:bg-gray-700" +
                  (open === 2
                    ? " border-green-400  border-l-4"
                    : " border-gray-400  border-l-2")
                }
              >
                <span className="dark:text-green-600 text-green-400 mx-2  hidden sm:inline">
                  03.{" "}
                </span>{" "}
                Defibids
              </button>
              <button
                type="button"
                onClick={() => updateButtonValue(3)}
                className={
                  "sm:w-full  bg-transparent font-sans font-semibold dark:text-gray-700 text-gray-400  px-2 py-3 text-xs text-xs sm:text-lg text-start font-semibold  shadow-sm hover:bg-gray-700" +
                  (open === 3
                    ? " border-green-400  border-l-4"
                    : " border-gray-400  border-l-2")
                }
              >
                <span className="dark:text-green-600 text-green-400 mx-2  hidden sm:inline">
                  04.{" "}
                </span>{" "}
                Freelancer
              </button>
            </div>
            <div className="sm:col-start-3 sm:col-end-8">
              <span className={open === 0 ? "" : "hidden"}>
                <h1 className="text-4xl mt-2 font-sans font-semibold font-bold  dark:text-gray-700 text-gray-400 text-sm sm:text-xl mt-3">
                  Software Engineer{" "}
                  <span className="dark:text-green-600 text-green-400">
                    <a
                      href="https://iotypro.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      @ Ioty Signaflow
                    </a>
                  </span>
                </h1>
                <h3 className="text-4xl mt-2 font-sans font-semibold font-bold  text-gray-500 text-xs sm:text-lg">
                  2022 January - 2023 March (Remotely)
                </h3>
                <p className="font-sans font-semibold text-sm  leading-8 dark:text-gray-700 text-gray-400">
                  <FontAwesomeIcon
                    className="dark:text-green-600 text-green-400 mr-2"
                    icon={faArrowAltCircleRight}
                  />
                  Using Vue, Vuetify, and Firebase, I created and styled
                  interactive web applications for Ioty Signalflow.
                </p>
                <p className="font-sans font-semibold text-sm  leading-8 dark:text-gray-700 text-gray-400">
                  
                  <FontAwesomeIcon
                    className="dark:text-green-600 text-green-400 mr-2"
                    icon={faArrowAltCircleRight}
                  />
                  Build a database migrate tools from development to productions
                </p>
                <p className="font-sans font-semibold  text-sm leading-8 dark:text-gray-700 text-gray-400">
                 
                  <FontAwesomeIcon
                    className="dark:text-green-600 text-green-400 mr-2"
                    icon={faArrowAltCircleRight}
                  />
                  Performed quality assurance checks on numerous websites to
                  make sure they were responsive and cross-browser compatible
                </p>
                <p className="font-sans font-semibold  text-sm leading-8 dark:text-gray-700 text-gray-400">
                  
                  <FontAwesomeIcon
                    className="dark:text-green-600 text-green-400 mr-2"
                    icon={faArrowAltCircleRight}
                  />
                  Update the admin panel to create projects, packages, and build
                  customize filter methods.
                </p>
              </span>

              <span className={open === 1 ? "" : "hidden "}>
                <h1 className="text-4xl mt-2 font-sans font-semibold font-bold  dark:text-gray-700 text-gray-400 text-sm sm:text-xl mt-3">
                  Full-Stack web app developer
                  <span className="dark:text-green-800 text-green-400">
                    <a
                      href="https://tilaus.apukuski.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                     
                      @ Apukuski
                    </a>
                  </span>
                </h1>
                <h3 className="text-4xl mt-2 font-sans font-semibold font-bold  text-gray-500 text-xs sm:text-lg">
                 
                  2021 February — Dec 2021 (Remotely)
                </h3>
                <p className="font-sans font-semibold text-sm  leading-8 dark:text-gray-700 text-gray-400">
                  <FontAwesomeIcon
                    className="dark:text-green-800 text-green-400 mr-2"
                    icon={faArrowAltCircleRight}
                  />
                  Build a moving and Delivery Survice web App app
                </p>
                <p className="font-sans font-semibold text-sm  leading-8 dark:text-gray-700 text-gray-400">
                  
                  <FontAwesomeIcon
                    className="dark:text-green-800 text-green-400 mr-2"
                    icon={faArrowAltCircleRight}
                  />
                  Work with other engineers, designers, and project managers to
                  turn creative ideas into production realities for customers
                  and stakeholders.
                </p>
                <p className="font-sans font-semibold  text-sm leading-8 dark:text-gray-700 text-gray-400">
                  
                  <FontAwesomeIcon
                    className="dark:text-green-800 text-green-400 mr-2"
                    icon={faArrowAltCircleRight}
                  />
                  Become the department's leadership with engineering through
                  tight partnership, knowledge sharing, and mentoring
                </p>
              </span>

              <span className={open === 2 ? "" : "hidden "}>
                <h1 className="text-4xl mt-2 font-sans font-semibold font-bold  dark:text-gray-700 text-gray-400 text-sm sm:text-xl mt-3">
                  Designer
                  <span className="dark:text-green-600 text-green-400">
                    <a
                      href="https://defibids.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      
                      @ Defibids
                    </a>
                  </span>
                </h1>
                <h3 className="text-4xl mt-2 font-sans font-semibold font-bold  text-gray-500 text-xs sm:text-lg">
                  2020 January - 2020 June (Remotely)
                </h3>
                <p className="font-sans font-semibold text-sm  leading-8 dark:text-gray-700 text-gray-400">
                  <FontAwesomeIcon
                    className="dark:text-green-600 text-green-400 mr-2"
                    icon={faArrowAltCircleRight}
                  />
                  Developed and styled interactive web applications for Defibids
                </p>
                <p className="font-sans font-semibold text-sm  leading-8 dark:text-gray-700 text-gray-400">
                  
                  <FontAwesomeIcon
                    className="dark:text-green-600 text-green-400 mr-2"
                    icon={faArrowAltCircleRight}
                  />
                  Work with other engineers, designers, and project managers to
                  turn creative ideas into production realities for customers
                  and stakeholders.
                </p>
              </span>

              <span className={open === 3 ? "" : "hidden "}>
                <h1 className="text-4xl mt-2 font-sans font-semibold font-bold  dark:text-gray-700 text-gray-400 text-sm sm:text-xl mt-3">
                  Web Design and Development
                  <span className="text-gray-200"> @ as Freelancer </span>
                </h1>
                <h3 className="text-4xl mt-2 font-sans font-semibold font-bold  text-gray-500 text-xs sm:text-lg">
                  July 2017- January 2020
                </h3>
                <p className="font-sans font-semibold text-sm  leading-8 dark:text-gray-700 text-gray-400">
                  <FontAwesomeIcon
                    className="dark:text-green-600 text-green-400 mr-2"
                    icon={faArrowAltCircleRight}
                  />
                  I have a Three-year freelance career in web development,
                  specializing in front-end technologies such as Vue, React,
                  Bootstrap, and Vuetify. During this time, I have gained
                  extensive experience in building responsive and user-friendly
                  web applications for clients across various industries
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
