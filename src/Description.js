import React from "react";
import PropTypes from "prop-types";
import "./Description.css";
import Temperature from Temperature;

function Description(props) {
  return (
    <div className="description-section">
      <ul>
        {/* location */}
        <Location />
        {/* temperature */}
        <Temperature />
        {/* weather */}
        <WeatherIcon />
      </ul>
    </div>
  );
}

Description.propTypes = {};

export default Description;
