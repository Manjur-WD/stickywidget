import React, { useState } from "react";

const ClockSection = () => {
  const [time, setTime] = useState(new Date());
  const hrs = time.getHours();
  const mints = time.getMinutes();
  const seconds = time.getSeconds();

  const updateTime = () => {
    setTime(new Date());
  };

  setInterval(updateTime, 1000);

  return (
    <>
      <div className="digital-clock d-flex align-items-center font-pop">
        <div className="dot" style={{transform: `rotate(${seconds*6}deg)`}}></div>
        <svg height="300" width="300" xmlns="http://www.w3.org/2000/svg">
          <circle
            r="150"
            cx="150"
            cy="150"
            fill="red"
            style={{ strokeDashoffset: `${940 - (940 * seconds) / 60}` }}
          />
        </svg>
        <div className="hours">
          <span id="hrs">{hrs > 12 ? `0${hrs - 12}` : hrs}</span>
        </div>
        <div className="minute-second">
          <span id="mint" className="d-block">
            :{mints < 10 ? `0${mints}` : mints}
          </span>
          <div className="status-seconds">
            <span id="status">{hrs >= 12 ? "PM" : "AM"}</span>
            <span id="seconds">{seconds < 10 ? `0${seconds}` : seconds}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClockSection;
