import React from "react"

export default function WeatherIcon(props) {
let url = `https://openweathermap.org/img/wn/${props.code}@2x.png`;
    return (
        <div className="icon">
            <img src={url} alt="icon"/>
            </div>
    )
   
}