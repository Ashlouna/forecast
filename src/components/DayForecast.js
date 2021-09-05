import React from "react";

export const DayForecast = ({ resp }) => {
  // eslint-disable-next-line

  let forecastOfEachDay = resp.list.reduce((acc, item) => {
    let sliceDate = item.dt_txt.slice(0, 10);
    let sliceTime = item.dt_txt.slice(11, 13);
    if (!acc[sliceDate]) {
      acc[sliceDate] = { temp: [], icon: null };
    } else {
      acc[sliceDate].temp.push(parseInt(item.main.temp));
      if (
        sliceTime === "15" ||
        sliceTime === "12" ||
        sliceTime === "18" ||
        sliceTime === "09" ||
        sliceTime === "06"
      ) {
        acc[sliceDate].icon = item.weather[0].icon;
      }
    }
    return acc;
  }, {});
  forecastOfEachDay = Object.entries(forecastOfEachDay).splice(1);
  console.log(forecastOfEachDay);
  return (
    <div className="weekWrapper">
      <h4>Week</h4>
      <ul className="weekRow">
        {forecastOfEachDay.map((item, idx) => {
          const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
          const weekDay = new Date(item[0]).getDay();
          return (
            <li className="weekRowItem" key={idx}>
              <span>{weekDays[weekDay]}</span>
              <svg width="50" height="50">
                <use
                  href={`./icons/${item[1].icon}.svg#${item[1].icon}`}
                  alt="forecast"
                  width="50"
                  height="50"
                />
              </svg>
              <div className="weekTempWrapper">
                <span>{Math.max(...item[1].temp)}</span>
                <span>{Math.min(...item[1].temp)}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
