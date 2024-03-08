// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetchWeatherData from "../utilityFunctions/useFetchWeatherData.jsx";

const FetchAndNavigate = ({ location }) => {
    const navigate = useNavigate();
    const stuff = useFetchWeatherData(location);
    // console.log("🚀 ~ FetchAndNavigate ~ stuff:", stuff);

    // useEffect(() => {
    //     const { currentDayData, forecastData } = stuff;
    //     if (currentDayData && forecastData && !isLoading && !error) {
    //         navigate("/Weather", {
    //             state: {
    //                 location,
    //                 weatherData: { currentDayData, forecastData },
    //             },
    //         });
    //     }
    //     // TODO: You only need to depend on location here - data, isLoading and error will only update if location updates
    //     // TODO: navigate is not a needed dependency here either
    // }, [location]);
    // }, [data, isLoading, error, navigate, location]);

    const navToLocation = () => {
        const { currentDayData, forecastData } = stuff;
        if (currentDayData && forecastData) {
            // && !isLoading && !error) {
            console.log(`navigating`);
            navigate("/Weather", {
                state: {
                    location,
                    weatherData: { currentDayData, forecastData },
                },
            });
        }
        return null;
    };

    return <>{navToLocation()}</>;
};

export default FetchAndNavigate;
