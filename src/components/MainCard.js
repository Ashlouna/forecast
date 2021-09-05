import React from "react";
import { Form } from "./Form";
import { MainForecastInfo } from "./MainForecastInfo";
import "../index.scss";

export const MainCard = ({ resp, axiosAnswer }) => {
  return (
    <div className="main-card">
      <Form resp={resp} axiosAnswer={axiosAnswer} />
      {resp ? <MainForecastInfo resp={resp} /> : null}
    </div>
  );
};
