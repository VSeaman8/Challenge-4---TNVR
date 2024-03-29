import { useState, useEffect } from "react";
import FetchApiData from "./FetchApiData.jsx";
//import dummyWeatherData from "../../data/dummyWeatherData.json";

// TODO: You do not need to destructure the props to a custom hook...
// const useFetchWeatherData = ({ location }) => {
// TODO: Just pass them in as you would in a normal function!
const useFetchWeatherData = (location) => {
    console.log("useFetchWeatherData is called");
    console.log(location);
    const [weatherData, setWeatherData] = useState(null);
    const [currentDayData, setCurrentDayData] = useState(null);
    const [forecastData, setForecastData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (location) {
                const data = await FetchApiData(location.toLowerCase());
                console.log(data);
                setWeatherData(data);
            }
        };

        fetchData();
        // TODO: This now sets the weather data...you need to handle it appropriately now!
    }, [location]);

    useEffect(() => {
        if (!weatherData) {
            return;
        }

        // converts date into standard date
        // TODO: Do these (formatDate and kelvinToCelcius) really need to be defined inside this useEffect?
        const formatDate = (dt_txt) => {
            const date = new Date(dt_txt);
            const day = String(date.getDate()).padStart(2, "0");
            const month = String(date.getMonth() + 1).padStart(2, "0");
            const year = date.getFullYear();

            return `${day}-${month}-${year}`;
        };

        // converts kelvin to celsius
        const kelvinToCelsius = (temp) => {
            return Math.round(temp - 273.15);
        };

        const currentData = {
            day: formatDate(weatherData.list[0].dt_txt),
            temperature: kelvinToCelsius(weatherData.list[0].main.temp),
            weather: weatherData.list[0].weather[0].description,
            icon: weatherData.list[0].weather[0].icon,
        };

        setCurrentDayData(currentData);

        // TODO: I'm not sure that all this needs to be done here?  Can you refactor it out and call it?

        const dayIndices = getDayIndices(weatherData);
        const forecast = dayIndices.slice(1).map((index) => {
            const item = weatherData.list[index];
            return {
                day: formatDate(item.dt_txt),
                temperature: kelvinToCelsius(item.main.temp),
                weather: item.weather[0].description,
                icon: item.weather[0].icon,
            };
        });
        setForecastData(forecast);
    }, [weatherData]);

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

    if (!weatherData) {
        return "Sorry it's just not working";
    }
    return { location, currentDayData, forecastData };
};

export default useFetchWeatherData;
