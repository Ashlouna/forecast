import React from "react";

const styles = {
  span: {
    color: "#acaeb0",
  },
  mainInfo: {
    width: "100%",
  },
};

const getDayOfWeek = () => {
  let d = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[d.getDay()];
};

const capitalize = ([first, ...rest]) => {
  return first.toUpperCase() + rest.join("");
};

const getDate = () => {
  let d = new Date();
  let date = `${d.getDate()}.${"0" + (d.getMonth() + 1)}.${d.getFullYear()}`;
  return date;
};

export const MainForecastInfo = ({ resp }) => {
  return (
    <div style={styles.mainInfo}>
      <div className="fs-1">
        {parseInt(resp.list[0].main.temp)} &deg;<sup>c</sup>
      </div>
      <div className="fw-bold fs-2">
        {resp.city.name}, {resp.city.country}{" "}
      </div>
      <div className="main-date">
        {getDayOfWeek()} <span style={styles.span}>{getDate()}</span>
      </div>
      <hr />
      <div>
        <svg width="30" height="30">
          <use
            href="./icons/03d.svg#03d"
            alt="forecast"
            width="30"
            height="30"
          />
        </svg>
        Clouds - {resp.list[0].clouds.all}%
      </div>
      <div>{capitalize(resp.list[0].weather[0].description)}</div>
    </div>
  );
};
