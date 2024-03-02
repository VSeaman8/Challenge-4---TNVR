import { useEffect, useState } from "react";
import fetchWeatherData from "../utilityFunctions/FetchWeatherData.jsx";
import WeatherForecastDay from "./WeatherForecastDay.jsx";

const WeatherForecast = ({ location }) => {
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const data = fetchWeatherData(location);
    setForecastData(data.forecastData);
  }, [location]);

  if (!forecastData) {
    return <div>Loading...</div>;
  }
  return (
    <div className="weather-grid">
      {forecastData.map((dayData, index) => (
        <WeatherForecastDay key={index} {...dayData} />
      ))}
    </div>
  );
};

export default WeatherForecast;
