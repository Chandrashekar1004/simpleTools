import React, {useState} from "react"
import "./Buttons.css"
 function Buttons({countercolor}) {
  
  const [count,setCount]=useState(0);

  const Inc = () => {
    setCount((prevCount) => prevCount + 1);
  };
  
  const Dec = () => {
    setCount((prevCount) => prevCount - 1);
  };
  

  const reset=()=>{
    setCount(0)
  };

  return (
    <div className="Counter">
      <h1 className="count">
        <span className="label">COUNT:</span>
        <span className="countValue">{count}</span>
      </h1>
      
      <div className="button" style={{backgroundColor:countercolor}}>
        <button className="Decrement" onClick={Dec}>-</button>
        <button className="Reset" onClick={reset}>0</button>
        <button className="Increment" onClick={Inc}>+</button>
      </div>
    </div>
  )
}

export default Buttons
