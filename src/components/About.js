import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/aboutStyle.css";
import "../css/effect.css";

export default function Example( {value}) {
  return (
    <>
     
            <div id="About"  className=" grid grid-cols-1 mt-12 mx-3 bg-gray-900  lg:grid-cols-8 gap-4">
               
        <div className="lg:col-start-2 lg:min-h-[550px] mt-4 min-h-96  px-5 sm:px-12 lg:col-end-6">
          <div   className={`${value <2  ? 'hidden':'relative'}`} >
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-[40%] ml-[36%] sm:ml-[40%] md:ml-[35%] lg:ml-[45%] lg:mt-6 xl:ml-[50%] 2xl:ml-[30%] xl:mt-8 2xl:mt-12 border-t-2 border-gray-700" />
            </div>
            <div  className="relative flex justify-start animated">
              <h1  className={`${value  ===2 ? 'text-2xl lg:mt-[5%] 2xl:-[0%] font-oswald font-bold  text-gray-300 sm:text-3xl md:text-5xl' : 'text-2xl font-oswald font-bold lg:mt-[5%] 2xl:-[0%] text-gray-400 sm:text-3xl md:text-4xl' }`}>
             
                <span className="text-green-400 font-semibold">01. </span> About
                Me
              </h1>
            </div>
          </div>
          <p   className={`${value < 8 ? 'mt-3   text-sm sm:text-lg font-oswald font-bold  leading-10 text-gray-400 3-animate-right' : 'mt-3   text-sm sm:text-md font-sans font-bold  leading-10 text-gray-400 3' }`}>
          <span className={`${value <3  ? 'hidden':''}`}>
             <div  className="w3-animate-left">
            Hello! I'm Sohag, and I enjoy creating things for the internet. My
            interest in web development first started in 2017 when I made the
            decision to try developing a podcaster.
             </div>
             </span>

             
            <span className={`${value <4  ? 'hidden':''}`}>
            <div  className={`${value  <8 ? 'mt-3   text-sm sm:text-lg font-oswald font-bold  leading-10 text-gray-400 w3-animate-left' : 'mt-3   text-sm sm:text-md font-sans font-bold  leading-10 text-gray-400 ' }`}>
           
            As a sophisticated
            <span className="text-green-400 font-semibold">

              full-stack web app developer,
            
            </span>
            </div>
            </span>

            <span className={`${value <5  ? 'hidden':''}`}>
             <div className={`${value <8 ? 'mt-1   text-sm sm:text-lg font-oswald font-bold  leading-10 text-gray-400 w3-animate-right' : 'mt-3   text-sm sm:text-md font-sans font-bold  leading-10 text-gray-400 ' }`}  >
            
             I understand what it takes to develop your idea with dependable
            solutions that's take you closer to your goals . I have managed
            projects in my previous jobs, I have the experience of suggesting
            better solutions rather than jumping straight to projects that will
            have no impact on visitors. Whether it is a small SPA or an
            enterprise level project, me and my team aspire to get the best
            result for your endeavor
           
             </div>
             </span>
             <span className={`${value <6  ? 'hidden':''}`}>
            <div className={`${value  <8 ? 'mt-1   text-sm sm:text-lg font-oswald font-bold  leading-10 text-gray-400 w3-animate-left' : 'mt-3   text-sm sm:text-md font-sans font-bold  leading-10 text-gray-400 ' }`}>
           
            <p className={`${value  <8 ? 'mt-1   text-sm sm:text-lg font-oswald font-bold  leading-10 text-green-400 w3-animate-left' : 'mt-3   text-sm sm:text-md font-sans font-bold  leading-10 text-green-400 ' }`}>
              Education:
            </p>
            <p className={`${value  <8 ? 'mt-1   text-sm sm:text-lg font-oswald font-bold  leading-10 text-gray-400 w3-animate-left' : 'mt-3   text-sm sm:text-md font-sans font-bold  leading-10 text-gray-400 ' }`}>
              United International University(UIU)-
              <span>
                Bachelor of Science (B.Sc.), Computer Science and
                Engineering(CSE)
              </span>
            </p>
            <p className={`${value  <8 ? 'mt-1   text-sm sm:text-lg font-oswald font-bold  leading-10 text-gray-400 w3-animate-left' : 'mt-3   text-sm sm:text-md font-sans font-bold  leading-10 text-gray-400 ' }`}>
              BCIC College-<span>Higher Secondary, Science(HSC)</span>
            </p>
           
            
            <span className={`${value  <8 ? 'mt-3   text-sm sm:text-lg font-oswald font-bold  leading-10 text-gray-400 w3-animate-left' : 'mt-3   text-sm sm:text-md font-sans font-bold  leading-10 text-gray-400 ' }`}>
             
              Here are a few technologies I’ve been working with recently:
            </span>
            
            </div>
            </span>
           
           
          </p>
          <span className={`${value <7  ? 'hidden':''}`}>
          <div  className="grid grid-cols-2">
            <div className={`${value < 8 ? 'mt-2   text-sm sm:text-lg font-oswald font-bold  leading-10 text-gray-400 w3-animate-left' : 'mt-3   text-sm sm:text-md font-sans font-bold  leading-10 text-gray-400 ' }`} >
              <p className={`${value < 8 ? 'mt-2   text-sm sm:text-lg font-oswald font-bold  leading-10 text-gray-400 w3-animate-left' : 'font-sans text-sm  leading-8 text-gray-500 font-semibold' }`}>
                <FontAwesomeIcon
                  className="text-green-400 font-semibold mx-2"
                  icon={faArrowAltCircleRight}
                />
                Vue
              </p>
              <p className={`${value < 8 ? 'mt-2   text-sm sm:text-lg font-oswald font-bold  leading-10 text-gray-400 w3-animate-left' : 'font-sans text-sm  leading-8 text-gray-500 font-semibold' }`}>
               
                <FontAwesomeIcon
                  className="text-green-400 font-semibold mx-2"
                  icon={faArrowAltCircleRight}
                />
                React
              </p>
              <p className={`${value < 8 ? 'mt-2   text-sm sm:text-lg font-oswald font-bold  leading-10 text-gray-400 w3-animate-left' : 'font-sans text-sm  leading-8 text-gray-500 font-semibold' }`}>
                
                <FontAwesomeIcon
                  className="text-green-400 font-semibold mx-2"
                  icon={faArrowAltCircleRight}
                />
                Vuex
              </p>
              <p className={`${value < 8 ? 'mt-2   text-sm sm:text-lg font-sans font-oswald  leading-10 text-gray-400 w3-animate-left' : 'font-sans text-sm  leading-8 text-gray-500 font-semibold' }`}>
                
                <FontAwesomeIcon
                  className="text-green-400 font-semibold mx-2"
                  icon={faArrowAltCircleRight}
                />
                Redux
              </p>
            </div>
            <div className=" w3-animate-right">
              <p className={`${value < 8 ? 'mt-2   text-sm sm:text-lg font-oswald font-bold  leading-10 text-gray-400 w3-animate-left' : 'font-sans text-sm  leading-8 text-gray-500 font-semibold' }`}>
                
                <FontAwesomeIcon
                  className="text-green-400 font-semibold mx-2"
                  icon={faArrowAltCircleRight}
                />
                Javascript
              </p>
              <p className={`${value < 8 ? 'mt-2   text-sm sm:text-lg font-oswald font-bold  leading-10 text-gray-400 w3-animate-left' : 'font-sans text-sm  leading-8 text-gray-500 font-semibold' }`}>
                
                <FontAwesomeIcon
                  className="text-green-400 font-semibold mx-2"
                  icon={faArrowAltCircleRight}
                />
                Node js
              </p>
              <p className={`${value < 8 ? 'mt-2   text-sm sm:text-lg font-oswald font-bold  leading-10 text-gray-400 w3-animate-left' : 'font-sans text-sm  leading-8 text-gray-500 font-semibold' }`}>
                
                <FontAwesomeIcon
                  className="text-green-400 font-semibold mx-2"
                  icon={faArrowAltCircleRight}
                />
                Nuxt js
              </p>
              <p className={`${value < 8 ? 'mt-2   text-sm sm:text-lg  font-oswald  leading-10 text-gray-400 w3-animate-left' : 'font-sans text-sm  leading-8 text-gray-500 font-semibold' }`}>
                
                <FontAwesomeIcon
                  className="text-green-400 font-semibold mx-2"
                  icon={faArrowAltCircleRight}
                />
                Next js
              </p>
            </div>
          </div>
          </span>
        </div>

        <div
          data-aos-duration="1000"
          data-aos="zoom-out-right"
          className="lg:col-start-2 mt-12 lg:hidden  mx-10 sm:mx-10  lg:col-end-6"
        >
          <img
            className="img_d font-semibold transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out"
            src="https://firebasestorage.googleapis.com/v0/b/student-blog-80add.appspot.com/o/personal%2FsohagJpg-PhotoRoom.png?alt=media&token=7197bdfd-42ea-46fe-8a62-778a73771513"
            style={{ "--c": "#668284", "--b": "1px", "--s": "18px" }}
            alt="an old car"
          />
        </div>
        <div
          data-aos-duration="1000"
          data-aos="zoom-out-right"
          className="lg:col-start-6 hidden lg:block  mt-12 min-h-full px-2 lg:min-h-[500px] xl:min-h-[600px] 2xl:min-h-[760px]   mx-10 sm:mx-0  lg:col-end-8">
     
          <div className={`${value <4 || value === 8 || value ===9 || value === 10 ? 'hidden':'load -mt w3-animate-left'}`}><img  src="https://www.kidlo.com/html5_games/loading_for_game.gif"></img>
          </div>
          <div className={`${value <4  ? 'hidden':'pc -mt w3-animate-left'}`}><img  src="https://firebasestorage.googleapis.com/v0/b/student-blog-80add.appspot.com/o/personal%2Fpc.png?alt=media&token=7ff8a5d1-18d7-4bd5-8280-73e0975f13"></img>
          </div>
          <div  className={`${value <3  ? 'hidden':'table  w3-animate-right'}`}>
          <img  src="https://firebasestorage.googleapis.com/v0/b/student-blog-80add.appspot.com/o/personal%2Ftable.png?alt=media&token=1b85a77a-bae5-4b15-ba54-fd0dcc9f2498"></img>
          </div> 

          <div  className={`${value <2  ? 'hidden':'man  w3-animate-left'}`} >
         <img  src="https://www.adlsmartcare.co.uk/adlsmartcare/Upload/products/Tricep_stretch_M.gif"></img>
          </div>
          <div  className={`${value <5  ? 'hidden':'leftTop  w3-animate-right'}`} ><img  src="https://firebasestorage.googleapis.com/v0/b/student-blog-80add.appspot.com/o/personal%2FleftTop.png?alt=media&token=c843563f-058b-4f74-a7f7-c82cf15634e0"></img></div>

          <div  className={`${value <6  ? 'hidden':'rightTop  w3-animate-left'}`}><img  src="https://firebasestorage.googleapis.com/v0/b/student-blog-80add.appspot.com/o/personal%2FrightTop.png?alt=media&token=8160a8b6-41d2-44e7-9e7c-11ba299322be"></img></div>

          <div  className={`${value <7  ? 'hidden':'watch  w-72 w3-animate-right'}`} ><img  src=" https://img1.picmix.com/output/stamp/normal/7/2/3/5/1025327_a3b85.gif"></img></div>
          <div  className={`${value <8  ? 'hidden':'cat w3-animate-right'}`} ><img  src=" https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1f4b028b-04bb-483b-a43f-c3dd3b534171/de8du00-897fcf95-21d7-4f84-94d2-384890e888d4.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFmNGIwMjhiLTA0YmItNDgzYi1hNDNmLWMzZGQzYjUzNDE3MVwvZGU4ZHUwMC04OTdmY2Y5NS0yMWQ3LTRmODQtOTRkMi0zODQ4OTBlODg4ZDQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.EJQt2rrw6N1l83XA-CKrVHSnuKZVwiPPlt6q0I1gMw4"></img></div>
        

        </div>
        </div>
       
    </>
  );
}
