import React from "react";
import { DayForecast } from "./DayForecast";
import { TodayForecastDetails } from "./TodayForecastDetails";

export const WeekContainer = ({ resp }) => {
  return (
    <div className="weekContainer">
      {resp ? <DayForecast resp={resp} /> : null}
      {resp ? <TodayForecastDetails resp={resp} /> : null}
    </div>
  );
};
