import React from "react";

export const UVIndex = ({ resp }) => {
  return (
    <div className="todayDetailsItem">
      <h5>Pressure</h5>
      <div>
        <svg width="100" height="100">
          <use
            href="./icons/weather_icons-69.svg#pressure"
            alt="forecast"
            x="-15"
            width="80"
            height="70"
          />
        </svg>
      </div>
      <div>
        <span className="fs-2 fw-bold">{resp.list[0].main.grnd_level}</span>
        &nbsp;
        <span className="fs-6">hPa</span>
      </div>
    </div>
  );
};
