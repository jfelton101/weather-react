import React, { useState } from "react";
import ForecastPreview from "./ForecastPreview"
import axios from "axios";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
    console.log(response.data);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="forecast row">
          <ForecastPreview data={forecast.list[0]} />
          <ForecastPreview data={forecast.list[1]} />{" "}
          <ForecastPreview data={forecast.list[2]} />{" "}
        <ForecastPreview data={forecast.list[3]} /> 
        <ForecastPreview data={forecast.list[5]} /> 
      </div>
    );
  } else {
    let apiKey = "1a83008090457b4fd7f896351fa948c0";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=imperial`;
    axios.get(url).then(handleForecastResponse);

    return null;
  }
}
// <div className="row" id="forecast">
// <div className="col-6"> </div>
// </div>
