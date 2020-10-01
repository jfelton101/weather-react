import React from "react"
import WeatherIcon from "./WeatherIcon"
import "./styles.css";

export default function ForecastPreview(props){

    function hours() {
        let date = new Date(props.data.dt * 1000)
        let hours = date.getHours();
        return `${hours}:00`;
    }

    function temperature() {
        let temperature = Math.round(props.data.main.temp) 

        return `${temperature}°F`;
    }

    function temperatureMin() {
        let tempMin = Math.round(props.data.main.temp_min)
return `${tempMin}°F`
    }
    return (
        <div className="ForecastPreview col">
            {hours()}
          <WeatherIcon code={props.data.weather[0].icon} />
          {temperature()} | {temperatureMin()}
          </div>
    )
}