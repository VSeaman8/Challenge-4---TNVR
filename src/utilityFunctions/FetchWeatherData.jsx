import dummyWeatherData from "../../data/dummyWeatherData.json";

const fetchWeatherData = (location) => {
  const data = dummyWeatherData[location.toLowerCase()];

  // converts date into standard date
  const formatDate = (dt_txt) => {
    const date = new Date(dt_txt);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}- ${month}- ${year}`;
  };
  // converts kelvin to celsius
  const kelvinToCelsius = (temp) => {
    return Math.round(temp - 273.15);
  };

  const currentDayData = {
    day: formatDate(data.list[0].dt_txt),
    temperature: kelvinToCelsius(data.list[0].main.temp),
    weather: data.list[0].weather[0].description,
    icon: data.list[0].weather[0].icon,
  };

  const dayIndices = getDayIndices(data);
  const forecastData = dayIndices.slice(1).map((index) => {
    const item = data.list[index];
    return {
      day: formatDate(item.dt_txt),
      temperature: kelvinToCelsius(item.main.temp),
      weather: item.weather[0].description,
      icon: item.weather[0].icon,
    };
  });

  return { location, currentDayData, forecastData };
};

const getDayIndices = (data) => {
  let dayIndices = [0];
  let currentDay = data.list[0].dt_txt.slice(8, 10);

  for (let i = 1; i < data.list.length; i++) {
    let day = data.list[i].dt_txt.slice(8, 10);
    let hour = data.list[i].dt_txt.slice(11, 13);

    if (day !== currentDay && hour === "15") {
      dayIndices.push(i);
      currentDay = day;

      if (dayIndices.length === 5) {
        break;
      }
    }
  }
  return dayIndices;
};

export default fetchWeatherData;
