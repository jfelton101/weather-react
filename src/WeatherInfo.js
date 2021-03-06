import React, { useState } from "react";
import axios from "axios";
import DateTime from "./DateTime";
import WeatherIcon from "./WeatherIcon"
import TempConversion from "./TempConversion"
import Forecast from "./Forecast"
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
      icon: response.data.weather[0].icon,
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
    });
  }

  function search() {
  const apiKey = "1a83008090457b4fd7f896351fa948c0";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(handleResponse);
}

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function retrievePosition(position) {
    let apiKey = "1a83008090457b4fd7f896351fa948c0";
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

    axios.get(url).then(handleResponse);
  }

  function getPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(retrievePosition);
  }

  if (weatherData.ready) {
    return (
      <div className="weatherInfo">
        <h1 className="header">{weatherData.city}</h1>

        <DateTime date={weatherData.date} />

        <p id="description">{weatherData.description}</p>
        <p id="humidity">Humidity: {weatherData.humidity}%</p>
        <p id="wind-speed"> Wind Speed: {weatherData.wind} km/h</p>

        <div className="float-left">
          <WeatherIcon code={weatherData.icon} />
        </div>
        
      
        <TempConversion fahrenheit={weatherData.temperature}/>
      <Forecast city={weatherData.city}/>

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
        <button onClick={getPosition}>Get Current Location</button>
      </div>
    );
  } else {
    search();

    return "Loading...";
  }
}
