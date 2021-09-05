import React, { useState } from "react";
import { MainCard } from "./components/MainCard";
import { WeekContainer } from "./components/WeekContainer";

function App() {
  let [resp, setResp] = useState();
  const axiosAnswer = (resp) => {
    setResp(resp);
    // console.log(resp);
  };
  return (
    <div className="App">
      <div className="container-fluid">
        <MainCard resp={resp} axiosAnswer={axiosAnswer} />
        <WeekContainer resp={resp} />
      </div>
    </div>
  );
}

export default App;
