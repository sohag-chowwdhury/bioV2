import { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { useWheel } from "../src/Context/Wheel";
import Cursor from "./components/Cursor";
import LeftHand from "./components/LeftHand";
import Load from "./components/Load";
import Navbar from "./components/Navbar";
import RightHand from "./components/RightHand";
import Home from "./pages/Home";


function App() {
  const [load, setLoad] = useState(true);
  const [theme, setTheme]= useState(null)
  const {  modeValue  } = useWheel() 
  useEffect(()=>{
    if(modeValue ==='dark' ){
      console.log('asdk')
      document.documentElement.classList.add('dark')
    }
    else {
      document.documentElement.classList.remove('dark')
    }
  },[modeValue])
  useEffect(() => {
   
    setInterval(() => {
      setLoad(false);
    }, 3300);

  },[]);
  
  if (load) {
     return <Load/>
  } else {
    return (
      <HashRouter>
        <div className=" relative overflow-hidden dark:bg-gray-100 bg-gray-900">
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >  
            <Cursor/>
            <RightHand />
            <LeftHand />
            <Navbar /> 
            <Routes>
              <Route exact path="/" element={<Home />} />
             
            </Routes>
           
          
          </div>
          
        </div>
      </HashRouter>
    );
  }
}

export default App;
