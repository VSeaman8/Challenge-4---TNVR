const WeatherCurrentDay = ({ day, temperature, weather, icon }) => (
  <div className="current-weather">
    <h1>{day}</h1>
    <img src={`/assets/weather-icons/${icon}.svg`} className="weather-icon" />
    <p>{temperature}°C</p>
    <p>{weather}</p>
  </div>
);

export default WeatherCurrentDay;
