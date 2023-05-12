import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/aboutStyle.css";

export default function Example() {
  return (
    <>
      <div
        className="grid grid-cols-1 mt-12 mx-3  lg:grid-cols-8 gap-4"
        id="About"
      >
        <div className="lg:col-start-2 mt-4  px-5 sm:px-12 lg:col-end-6">
          <div className="relative">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-[50%] ml-[40%] sm:ml-[35%] md:ml-[40%] lg:ml-[45%] xl:ml-[40%] 2xl:ml-[30%] border-t-2 border-gray-700" />
            </div>
            <div className="relative flex justify-start">
              <h1 className="text-2xl font-oswald font-bold  text-gray-400 sm:text-3xl md:text-4xl">
                {" "}
                <span className="text-green-400 font-semibold">01. </span> About
                Me{" "}
              </h1>
            </div>
          </div>
          <p className="mt-6  text-sm sm:text-md font-sans font-bold  leading-10 text-gray-400">
            Hello! I'm Sohag, and I enjoy creating things for the internet. My
            interest in web development first started in 2017 when I made the
            decision to try developing a podcaster.
            <br />
            As a sophisticated{" "}
            <span className="text-green-400 font-semibold">
              {" "}
              full-stack web app developer
            </span>{" "}
            & I understand what it takes to develop your idea with dependable
            solutions that's take you closer to your goals . I have managed
            projects in my previous jobs, I have the experience of suggesting
            better solutions rather than jumping straight to projects that will
            have no impact on visitors. Whether it is a small SPA or an
            enterprise level project, me and my team aspire to get the best
            result for your endeavor
            <br />
            <p className="text-sm sm:text-md font-sans font-bold mt-2  leading-2 text-green-400">
              Education:
            </p>
            <p className="text-sm sm:text-md font-sans font-bold mt-2  leading-2 text-gray-400">
              United International University(UIU)-
              <span>
                Bachelor of Science (B.Sc.), Computer Science and
                Engineering(CSE)
              </span>
            </p>
            <p className="text-sm sm:text-md font-sans font-bold  leading-2 mt-2 text-gray-400">
              BCIC College-<span>Higher Secondary, Science(HSC)</span>
            </p>
            <br />
            <span className="text-green-400 font-semibold my-2">
              {" "}
              Here are a few technologies I’ve been working with recently:
            </span>
            <br />
          </p>
          <div className="grid grid-cols-2">
            <div className="mt-2">
              <p className="font-sans text-sm  leading-8 text-gray-500 font-semibold">
                <FontAwesomeIcon
                  className="text-green-400 font-semibold mx-2"
                  icon={faArrowAltCircleRight}
                />
                Vue
              </p>
              <p className="font-sans text-sm  leading-8 text-gray-500 font-semibold">
                {" "}
                <FontAwesomeIcon
                  className="text-green-400 font-semibold mx-2"
                  icon={faArrowAltCircleRight}
                />
                React
              </p>
              <p className="font-sans  text-sm leading-8 text-gray-500 font-semibold">
                {" "}
                <FontAwesomeIcon
                  className="text-green-400 font-semibold mx-2"
                  icon={faArrowAltCircleRight}
                />
                Vuex
              </p>
              <p className="font-sans  text-sm leading-8 text-gray-500 font-semibold">
                {" "}
                <FontAwesomeIcon
                  className="text-green-400 font-semibold mx-2"
                  icon={faArrowAltCircleRight}
                />
                Redux
              </p>
            </div>
            <div>
              <p className="font-sans text-sm  leading-8 text-gray-500 font-semibold">
                {" "}
                <FontAwesomeIcon
                  className="text-green-400 font-semibold mx-2"
                  icon={faArrowAltCircleRight}
                />
                Javascript
              </p>
              <p className="font-sans  text-sm leading-8 text-gray-500 font-semibold">
                {" "}
                <FontAwesomeIcon
                  className="text-green-400 font-semibold mx-2"
                  icon={faArrowAltCircleRight}
                />
                Node js
              </p>
              <p className="font-sans  text-sm leading-8 text-gray-500 font-semibold">
                {" "}
                <FontAwesomeIcon
                  className="text-green-400 font-semibold mx-2"
                  icon={faArrowAltCircleRight}
                />
                Nuxt js
              </p>
              <p className="font-sans text-sm leading-8 text-gray-500 font-semibold">
                {" "}
                <FontAwesomeIcon
                  className="text-green-400 font-semibold mx-2"
                  icon={faArrowAltCircleRight}
                />
                Next js
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos-duration="1000"
          data-aos="zoom-out-right"
          className="lg:col-start-6 mt-12   mx-10 sm:mx-0  lg:col-end-8"
        >
          <img
            className="img_d font-semibold transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out"
            src="https://firebasestorage.googleapis.com/v0/b/student-blog-80add.appspot.com/o/personal%2FsohagJpg-PhotoRoom.png?alt=media&token=7197bdfd-42ea-46fe-8a62-778a73771513"
            style={{ "--c": "#668284", "--b": "1px", "--s": "18px" }}
            alt="an old car"
          />
        </div>
      </div>
    </>
  );
}
