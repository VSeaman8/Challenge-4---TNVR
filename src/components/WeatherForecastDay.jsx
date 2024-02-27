const WeatherForecastDay = ({ day, temperature, weather, icon }) => {
  return (
    <div className="weather-day">
      <h2>{day}</h2>
      <img src={`/assets/weather-icons/${icon}.svg`} className="weather-icon" />
      <p>{temperature}</p>
      <p>{weather}</p>
    </div>
  );
};

export default WeatherForecastDay;
