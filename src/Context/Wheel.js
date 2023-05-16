import { createContext, useContext, useEffect, useState } from "react";
  const WheelContext = createContext();
  export function useWheel() {
    return useContext(WheelContext);
  }
  
  export function WheelProvider({ children }) {
    useEffect(()=>{
      if(window.innerWidth < 1025 ) {
        setwheelPossition(15)
      }
    
    })
    const [wheelPossition, setwheelPossition] = useState(1);
    function wheel(payload) {
      const count = payload
      setwheelPossition(count)     
    }  
    const value = {
      wheelPossition,
      wheel
      
    }; 
    return (
      <WheelContext.Provider value={value}>
        {children}
      </WheelContext.Provider>
    );
  }