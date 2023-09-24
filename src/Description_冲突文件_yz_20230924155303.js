import React from "react";
import PropTypes from "prop-types";
import "./Description.css";
import Location from "./Location";
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";
import CloudIcon from "@mui/icons-material/Cloud";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
function Description(props) {
  return (
    <div className="description-section">
      <ul>
        {/* location */}
        <Location />
        {/* temperature */}
        <Temperature />
        {/* weather */}
        <WeatherIcon weatherName="cloudy" Icon={CloudIcon} />
        <WeatherIcon />
        <WeatherIcon />
        <WeatherIcon />
      </ul>
    </div>
  );
}

Description.propTypes = {};

export default Description;
