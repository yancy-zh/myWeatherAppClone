import React from "react";

function WeatherIcon({ Icon, weatherName }) {
  return (
    <div className="weather-icon">
      {Icon && <Icon />}
      <h3>{weatherName}</h3>
    </div>
  );
}

export default WeatherIcon;
