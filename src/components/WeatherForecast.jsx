import WeatherForecastDay from "./WeatherForcastDay.jsx";

const WeatherForecast = () => {
  return (
    <div className="weather-grid">
      <WeatherForecastDay
        day="Monday"
        temperature="20"
        weather="Sunny"
        icon="☀️"
      />
      <WeatherForecastDay
        day="Tuesday"
        temperature="22"
        weather="Cloudy"
        icon="☁️"
      />
      <WeatherForecastDay
        day="Wednesday"
        temperature="18"
        weather="Rainy"
        icon="🌧️"
      />
      <WeatherForecastDay
        day="Thursday"
        temperature="25"
        weather="Sunny"
        icon="☀️"
      />
    </div>
  );
};

export default WeatherForecast;
