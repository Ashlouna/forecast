import React from "react";

const metrToKilometr = (m) => {
  if (m < 1000) {
    return m;
  } else {
    return parseInt(m / 1000);
  }
};

const scaleOfVisibility = (m) => {
  if (m < 50) {
    return "Dense fog";
  } else if (m >= 50 && m < 200) {
    return "Thick fog";
  } else if (m >= 200 && m < 500) {
    return "Moderate fog";
  } else if (m >= 500 && m < 1000) {
    return "Light fog";
  } else if (m >= 1000 && m < 2000) {
    return "Thin fog";
  } else if (m >= 2000 && m < 4000) {
    return "Haze";
  } else if (m >= 4000 && m < 10000) {
    return "Light haze";
  } else if (m >= 10000 && m < 20000) {
    return "Clear";
  } else if (m >= 20000 && m < 50000) {
    return "Very clear";
  } else if (m >= 50000) {
    return "Exceptionally clear";
  }
};

export const Visibility = ({ resp }) => {
  return (
    <div className="todayDetailsItem">
      <h6>Visibility</h6>
      <div>
        <span className="fs-2 fw-bold">
          {metrToKilometr(resp.list[0].visibility)}
        </span>
        &nbsp;
        <span className="fs-6">km</span>
      </div>
      <div>{scaleOfVisibility(resp.list[0].visibility)}</div>
    </div>
  );
};
