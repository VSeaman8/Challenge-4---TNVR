import { useLocation } from "react-router-dom";

import AddFavourite from "../components/AddFavourite.jsx";
import WeatherCurrentDay from "../components/WeatherCurrentDay.jsx";
import WeatherForecast from "../components/WeatherForecast.jsx";

import "./Weather.css";

const Weather = () => {
  const locationState = useLocation().state;

  if (!locationState) {
    return (
      <h1 className="not-searched">
        You haven't searched yet. Please search for a location
      </h1>
    );
  }
  const { location, currentDayData, forecastData } = locationState;
  return (
    <div className="weather-container">
      <h2 className="weather-title">Telling you about ...</h2>
      <h1>{location}</h1>
      <AddFavourite location={location} />
      <WeatherCurrentDay {...currentDayData} />
      <WeatherForecast forecast={forecastData} />
    </div>
  );
};

export default Weather;
