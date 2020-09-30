import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import DateTime from "./DateTime";
import Search from "./Search";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import Footer from "./Footer";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <DateTime />
    <WeatherInfo defaultCity="Atlanta" />
    <Search />
    <Forecast />
    <Footer />
  </React.StrictMode>,
  rootElement
);
