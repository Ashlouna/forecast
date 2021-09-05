import React, { useState, Fragment, useEffect } from "react";
import axios from "axios";

export const Form = ({ resp, axiosAnswer }) => {
  let [city, setCity] = useState("Dnipro");

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=0422ef016df35217f2c0374fdcfc5414`
      )
      .then((resp) => {
        axiosAnswer(resp.data);
      })
      .catch((e) => console.log(e.message));

    setCity("");
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=0422ef016df35217f2c0374fdcfc5414`
      )
      .then((resp) => {
        axiosAnswer(resp.data);
      })
      .catch((e) => console.log(e.message));

    setCity("");
  };
  let iconId = resp?.list[0]?.weather[0]?.icon;
  let srcImg = `./icons/${iconId}.svg#${iconId}`;
  return (
    <>
      <form onSubmit={handleSubmit} className="searchForm">
        <i class="bi bi-search"></i>
        <input
          className="searchInput"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search for places..."
        />
      </form>

      {resp ? (
        <svg className="mainIcon">
          <use href={srcImg} alt="forecast" width="250" height="250" />
        </svg>
      ) : null}
    </>
  );
};
