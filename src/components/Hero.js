import { Link } from "react-scroll";
import { useWheel } from "../Context/Wheel";

function Hero() {
  const {  wheelPossition } = useWheel() 
  const {  modeValue,  modeSetFunc  } = useWheel() 

  return (
    <div
    className="bg-hero border-b dark:border-gray-200 border-gray-900"
    id="Hero"
  >
     <div className="w-full h-full  dark:bg-gray-100  bg-gray-900/[0.9] backdrop-brightness-40">
   <div className=" grid grid-cols-1  md:grid-cols-6 gap-0 sm:gap-4" id="Hero">
  <div class="absolute right-[28%] top-0 hidden h-[150px] w-[200px] rotate-12 rounded-3xl bg-gradient-to-l from-blue-600 to-sky-400 opacity-20 blur-3xl filter dark:block dark:opacity-30 lg:top-44 lg:-right-20 lg:h-72 lg:w-[350px] xl:h-80 xl:w-[500px]"></div>
  <div class="absolute bottom-44 -left-64 hidden h-[150px] w-[900px] -rotate-45 rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-800 opacity-30 blur-3xl filter dark:block lg:bottom-24 lg:-left-20 lg:h-28 lg:w-[250px] lg:-rotate-12 lg:opacity-20 xl:h-40 xl:w-[400px]"></div>
  <div class="absolute left-[28%] top-28 hidden rotate-12 rounded-3xl bg-sky-800 opacity-90 blur-3xl filter dark:opacity-30 lg:h-32 lg:w-[450px] dark:lg:block xl:h-44 xl:w-[600px]"></div>
  <div class="absolute h-16 w-[600px] rotate-[-40deg] rounded-3xl bg-sky-400 opacity-10 blur-2xl filter dark:hidden lg:bottom-24 lg:-left-28 lg:h-12 lg:w-[600px] lg:opacity-30 lg:blur-2xl xl:-left-40 xl:h-4 xl:w-[700px] xl:opacity-100"></div>
  <div class="absolute right-[28%] top-0 hidden h-[150px] w-[200px] rotate-12 rounded-3xl bg-gradient-to-l from-blue-600 to-sky-400 opacity-20 blur-3xl filter dark:block dark:opacity-30 lg:top-44 lg:-right-20 lg:h-72 lg:w-[350px] xl:h-80 xl:w-[500px]"></div>
  <div class="absolute h-14 w-[600px] rotate-[-40deg] rounded-3xl bg-purple-400 opacity-30 blur-2xl filter dark:hidden lg:bottom-20 lg:-left-28 lg:h-10 lg:w-[600px] lg:opacity-20 lg:blur-xl xl:-left-40 xl:h-2 xl:w-[800px] xl:opacity-100"></div>
  <div class="absolute hidden h-16 w-[600px] rotate-[-40deg] rounded-3xl bg-sky-400 opacity-10 blur-2xl filter dark:hidden lg:top-24 lg:-right-28 lg:block lg:h-12 lg:w-[600px] lg:opacity-30 lg:blur-2xl xl:-right-40 xl:h-4 xl:w-[700px] xl:opacity-100"></div>
  <div class="absolute hidden h-14 w-[600px] rotate-[-40deg] rounded-3xl bg-purple-400 opacity-30 blur-2xl filter dark:hidden lg:top-20 lg:-right-28 lg:block lg:h-10 lg:w-[600px] lg:opacity-20 lg:blur-xl xl:-right-40 xl:h-2 xl:w-[800px] xl:opacity-100"></div>

     <div className="  md:col-start-1  md:col-endt-8 lg:col-start-2 col-span-4 p-10 lg:max-w-5xl lg:col-end-4 sm:max-w-5xl py-5 sm:py-48 lg:py-56 ">
       <p className="mt-6 text-lg py-5 dark:text-green-900 font-sans mx-0 sm:mx-2 leading-8 text-green-300">
         Hi, my name is
       </p>
       <h1 className="text-4xl font-oswald font-bold  dark:text-gray-700 text-gray-300 sm:text-6xl">
         Sohag <span className="dark:text-gray-900 text-gray-400">Chowdhury.</span>
       </h1>
       <h1 className="text-2xl mt-7 font-sans font-bold dark:text-neutral-900  text-gray-500 sm:text-4xl">
         Frontend engineer, Designer.
       </h1>

       <p className="mt-6 text-sm sm:text-md dark:text-neutral-800  font-sans font-bold  leading-12 text-gray-400">
         I build things for the web.I enjoy creating frontend solutions that
         are stable, scalable, and have excellent user experience.
       </p>
       <div className="mt-10 flex items-center justify-start">
         <Link
           key="Contact"
         
           to="Contact"
          
           spy={true}
           smooth={true}
           offset={-80}
           duration={1000}
           className="text-gray-300   ,
                 'rounded-md sm:px-0 py-2 text-sm font-medium"
         >
           <button
             type="button"
             className="rounded px-12 sm:px-14 py-2 sm:py-3 dark:bg-gray-100 bg-gray-800 text-sm font-semibold dark:text-gray-800 text-green-300 shadow-sm ring-1 ring-inset ring-green-300 hover:bg-gray-700 dark:ring-gray-300 hover:border-bottom-4"
           >
             Contact
           </button>
         </Link>
         
       </div>
     </div>
     <div className='lg:col-start-4  md:-mt-[40%] lg:mt-[40%] xl:mt-[48%] 2xl:mt-[35%] col-span-4 xl:p-10  lg:max-w-5xl lg:col-end-6 sm:max-w-5xl py-5 sm:py-48 lg:py-56'>
      <span className="ml-5  sm:ml-8 md:ml-6 lg:ml-5   xl:ml-5 2xl:ml-7">
       
        
        <button className=" dark:bg-gray-300 bg-gray-800 border-r-2 border-gray-700 px-4 py-2 inline text-xs font-semibold dark:text-green-700 text-green-300">Vue js</button>
        
        <button className=" dark:bg-gray-300 bg-gray-800  border-r-2 border-gray-700 px-4 py-2 text-xs font-semibold dark:text-cyan-700 text-cyan-500">React js</button>
        <button className="  dark:bg-gray-300 bg-gray-800 px-4 py-2 text-xs font-semibold  border-r-2 border-gray-700 dark:text-green-700 text-green-300">Node js</button>
        <button className=" dark:bg-gray-300  bg-gray-800 px-4 py-2 text-xs font-semibold sm:hidden lg:hidden xl:inline dark:text-gray-700 text-gray-500">Express</button>
      </span> 
      <span className={`${modeValue === 'dark' ? 'hidden' : ''}`}>
      <img className="border-8 border-gray-700 w-full -mt-2 sm:-mt-5 md:-mt-3 lg:-mt-2 xl:-mt-3" src="https://flaviocopes.com/images/vue-vscode/vue-file-with-vetur.png"></img>
      </span>
      <span className={`${modeValue === 'dark' ? '' : 'hidden'}`}>
      <img className="border-8 !drak border-gray-700 w-full -mt-2 sm:-mt-5 md:-mt-3 lg:-mt-2 xl:-mt-3" src="https://orta.io/vscode-themes/images//Macaroon%20Theme.png"></img>
      </span>
    
     </div>
    
   </div>
  
   </div>
   
   </div>


    




   
  );
}

export default Hero;
