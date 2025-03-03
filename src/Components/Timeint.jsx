import React, { useState, useEffect } from "react";
import Timer from './Timer';

function Timeint() {
    const [display,setDisplay]=useState(true);

    useEffect(()=>{
      const timer= setInterval(()=>{
            setDisplay(!display);
        },10000)
        return () => clearInterval(timer);
    },[])
  return (
    <div>
        {display === true && <p>You are in safe zone</p>}
      
    </div>
  )
}
export default Timeint;
