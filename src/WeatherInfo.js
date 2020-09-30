import React, { useState } from "react";
import axios from "axios"
import "./styles.css";

export default function WeatherInfo(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      iconUrl: "https://openweathermap.org/img/wn/03d@2x.png",
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
    })
  }

  if (weatherData.ready) {return (
    <div className="weatherInfo">
      <h1>{weatherData.city}</h1>

      <p id="description">{weatherData.description}</p>
      <p id="humidity">Humidity: {weatherData.humidity}</p>
      <p id="wind-speed"> Wind Speed: {weatherData.wind} km/h</p>
      <img src={weatherData.iconUrl} id="icon" alt="weather" />
      <p className="currentTemp">{weatherData.temperature}</p>
      <span className="tempUnit">
        <a href="/" id="fahrenheit">
          °F{" "}
        </a>{" "}
        |{" "}
        <a href="/" id="celsius">
          °C
        </a>
      </span>
    </div>
  );
} else {  
    const apiKey="1a83008090457b4fd7f896351fa948c0"
  let apiUrl=`http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading...";
}

  
}
