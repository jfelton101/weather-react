import React, { useState } from "react";
import axios from "axios";
import DateTime from "./DateTime";
import "./styles.css";

export default function WeatherInfo(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
      const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      iconUrl: "https://openweathermap.org/img/wn/03d@2x.png",
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
    });
  }

  function search() {
  const apiKey = "1a83008090457b4fd7f896351fa948c0";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(handleResponse);}

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
    
      <div className="weatherInfo">
        <h1>{weatherData.city}</h1>

        <DateTime date={weatherData.date}/>

        <p id="description">{weatherData.description}</p>
        <p id="humidity">Humidity: {weatherData.humidity}%</p>
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

        <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="search-city"
          placeholder="Search city..."
          autoFocus="on"
          onChange={handleCityChange}
        />
        <input type="submit" value="Search" id="submit-search" />
      </form>
      <button>Get Current Location</button>

      </div>
    );
  } else {
    

    return "Loading...";
  }
}
