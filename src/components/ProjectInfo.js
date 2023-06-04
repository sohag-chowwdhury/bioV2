import { } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export default function Work() {
  const [open, setOpen] = useState(0);
  const updateButtonValue = (e) => {
    setOpen(e);
  };

  return (
    <>
      <div className="grid grid-cols-1 mt-10 xl:mt-5 2xl:mt-20   lg:grid-cols-8 " id="Work">
        
        <div className="lg:col-start-2 mt-10 xl:mt-5 2xl:mt-20 lg:col-end-8">
       
     
          <div className="relative   md:mt-4">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-[20%] ml-[70%] sm:w-[40%] md:ml-[50%] sm:ml-[60%] lg:ml-[60%] xl:ml-[50%] 2xl:ml-[35%] border-t-2 mt-1 border-gray-700" />
            </div>
            <div className="relative flex justify-start">
              <h1 className="text-2xl font-oswald font-bold  dark:text-gray-700 text-gray-400 sm:text-3xl md:text-4xl mx-8">
               
                <span className="dark:text-green-700 text-green-400">03. </span> Some Things I’ve
                Built{" "}
              </h1>
            </div>
          </div>

          <div className="grid  grid-cols-1 md:grid-cols-8 -mt-[5%]  md:mt-12">
            <div
              data-aos-duration="1000"
              data-aos="zoom-out-right"
              className="md:col-start-1 w-[110%] w-full md:col-end-5 z-auto inset-10 -top-0 relative hidden  md:block "
            >
              <div
                class="relative w-full overflow-hidden bg-cover bg-no-repeat"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/student-blog-80add.appspot.com/o/personal%2Fsignal.JPG?alt=media&token=b27c74da-6f7a-4b4a-b2f3-1a595d468740"
                  class="w-full rounded transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out "
                  alt="Louvre"
                />
                <a
                  href="https://dev.signalflow.tech/projects/160marinabay/7579FkI4YJVE9ztz1Lcp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div class="absolute bottom-0 rounded left-0 right-0 top-0 transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out  h-full w-full overflow-hidden bg-[hsl(142.1,76.2%,36.3%,0.5)] bg-fixed opacity-.9 transition duration-300 ease-in-out hover:opacity-0"></div>
                </a>
              </div>
            </div>
            <div
              data-aos-duration="1000"
              data-aos="zoom-out-left"
              className="md:col-start-5 h-30 md:col-end-8  z-15 inset-0 top-5 relative mt-12"
            >
              <p className="text-start md:text-end px-5 md:px-0 dark:text-green-700 text-green-400  font-sans font-semibold">
                Featured Project
              </p>
              <h1 className="text-2xl text-start md:text-end px-5 md:px-0 font-oswald font-bold  dark:text-gray-700 text-gray-400 sm:text-2xl">
                Signaflow
              </h1>
              <div className=" w-[100%] my-5 rounded dark:bg-white bg-gray-800">
                <p className="p-7 text-start md:text-end font-sans font-semibold dark:text-gray-700 text-gray-400 text-sm">
                  Signalflow is a comprehensive home automation system that
                  enables users to effortlessly control their home's lighting
                  and shading from anywhere in the world. This system is
                  designed to seamlessly integrate with your existing smart
                  devices, providing intuitive controls that make it easy to
                  adjust your home's lighting and shading based on your
                  preferences. With Signalflow, you can create custom lighting
                  schedules that align with your daily routine, as well as
                  adjust the shades to ensure privacy and energy efficiency.
                  Whether you're at home or away, Signalflow puts you in
                  complete control of your home's lighting and shading, making
                  it the perfect solution for modern homeowners looking for a
                  smarter way to manage their homes.
                </p>
              </div>
              <div className="text-start md:text-end">
                <button
                  type="button"
                  className="rounded bg-transparent px-4 text-end py-2.5 font-sans font-semibold my-2 text-sm font-bold dark:text-gray-700 text-gray-400 shadow-sm hover:dark:bg-white bg-gray-800"
                >
                  Vue
                </button>
                <button
                  type="button"
                  className="rounded bg-transparent px-4 text-end py-2.5 font-sans font-semibold my-2 text-sm font-bold dark:text-gray-700 text-gray-400 shadow-sm hover:dark:bg-white bg-gray-800"
                >
                  Vuetify
                </button>
                <button
                  type="button"
                  className="rounded bg-transparent px-4 text-end py-2.5 font-sans font-semibold my-2 text-sm font-bold dark:text-gray-700 text-gray-400 shadow-sm hover:dark:bg-white bg-gray-800"
                >
                  Vuex
                </button>
                <button
                  type="button"
                  className="rounded bg-transparent px-4 text-end py-2.5 font-sans font-semibold my-2 text-sm font-bold dark:text-gray-700 text-gray-400 shadow-sm hover:dark:bg-white bg-gray-800"
                >
                  Firebase
                </button>
                <button
                  type="button"
                  className="rounded bg-transparent px-4 text-end py-2.5 my-2 text-sm font-bold dark:text-gray-700 text-gray-400 shadow-sm hover:dark:bg-white bg-gray-800"
                >
                  Git
                </button>
              </div>
              <div className="text-strat md:text-end">
                <a
                  href="https://dev.signalflow.tech/projects/160marinabay/7579FkI4YJVE9ztz1Lcp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    href="https://dev.signalflow.tech/projects/160marinabay/7579FkI4YJVE9ztz1Lcp"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full ml-3 dark:bg-white bg-gray-800 p-2 text-white shadow-sm hover:dark:bg-white bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    {" "}
                    <img src="https://img.icons8.com/ios-filled/32/12B886/circled-up-right-2.png" />
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="grid  grid-cols-1 md:grid-cols-8 mt-12">
            <div
              data-aos-duration="1000"
              data-aos="zoom-out-right"
              className="md:col-start-1 h-30 md:col-end-4 mt-6 md:z-10 md:inset-4 top-0 relative  mt-12"
            >
              <p className="text-start dark:text-green-700 text-green-400 mt-5 px-5 md:px-0 font-sans font-semibold">
                Featured Project
              </p>
              <h1 className="text-2xl text-start  px-5 md:px-0 font-oswald font-bold  dark:text-gray-700 text-gray-400 sm:text-2xl">
                Apukuski
              </h1>
              <div className=" w-[100%] md:w-[110%] my-5 rounded dark:bg-white bg-gray-800">
                <p className="p-7 text-start font-sans font-semibold dark:text-gray-700 text-gray-400 text-sm">
                  Apukuski is a movie and delivery service that allows users to
                  select multiple locations for pick-up and drop-off. Using
                  Google Maps API, the system calculates the delivery price
                  based on the distance and carrying time. Additionally, users
                  can select a specific time slot for pick-up and drop-off,
                  ensuring convenience and flexibility. With Apukuski, customers
                  can easily transport goods and packages to various
                  destinations with ease.
                </p>
              </div>
              <div className="text-start">
                <button
                  type="button"
                  className="rounded bg-transparent px-4 text-end py-2.5 font-sans font-semibold my-2 text-sm font-bold dark:text-gray-700 text-gray-400 shadow-sm hover:dark:bg-white bg-gray-800"
                >
                  Vue
                </button>
                <button
                  type="button"
                  className="rounded bg-transparent px-4 text-end py-2.5 font-sans font-semibold my-2 text-sm font-bold dark:text-gray-700 text-gray-400 shadow-sm hover:dark:bg-white bg-gray-800"
                >
                  Bootstrap
                </button>
                <button
                  type="button"
                  className="rounded bg-transparent px-4 text-end py-2.5 font-sans font-semibold my-2 text-sm font-bold dark:text-gray-700 text-gray-400 shadow-sm hover:dark:bg-white bg-gray-800"
                >
                  Vuex
                </button>
                <button
                  type="button"
                  className="rounded bg-transparent px-4 text-end py-2.5 font-sans font-semibold my-2 text-sm font-bold dark:text-gray-700 text-gray-400 shadow-sm hover:dark:bg-white bg-gray-800"
                >
                  Golang
                </button>
                <button
                  type="button"
                  className="rounded bg-transparent px-4 text-end py-2.5 font-sans font-semibold my-2 text-sm font-bold dark:text-gray-700 text-gray-400 shadow-sm hover:dark:bg-white bg-gray-800 hidden  sm:inline "
                >
                  Firebase
                </button>
                <button
                  type="button"
                  className="rounded bg-transparent px-4 text-end py-2.5 my-2 text-sm font-bold dark:text-gray-700 text-gray-400 shadow-sm hover:dark:bg-white bg-gray-800"
                >
                  Git
                </button>
              </div>
              <div className="text-start ml-3">
                <a
                  href="https://www.youtube.com/watch?v=TouABCikSVw&t=50s"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    disabled
                    class="cursor-not-allowed rounded-full dark:bg-white bg-gray-800 p-2 text-white shadow-sm "
                  >
                    <img src="https://img.icons8.com/ios-filled/32/12B886/circled-play.png" />
                  </button>
                </a>
                <a
                  href="https://tilaus.apukuski.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="rounded-full ml-3 dark:bg-white bg-gray-800 p-2 text-white shadow-sm hover:dark:bg-white bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    <img src="https://img.icons8.com/ios-filled/32/12B886/circled-up-right-2.png" />
                  </button>
                </a>
              </div>
            </div>

            <div
              data-aos-duration="1000"
              data-aos="zoom-out-left"
              className="md:col-start-4 w-[110%] w-full md:col-end-8 z-auto inset-4 -top-3 relative  hidden  md:block "
            >
              <div
                class="relative w-full overflow-hidden bg-cover bg-no-repeat"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/student-blog-80add.appspot.com/o/personal%2Fapukuski.JPG?alt=media&token=081298e3-228a-4b3a-9c2e-14faf2bba8f5"
                  class="w-full rounded transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out "
                  alt="Louvre"
                />
                <a
                  href="https://tilaus.apukuski.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div class="absolute bottom-0 rounded left-0 right-0 top-0 transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out  h-full w-full overflow-hidden bg-[hsl(142.1,76.2%,36.3%,0.5)] bg-fixed opacity-.9 transition duration-300 ease-in-out hover:opacity-0"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="grid  grid-cols-1 md:grid-cols-8 top-10 mt-0">
            <div
              data-aos-duration="1000"
              data-aos="zoom-out-right"
              className="md:col-start-1 w-[110%] w-full md:col-end-5 z-auto inset-10 -top-0 relative  hidden  md:block "
            >
              <div
                class="relative w-full overflow-hidden bg-cover bg-no-repeat mt-10"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/student-blog-80add.appspot.com/o/personal%2Fdefibids.JPG?alt=media&token=e46fd060-d532-4f2f-ad83-cc827c8887d3"
                  class="w-full rounded top-10  transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out "
                  alt="Louvre"
                />
                <a
                  href="https://defibids.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div class="absolute bottom-0 rounded left-0 right-0 top-0 transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out  h-full w-full overflow-hidden bg-[hsl(142.1,76.2%,36.3%,0.5)] bg-fixed opacity-.9 transition duration-300 ease-in-out hover:opacity-0"></div>
                </a>
              </div>
            </div>
            <div
              data-aos-duration="1000"
              data-aos="zoom-out-left"
              className="md:col-start-5 h-30 md:col-end-8  z-15 inset-0 -top-0 relative mt-12"
            >
              <p className="text-start md:text-end px-5 md:px-0 dark:text-green-700 text-green-400 mt-10 font-sans font-semibold">
                Featured Project
              </p>
              <h1 className="text-2xl text-start md:text-end px-5 md:px-0 font-oswald font-bold  dark:text-gray-700 text-gray-400 sm:text-2xl">
                DefiBids
              </h1>
              <div className=" w-[100%] my-5 rounded dark:bg-white bg-gray-800">
                <p className="p-7 text-start md:text-end font-sans font-semibold dark:text-gray-700 text-gray-400 text-sm">
                  DefiBids is a cryptocurrency auction site that allows users to
                  bid on various tokens and NFTs. The platform utilizes
                  blockchain technology to ensure transparency and security in
                  the bidding process. With DefiBids, users can buy and sell
                  digital assets in a decentralized, peer-to-peer marketplace and my role was <span className="dark:text-green-700 text-green-400">designe</span>
                  
                </p>
              </div>
              <div className="text-start md:text-end">
                <button
                  type="button"
                  className="rounded bg-transparent px-4 text-end py-2.5 font-sans font-semibold my-2 text-sm font-bold dark:text-gray-700 text-gray-400 shadow-sm hover:dark:bg-white bg-gray-800"
                >
                  Node Js
                </button>
                <button
                  type="button"
                  className="rounded bg-transparent px-4 text-end py-2.5 font-sans font-semibold my-2 text-sm font-bold dark:text-gray-700 text-gray-400 shadow-sm hover:dark:bg-white bg-gray-800"
                >
                  Bootstrap
                </button>
                <button
                  type="button"
                  className="rounded bg-transparent px-4 text-end py-2.5 font-sans font-semibold my-2 text-sm font-bold dark:text-gray-700 text-gray-400 shadow-sm hover:dark:bg-white bg-gray-800"
                >
                  Javascript
                </button>
                <button
                  type="button"
                  className="rounded bg-transparent px-4 text-end py-2.5 font-sans font-semibold my-2 text-sm font-bold dark:text-gray-700 text-gray-400 shadow-sm hover:dark:bg-white bg-gray-800"
                >
                  jQuery
                </button>
                <button
                  type="button"
                  className="rounded bg-transparent px-4 text-end py-2.5 my-2 text-sm font-bold dark:text-gray-700 text-gray-400 shadow-sm hover:dark:bg-white bg-gray-800 hidden  sm:inline"
                >
                  Git
                </button>
              </div>
              <div className="text-start md:text-end px-3 md:px-0">
                <a
                  href="https://www.youtube.com/watch?v=Wa4_z28WMa0&list=PLQh5KZyBzNLBNiZyNKXaIsps_acnQTu1W&index=1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    disabled
                    class="cursor-not-allowed rounded-full dark:bg-white bg-gray-800 p-2 text-white shadow-sm "
                  >
                    <img src="https://img.icons8.com/ios-filled/32/12B886/circled-play.png" />
                  </button>
                </a>
                <a
                  href="https://defibids.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="rounded-full ml-3 dark:bg-white bg-gray-800 p-2 text-white shadow-sm hover:dark:bg-white bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    <img src="https://img.icons8.com/ios-filled/32/12B886/circled-up-right-2.png" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
