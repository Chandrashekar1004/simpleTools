import React, { useState, useEffect } from "react";

function Timer() {
  const [active, setActive] = useState(false);
  const [limit, setLimit] = useState(60); 

  useEffect(() => {
    if (!active) return; 

    let timer = setInterval(() => {
      setLimit((prevLimit) => {
        if (prevLimit <= 1) {
          clearInterval(timer);
          setActive(false);
          return 0;
        }
        return prevLimit - 1;
      });
    }, 1000);

    return () => clearInterval(timer); 
  }, [active]);

  const startTimer = () => {
    setActive(true);
  };

  const stopTimer = () => {
    setActive(false);
  };

  const resetTimer = () => {
    setActive(false);
    setLimit(60); 
  };

  const setCustomLimit = (value) => {
    setActive(false); 
    setLimit(value);
  };

  return (
    <>
      <h1>Time: {limit}</h1>
      <div>
        <button onClick={startTimer}>START</button>
        <button onClick={() => setCustomLimit(60)}>60 Sec</button>
        <button onClick={() => setCustomLimit(120)}>120 Sec</button>
        <button onClick={() => setCustomLimit(180)}>180 Sec</button>
        <button onClick={() => setCustomLimit(240)}>240 Sec</button>
        <button onClick={resetTimer}>RESET</button>
        <button onClick={stopTimer}>STOP</button>
      </div>
    </>
  );
}

export default Timer;
