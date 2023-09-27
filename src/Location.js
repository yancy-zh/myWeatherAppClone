import React from "react";
import "./Description.css";
function Location({ city, country }) {
  return (
    <div className="location">
      {city},{country}
    </div>
  );
}

export default Location;
