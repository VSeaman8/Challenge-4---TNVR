const WeatherForecastDay = ({ day, temperature, weather, icon }) => {
  return (
    <div className="weather-day">
      <h2>{day}</h2>
      <div className="weather-icon">{icon}</div>
      <p>{temperature}</p>
      <p>{weather}</p>
    </div>
  );
};

export default WeatherForecastDay;
