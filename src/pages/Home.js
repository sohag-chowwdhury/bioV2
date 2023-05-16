import { useState } from "react"
import ReactScrollWheelHandler from "react-scroll-wheel-handler"
import { useWheel } from "../Context/Wheel"
import About from "../components/About"
import Contact from "../components/Contact"
import Hero from "../components/Hero"
import OtherProject from "../components/OtherProject"
import ProjectInfo from "../components/ProjectInfo"
import ScrollText from "../components/ScrollText"
import Work from "../components/Work"
import '../css/effect.css'




function Home() {
  const [top, setTop] = useState(1)
  const {  wheelPossition, wheel } = useWheel() 
 

    return (  
      <>
        <div className="hidden lg:block">  
            <ReactScrollWheelHandler
              downHandler={(e) => {
                setTop(top === 0 || top >  0 ? top+1 : 0)
                wheel(top)
              }}
            >  
              <Hero  /> 
              <About value={wheelPossition}   />  
              <div>
                <ScrollText  value={wheelPossition} />
              </div>  
        </ReactScrollWheelHandler>   
         {top >8 ?<div >
          <Work   />    
          <ProjectInfo />
          <OtherProject  />
          <Contact />
         </div> : ''}
        </div>
        <div className="lg:hidden">       
          <Hero  /> 
          <About value={wheelPossition}   />    
        <div >
          <Work   />    
          <ProjectInfo />
          <OtherProject  />
          <Contact />
         </div> 
        </div>
        
        </> 
    )}

export default Home