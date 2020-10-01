import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import WeatherInfo from "./WeatherInfo";
import Footer from "./Footer";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <WeatherInfo defaultCity="Atlanta" />
    <Footer />
  </React.StrictMode>,
  rootElement
);
