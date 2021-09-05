import React from "react";
import { WindStatus } from "./WindStatus";
import { SunriseSunset } from "./SunriseSunset";
import { Visibility } from "./Visibility";
import { MinMaxTemp } from "./MinMaxTemp";
import { Humidity } from "./Humidity";
import { UVIndex } from "./UVIndex";

export const TodayForecastDetails = ({ resp }) => {
  return (
    <div>
      <h4>Today's Highlights</h4>
      <div className="todayDetailsWrapper">
        <UVIndex resp={resp} />
        <WindStatus resp={resp} />
        <Visibility resp={resp} />
        <SunriseSunset resp={resp} />
        <Humidity resp={resp} />
        <MinMaxTemp resp={resp} />
      </div>
    </div>
  );
};
