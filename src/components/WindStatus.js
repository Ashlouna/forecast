import React from "react";

export const WindStatus = ({ resp }) => {
  const strengthOfWind = (arg) => {
    if (arg.list[0].wind.speed < 1) {
      return "Calm and still";
    } else if (arg.list[0].wind.speed >= 1 && arg.list[0].wind.speed <= 5) {
      return "Light winds";
    } else if (arg.list[0].wind.speed > 5 && arg.list[0].wind.speed <= 11) {
      return "Light breeze";
    } else if (arg.list[0].wind.speed > 11 && arg.list[0].wind.speed <= 19) {
      return "Gentle breeze";
    } else if (arg.list[0].wind.speed > 19 && arg.list[0].wind.speed <= 38) {
      return "Fresh breeze";
    } else if (arg.list[0].wind.speed > 38 && arg.list[0].wind.speed <= 49) {
      return "Strong breeze";
    } else if (arg.list[0].wind.speed > 49 && arg.list[0].wind.speed <= 61) {
      return "Moderate gale";
    } else if (arg.list[0].wind.speed > 61 && arg.list[0].wind.speed <= 74) {
      return "Fresh gale";
    } else if (arg.list[0].wind.speed > 74 && arg.list[0].wind.speed <= 88) {
      return "Strong gale";
    } else if (arg.list[0].wind.speed > 88 && arg.list[0].wind.speed <= 102) {
      return "Whole gale";
    } else if (arg.list[0].wind.speed > 102 && arg.list[0].wind.speed <= 118) {
      return "Storm";
    } else if (arg.list[0].wind.speed > 118 && arg.list[0].wind.speed <= 220) {
      return "Hurricane";
    }
  };

  return (
    <div className="todayDetailsItem">
      <h6>Wind Status</h6>
      <div>
        <span className="fs-2 fw-bold">{resp.list[0].wind.speed}</span>&nbsp;
        <span className="fs-6">km/h</span>
      </div>
      <div>{strengthOfWind(resp)}</div>
    </div>
  );
};
