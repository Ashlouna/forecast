import React from "react";

const scaleHumidity = (n) => {
  if (n <= 59) {
    return "Dry";
  } else if (n >= 60 && n <= 64) {
    return "Comfortable";
  } else if (n > 64 && n <= 69) {
    return "Sticky";
  } else if (n >= 70 && n < 79) {
    return "Oppressive";
  } else if (n >= 60) {
    return "Extreme";
  }
};

export const Humidity = ({ resp }) => {
  return (
    <div className="todayDetailsItem">
      <h6>Humidity</h6>
      <div className="d-flex align-items-center justify-content-between">
        <span className="fs-2 fw-bold">
          {resp.list[0].main.humidity}
          <sup>%</sup>
        </span>
        <i class="bi bi-moisture"></i>
      </div>
      <div>{scaleHumidity(resp.list[0].main.humidity)}</div>
    </div>
  );
};
