import { Link } from "react-scroll";
import { useWheel } from "../Context/Wheel";

function Hero() {
  const {  wheelPossition } = useWheel() 

  return (
     <div
    className="bg-hero"
    id="Hero"
  >
     <div className="w-full h-full   bg-gray-900/90 backdrop-brightness-40">
    <div className=" grid grid-cols-1  md:grid-cols-6 gap-0 sm:gap-4" id="Hero">
      <div className="lg:col-start-2 col-span-4 p-10 lg:max-w-5xl lg:col-end-5 sm:max-w-5xl py-5 sm:py-48 lg:py-56">
        <p className="mt-6 text-lg py-5 font-sans mx-0 sm:mx-2 leading-8 text-green-300">
          Hi, my name is
        </p>
        <h1 className="text-4xl font-oswald font-bold  text-gray-400 sm:text-6xl">
          Sohag Chowdhury.
        </h1>
        <h1 className="text-2xl mt-7 font-sans font-bold  text-gray-500 sm:text-4xl">
          Frontend engineer, Designer.
        </h1>

        <p className="mt-6 text-sm sm:text-md font-sans font-bold  leading-12 text-gray-400">
          I build things for the web.I enjoy creating frontend solutions that
          are stable, scalable, and have excellent user experience.
        </p>
        <div className="mt-10 flex items-center justify-start gap-x-6">
          <Link
            to="Contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={1000}
            className="text-gray-300  ,
                        'rounded-md px-3 py-2 text-sm font-medium"
          >
            <button
              type="button"
              className="rounded px-14 py-3 bg-gray-800 text-sm font-semibold text-green-300 shadow-sm ring-1 ring-inset ring-green-300 hover:bg-gray-700 hover:border-bottom-4"
            >
              Contact
            </button>
          </Link>
          <a
            href="#"
            className="rounded-md  px-12 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          ></a>
        </div>
      </div>
      <div className={`${ wheelPossition < 8 ? 'lg:col-start-5 hidden lg:block col-span-4 p-10 mt-8 lg:max-w-5xl lg:col-end-6 sm:max-w-5xl py-5 sm:py-48 lg:py-56' : 'hidden'}`}>
      <img className="mt-12 w-36 " src="https://www.limos4.com/wp-content/uploads/2021/09/mouse-1.gif"></img>
      </div>
     
    </div>
    </div>
    </div>
  );
}

export default Hero;
