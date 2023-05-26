import { useState } from "react"
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
        
              <Hero  /> 
              <About value={wheelPossition}   />  
                <ScrollText  value={wheelPossition} />
        
          <Work   />    
          <ProjectInfo />
          <OtherProject  />
          <Contact />
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