import WeatherForecastDay from "./WeatherForecastDay.jsx";

const WeatherForecast = ({ forecast }) => {
  return (
    <div className="weather-grid">
      {forecast.map((dayData, index) => (
        <WeatherForecastDay key={index} {...dayData} />
      ))}
    </div>
  );
};

export default WeatherForecast;
