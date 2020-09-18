import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Header";
import Date from "./Date";
import Time from "./Time";
import Search from "./Search";
import Description from "./Description";
import WindSpeed from "./WindSpeed";
import Humidity from "./Humidity";
import CurrentTemp from "./CurrentTemp";
import Forecast from "./Forecast";
import Footer from "./Footer";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Date />
    <Time />
    <Search />
    <Description />
    <WindSpeed />
    <Humidity />
    <CurrentTemp />
    <Forecast />
    <Footer />
  </React.StrictMode>,
  rootElement
);
