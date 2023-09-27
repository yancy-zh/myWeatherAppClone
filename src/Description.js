import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Description.css";
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";
import Location from "./Location";
function Description(props) {
  const [weatherName, setWeatherName] = useState("loading weather...");
  const [imageurl, setImgUrl] = useState("loading img...");
  const [country, setCountry] = useState("loading Country...");
  const [city, setCity] = useState("loading city...");
  const [temperature, setTemperature] = useState("loading temperature...");

  const getWeather = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(
        "lan=" + position.coords.latitude + "&lon=" + position.coords.longitude
      );
      var url =
        "https://fcc-weather-api.glitch.me/api/current?lat=" +
        position.coords.latitude +
        "&lon=" +
        position.coords.longitude;
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          console.log(json);
          setWeatherName(json.weather[0].main);
          setImgUrl(json.weather[0].icon);
          setCity(json.name);
          setCountry(json.sys.country);
          setTemperature(json.main.temp);
        });
    });
  };
  useEffect(() => getWeather(), []);

  return (
    <div className="description-section">
      {/* location */}
      <Location city={city} country={country} />
      {/* temperature */}
      <Temperature temperature={temperature} />
      {/* weather */}
      <WeatherIcon url={imageurl} weatherName={weatherName} />
    </div>
  );
}

Description.propTypes = {};

export default Description;
