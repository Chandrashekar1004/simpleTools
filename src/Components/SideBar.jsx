import React from 'react';
import "./SideBar.css";
import Clock from './Clock';
import Timeint from './Timeint';
import Changecolor from './Changecolor';
function SideBar({ setActiveComponent,color }) {  
  
  return (
    <div className='sidebar' style={{color:color}}>
      <h1 className='Options' onClick={() => setActiveComponent("counter")}>Counter</h1>
      {/* <hr className='line' /> */}
      <h1 className='Options' onClick={() => setActiveComponent("stopwatch")}>Stop Watch</h1>
      {/* <hr className='line' /> */}
      <h1 className='Options' onClick={() => setActiveComponent("timer")}>Timer</h1>
      <h1 className='Options' onClick={() => setActiveComponent("World")}>World Clock</h1>
      <h1 className='Options' onClick={() => setActiveComponent("Change Color")}>Change Color</h1>
      <hr className='line' />
      {/* <Timeint></Timeint> */}
      <Clock color={color}></Clock>
    </div>
  );
}

export default SideBar;
