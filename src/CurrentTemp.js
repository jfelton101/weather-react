import React from "react";
import "./styles.css";

export default function CurrentTemp() {
  return (
    <div className="temperature">
      <img
        src="https://openweathermap.org/img/wn/03d@2x.png"
        id="icon"
        alt="weather"
      />
      <p className="currentTemp">0</p>
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
}
