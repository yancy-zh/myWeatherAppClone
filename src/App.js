import "./App.css";
import Description from "./Description";
import CloudIcon from "@mui/icons-material/Cloud";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      {/* description */}
      <Description></Description>
      {/* weather icon */}
      <CloudIcon></CloudIcon>
      <WbSunnyIcon></WbSunnyIcon>
      <ThunderstormIcon></ThunderstormIcon>
    </div>
  );
}

export default App;
