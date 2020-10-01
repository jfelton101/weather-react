import React, { useState } from "react";

export default function TempConversion(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function convertToFahrenheit(event) {
      event.preventDefault();
      setUnit("fahrenheit")

  }
  if (unit === "fahrenheit") {
    return (
      <div className="tempcon">
        <p className="currentTemp">{Math.round(props.fahrenheit)}</p>
        <span className="tempUnit">
          °F |{" "}
          <a href="/" id="fahrenheit" onClick={convertToCelsius}>
            {" "}
            °C{" "}
          </a>
        </span>
      </div>
    );
  } else {
      let celsius = (props.fahrenheit - 32) * 5 / 9
      return (
    <div className="tempcon">
      <p className="currentTemp">{Math.round(celsius)}</p>
      <span className="tempUnit">
        <a href="/" id="fahrenheit" onClick={convertToFahrenheit}>
          °F{" "}
        </a>{" "}
        | °C
      </span>
    </div>
      );
  }
}
