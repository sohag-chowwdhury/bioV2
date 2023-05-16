var style = {
    position: "fixed",
    right: "1%",
    top: "8%",
    width: "14em"
    
  };
  
  function RightHand({value}) {
    return ( 
      <div
      className={`${value >6 || value ===1  ? 'hidden' : 'hidden lg:block  w3-animate-right'}`}>
        
        <div style={style} className={`${value <2 ? 'grid bg-slate-800 grid-cols-1 p-2 rounded  w3-animate-right' : 'grid bg-slate-800 grid-cols-2 p-2 rounded  w3-animate-right' }`}>
          <div className={`${value <2 ? 'hidden  w3-animate-right' : 'grid bg-slate-800 grid-cols-2 ml-3 text-sm font-bold font-oswald text-green-300  w3-animate-right' }`}  >
            <ul className="list-disc">
                <li  className={`${value <3 ? 'hidden' :'mt-2  w3-animate-right'}`}>Intro</li>
                <li className={`${value <4 ? 'hidden' :'mt-2  w3-animate-right'}`}>profession</li>
                <li className={`${value <5 ? 'hidden' :'mt-2  w3-animate-right'}`}>Goals</li>
                <li className={`${value <6 ? 'hidden' :'mt-2  w3-animate-right'}`}>Education</li>
                <li className={`${value <7 ? 'hidden' :'mt-2  w3-animate-right'}`}>Skils</li>
            </ul>
          </div>
          <div   className={`${value > 6 ? 'hidden' : 'grid bg-slate-800 grid-cols-2 ml-3 text-sm font-bold font-oswald text-gray-300' }`} >
            <ul className="list-disc">
                <li className={`${value >2 ? 'hidden' :'mt-2  w3-animate-right'}`}>Intro</li>
                <li className={`${value >3 ? 'hidden' :'mt-2'}  w3-animate-right`}>profession</li>
                <li className={`${value >4 ? 'hidden' :'mt-2'}  w3-animate-right`}>Goals</li>
                <li className={`${value >5 ? 'hidden' :'mt-2'}  w3-animate-right`}>Education</li>
                <li className={`${value >6 ? 'hidden' :'mt-2'}  w3-animate-right`}>Skils</li>
            </ul>
          </div>
         
        </div>
        
      </div>
    );
  }
  
  export default RightHand;
  