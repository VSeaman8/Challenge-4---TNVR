import AddFavourite from "../components/AddFavourite.jsx";
import WeatherCurrentDay from "../components/WeatherCurrentDay.jsx";
import WeatherForecast from "../components/WeatherForecast.jsx";

const Weather = () => {
  return (
    <div className="weather-container">
      <h1>Telling you about ...</h1>
      <AddFavourite />
      <WeatherCurrentDay
        day="Sunday"
        temperature="25"
        weather="Sunny"
        icon="☀️"
      />

      <WeatherForecast />
    </div>
  );
};

export default Weather;
