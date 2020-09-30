import React from "react";
import "./styles.css";

export default function DateTime(props) {
  console.log(props.date);
  let days = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];
  let months = [
    "JAN",
    "FEB",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUG",
    "SEPT",
    "OCT",
    "NOV",
    "DEC",
  ];

  let day = days[props.date.getDay()];
  let now = new Date();
  let currentDate = now.getDate();
  let month = months[props.date.getMonth()];
  
    let time12Hr = now.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
   
  
  
  return (
    <div className="currentDate">
      {day}, {month} {currentDate}
      <h3 className="time">
        {time12Hr}
      </h3>
    </div>
  );
}
