import AddFavourite from "../components/AddFavourite.jsx";
import WeatherCurrentDay from "../components/WeatherCurrentDay.jsx";
import WeatherForecast from "../components/WeatherForecast.jsx";

import "./Weather.css";

const Weather = () => {
  return (
    <div className="weather-container">
      <h1 className="weather-title">Telling you about ...</h1>
      <AddFavourite />
      <WeatherCurrentDay
        day="Sunday"
        temperature="25"
        weather="Sunny"
        icon="☀️"
      />

      <WeatherForecast />
    </div>
  );
};

export default Weather;
