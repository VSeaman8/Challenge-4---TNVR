import { useEffect, useState } from "react";
import fetchWeatherData from "../utilityFunctions/FetchWeatherData.jsx";

const WeatherCurrentDay = ({ location }) => {
  const [currentDayData, setCurrentDayData] = useState(null);

  useEffect(() => {
    const data = fetchWeatherData(location);
    setCurrentDayData(data.currentDayData);
  }, [location]);

  if (!currentDayData) {
    return <div>Loading...</div>;
  }

  const { day, icon, temperature, weather } = currentDayData;

  return (
    <div className="current-weather">
      <h1>{day}</h1>
      <img src={`/assets/weather-icons/${icon}.svg`} className="weather-icon" />
      <p>{temperature}°C</p>
      <p>{weather}</p>
    </div>
  );
};

export default WeatherCurrentDay;
