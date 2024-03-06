import useFetchWeatherData from "../utilityFunctions/useFetchWeatherData.jsx";

const WeatherCurrentDay = ({ weatherData }) => {
  const { currentDayData } = weatherData;

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
