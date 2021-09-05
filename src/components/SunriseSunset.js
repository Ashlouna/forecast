import React from "react";

const tsToTime = (ts) => {
  let date = new Date(ts * 1000);
  let hours = "0" + date.getHours();
  let minutes = "0" + date.getMinutes();
  let formattedTime = hours.substr(-2) + ":" + minutes.substr(-2);
  return formattedTime;
};

export const SunriseSunset = ({ resp }) => {
  return (
    <div className="todayDetailsItem">
      <h6>Sunrise & Sunset</h6>
      <div className="d-flex align-items-center">
        <i class="bi bi-sunrise me-3"></i>&nbsp;&nbsp;
        <span className="fs-4">{tsToTime(resp.city.sunrise)}</span>
      </div>
      <div className="d-flex align-items-center">
        <i class="bi bi-sunset-fill me-3"></i>&nbsp;&nbsp;
        <span className="fs-4">{tsToTime(resp.city.sunset)}</span>
      </div>
    </div>
  );
};
