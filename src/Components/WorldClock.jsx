
import { DateTime } from "luxon";
import React, { useEffect, useState } from "react";
import "./WorldClock.css";

function WorldClock() {
  const timezones = [
    { id: 1, name: "India", zone: "Asia/Kolkata" ,url:`./src/assets/Flags/India.png`},
    { id: 2, name: "England", zone: "Europe/London",url:"./src/assets/Flags/England.webp" },
    { id: 3, name: "USA", zone: "America/New_York",url:"./src/assets/Flags/USA.png" },
    { id: 4, name: "Canada", zone: "America/Toronto",url:"./src/assets/Flags/Canada.jpeg" },
    { id: 5, name: "Australia", zone: "src/assets/Flags/Australia.png" },
    { id: 6, name: "Russia", zone: "Europe/Moscow", url:"./src/assets/Flags/Russia.png"},
  ];

  const getCurrentTimes = () => {
    return timezones.map((tz) => ({
      id: tz.id,
      name: tz.name,
      url:tz.url,
      time: DateTime.now().setZone(tz.zone).toLocaleString(DateTime.TIME_SIMPLE),
    }));
  };

  const [times, setTimes] = useState(getCurrentTimes());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimes(getCurrentTimes());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
    <h1 style={{color:"white"}}>WORLD CLOCK</h1>
    <div className="clocks">
      {/* <h1>World Clock</h1> */}
        {times.map((tz) => (
          <p key={tz.id}>
            <img className="Flags" src={tz.url} />
            <br />
            <strong>{tz.name}
            <br /> <br />
            </strong> {tz.time}
          </p>
        ))}
  
    </div>
    </>
  );
}

export default WorldClock;
