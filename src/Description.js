import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Description.css";
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";
import WbCloudyIcon from "@mui/icons-material/WbCloudy";
import Location from "./Location";
function Description(props) {
  const [weatherName, setWeatherName] = useState("loading weather...");
  const [location, setLocation] = useState("loading location...");
  const [temperature, setTemperature] = useState("loading temperature...");

  const getWeather = () => {
    console.log("on mount");
    fetch("https://weather-proxy.freecodecamp.rocks/api/current?lat=35&lon=139")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setWeatherName(json.weather[0].main);
        setLocation(json.name);
        setTemperature(json.main.temp);
        console.log(json);
      });
  };
  useEffect(() => getWeather(), []);

  return (
    <div className="description-section">
      {/* location */}
      <Location location={location} />
      {/* temperature */}
      <Temperature temperature={temperature} />
      {/* weather */}
      <WeatherIcon Icon={WbCloudyIcon} weatherName={weatherName} />
    </div>
  );
}

Description.propTypes = {};

export default Description;
