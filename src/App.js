import { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import { HashRouter, Route, Routes } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { Waypoint } from 'react-waypoint';
import { WheelProvider } from "./Context/Wheel";
import LeftHand from "./components/LeftHand";
import Navbar from "./components/Navbar";
import RightHand from "./components/RightHand";
import Home from "./pages/Home";



function App() {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setLoad(false);
    }, 3300);
  }, []);
  if (load) {
    return (
      <div
        className="bg-gray-900 pt-[58%] content-center sm:pt-[25%]"
        style={{ height: "100vh" }}
      >
        <div style={{ margin: "auto" }}>
          <img
            className="w-28	 m-auto"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/74c5bbe5-3f63-4716-a290-efa5c0c1a370/dcn4y06-7330d595-3447-4fc6-a54a-d93de1a02fbd.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc0YzViYmU1LTNmNjMtNDcxNi1hMjkwLWVmYTVjMGMxYTM3MFwvZGNuNHkwNi03MzMwZDU5NS0zNDQ3LTRmYzYtYTU0YS1kOTNkZTFhMDJmYmQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.W_w8MS7BH1LDoxRg0pAMGhgip24WKXry81MsrMafC3I"
          ></img>
          <h1 style={{ textAlign: "center" }}>
            <TypeAnimation
              className="text-xl font-oswald font-bold  text-green-400 sm:text-xl"
              sequence={[
                "Javascript", // Types 'One'
                300, // Waits 1s
                "React", // Deletes 'One' and types 'Two'
                700, // Waits 2s
                "Vue",
                1200,
                "Vue", // Types 'Three' without deleting 'Two'
              ]}
              wrapper="span"
              cursor={false}
              repeat={Infinity}
            />
          </h1>
        </div>
      </div>
    );
  } else {
    return (
      <HashRouter>
        <Waypoint onEnter={({ previousPosition, currentPosition, event }) => {
          console.log(previousPosition, currentPosition, event)
  }}
/>
        <LeftHand />
        <WheelProvider>
        <div className="bg-gray-900">
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <AnimatedCursor
              innerSize={10}
              outerSize={8}
              color="14, 164, 54"
              outerAlpha={0.2}
              innerScale={0.7}
              outerScale={10}
              clickables={[
                "a",
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                "label[for]",
                "select",
                "textarea",
                "img",
                "h1",
                "button",
                ".link",
              ]}
            />
            <RightHand />

            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
            </Routes>
           
          
          </div>
          
        </div>
        </WheelProvider>
      </HashRouter>
    );
  }
}

export default App;
