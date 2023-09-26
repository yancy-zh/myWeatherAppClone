import React from "react";
import "./Weather.css";
function WeatherIcon({ Icon, weatherName }) {
  return (
    <div>
      {Icon && <Icon className="weather-icon" />}
      <h3>{weatherName}</h3>
    </div>
  );
}

export default WeatherIcon;
