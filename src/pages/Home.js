import { useState } from "react"
import { useWheel } from "../Context/Wheel"
import About from "../components/About"
import Contact from "../components/Contact"
import Hero from "../components/Hero"
import OtherProject from "../components/OtherProject"
import ProjectInfo from "../components/ProjectInfo"
import Work from "../components/Work"
import '../css/effect.css'




function Home() {
  const [top, setTop] = useState(1)
  const {  wheelPossition, wheel } = useWheel() 
 

    return (  
      <>
          <Hero  /> 
          <About value={wheelPossition}   />  
          <Work   />          
          <ProjectInfo />
          <OtherProject  />
         
          <Contact />
          
        </> 
    )}

export default Home