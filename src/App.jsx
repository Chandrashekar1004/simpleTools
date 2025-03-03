import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Buttons from './Components/Buttons';
import SideBar from './Components/SideBar';  
import StopWatch from './Components/StopWatch';
import Timer from './Components/Timer';
import Clock from './Components/Clock';
import Timeint from './Components/Timeint';
import WorldClock from './Components/WorldClock';
import Changecolor from './Components/Changecolor';
function App() {
  const [activeComponent, setActiveComponent] = useState("counter");
  const [color,setColor]=useState("#FFFFFF");
  const [countercolor,setCountercolor]=useState("#000000")
  const [stopcolor,setStopcolor]=useState("#0000FF")

  return (
    <>
      <Header />
      <SideBar setActiveComponent={setActiveComponent} color={color} /> 
        {activeComponent === "counter" && <Buttons countercolor={countercolor}/>}
        {activeComponent === "stopwatch" && <StopWatch stopcolor={stopcolor} />}
        {activeComponent === "timer" && <Timer />}
        {activeComponent === "World" && <WorldClock />}
        {activeComponent === "Change Color" && <Changecolor stopcolor={stopcolor} 
        setStopcolor={setStopcolor} color={color} countercolor={countercolor} 
        setCountercolor={setCountercolor} setColor={setColor} />}

        {/* <WorldClock/> */}
      {/* <Timeint /> */}
    </>
  );
}

export default App;
