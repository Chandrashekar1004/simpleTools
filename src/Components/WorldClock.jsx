
import { DateTime } from "luxon";
import React, { useEffect, useState } from "react";
import "./WorldClock.css";
import India from "./assets/Flags/India.PNG";
import England from "./assets/Flags/England.webp";
import USA from "./assets/Flags/USA.png";
import Canada from "./assets/Flags/Canada.jpeg";
import Australia from "./assets/Flags/Australia.png";
import Russia from "./assets/Flags/Russia.png";
function WorldClock() {
const timezones = [
  { id: 1, name: "India", zone: "Asia/Kolkata", url: India },
  { id: 2, name: "England", zone: "Europe/London", url: England },
  { id: 3, name: "USA", zone: "America/New_York", url: USA },
  { id: 4, name: "Canada", zone: "America/Toronto", url: Canada },
  { id: 5, name: "Australia", zone: "Australia/Sydney", url: Australia },
  { id: 6, name: "Russia", zone: "Europe/Moscow", url: Russia },
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
