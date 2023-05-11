import About from "../components/About"
import Contact from "../components/Contact"
import Hero from "../components/Hero"
import OtherProject from "../components/OtherProject"
import ProjectInfo from "../components/ProjectInfo"
import Work from "../components/Work"


function Home() {
    return (
         <div >
            
          <Hero/>
          <About/>
          <Work/>
          <ProjectInfo/>
          <OtherProject/>
          <Contact/>
         </div>
    )}

export default Home