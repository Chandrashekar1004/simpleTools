import React, {useState} from "react";
import "./Changecolor.css"
function Changecolor({ stopcolor, setStopcolor,color, countercolor ,setColor, setCountercolor }) {
  const [textcolor,setTextcolor]=useState("#FFFFFF")
  
  function handlechangecolor(event) {
    setColor(event.target.value); 
    setTextcolor(event.target.value)
  }

  function handlechangecountercolor(event) {
    setCountercolor(event.target.value); 
  }

  function handlechangestopcolor(event) {
    setStopcolor(event.target.value); 
  }

  return (
    <div className="colorsetting">
      <label style={{color:textcolor}}>Change Side bar text color:</label>
      <input
        type="color"
        value={color}
        onChange={handlechangecolor}
        style={{ height: "40px", width: "100px", margin:"10px" }}
      />
      <label style={{color:textcolor}}>Change Counter Color:</label>
      <input
        type="color"
        value={countercolor}
        onChange={handlechangecountercolor}
        style={{ height: "40px", width: "100px", margin:"10px" }}/>

      <label style={{color:textcolor}}>Change Stopwatch Color:</label>
      <input
        type="color"
        value={stopcolor}
        onChange={handlechangestopcolor}
        style={{ height: "40px", width: "100px", margin:"10px" }}/>
    </div>
  );
}

export default Changecolor;
