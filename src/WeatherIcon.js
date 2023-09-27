import React from "react";
import "./Weather.css";
function WeatherIcon({ url, weatherName }) {
  return (
    <div>
      {url && <img className="weather-icon" src={url} alt={weatherName} />}
      <h3>{weatherName}</h3>
    </div>
  );
}

export default WeatherIcon;
