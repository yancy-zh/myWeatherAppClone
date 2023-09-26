import React from "react";
import "./Temperature.css";
function Temperature({ temperature }) {
  return (
    <div className="temperature">
      {temperature}
      <span>&#176;</span>C
    </div>
  );
}

export default Temperature;
