import React from "react";

export const MinMaxTemp = ({ resp }) => {
  let todayDate = resp.list[0].dt_txt.slice(0, 10);
  let newArr = resp.list.filter((item) => {
    return item.dt_txt.slice(0, 10) === todayDate;
  });
  let minTemp = Math.round(
    Math.min(...newArr.map((item) => item.main.temp_min))
  );
  let maxTemp = Math.round(
    Math.max(...newArr.map((item) => item.main.temp_max))
  );

  return (
    <div className="todayDetailsItem">
      <h6>Min & Max temperature</h6>
      <div className="d-flex align-items-center">
        <i class="bi bi-thermometer-high"></i>
        <span className="fs-2 fw-bold">{maxTemp}&deg;</span>
      </div>
      <div className="d-flex align-items-center">
        <i class="bi bi-thermometer-low"></i>
        <span className="fs-2 fw-bold">{minTemp}&deg;</span>
      </div>
    </div>
  );
};
