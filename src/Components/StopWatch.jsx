import React, { useState, useEffect } from "react";
import "./StopWatch.css";

function StopWatch({stopcolor}) {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = React.useRef(null);

  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isActive]);

  const startTimer = () => setIsActive(true);
  const stopTimer = () => setIsActive(false);
  const resetTimer = () => {
    setIsActive(false);
    setSeconds(0);
  };

  return (
    <div className="fullwatch">
      <h1 className="display">{seconds} seconds</h1>
      <div className="stopwatch" >
        <button className="button1" style={{backgroundColor:stopcolor}} onClick={startTimer} disabled={isActive}>
          Start
        </button>
        <button className="button1" style={{backgroundColor:stopcolor}} onClick={stopTimer} disabled={!isActive}>
          Stop
        </button>
        <button className="button1" style={{backgroundColor:stopcolor}} onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default StopWatch;
