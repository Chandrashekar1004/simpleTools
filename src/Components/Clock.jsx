import React, { useState, useEffect } from "react";

function Clock({color}) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date()); 
    }, 1000);

    return () => clearInterval(timer); 
  }, []);

  const formattedTime = currentTime.toLocaleTimeString()
  const formattedDate = currentTime.toDateString(); 

  return (
    <div style={{position:"relative",top:'50px', color:color}}>
      <h1 style={{fontSize: '20px', textAlign: 'center',position:"relative"}}>{formattedTime}</h1>
      <h2  style={{ fontSize: '20px', textAlign: 'center',position:"relative"}}>{formattedDate}</h2>
    </div>
  );
}

export default Clock;
