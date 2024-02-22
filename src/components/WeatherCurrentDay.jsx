const WeatherCurrentDay = ({ day, temperature, weather, icon }) => (
  <div className="current-weather">
    <h1>{day}</h1>
    <div className="weather-icon">{icon}</div>
    <p>{temperature}°C</p>
    <p>{weather}</p>
  </div>
);

export default WeatherCurrentDay;
