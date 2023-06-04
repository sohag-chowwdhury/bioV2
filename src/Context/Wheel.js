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
      else setwheelPossition(15)
    
    })
    const [wheelPossition, setwheelPossition] = useState(1);
    const [modeValue, setModeValue] = useState('light');
    function wheel(payload) {
      const count = payload
      setwheelPossition(count)     
    }  
    function modeSetFunc(payload) {
      console.log(payload)
      const mode = payload
      setModeValue(mode)     
    }  
    const value = {
      wheelPossition,
      wheel, 
      modeValue,
      modeSetFunc
      
    }; 
    return (
      <WheelContext.Provider value={value}>
        {children}
      </WheelContext.Provider>
    );
  }