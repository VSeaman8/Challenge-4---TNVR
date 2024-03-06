import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetchWeatherData from "../utilityFunctions/useFetchWeatherData.jsx";

const FetchAndNavigate = ({ location }) => {
    console.log("🚀 ~ FetchAndNavigate ~ location:", location);
    const navigate = useNavigate();
    const { data, error, isLoading } = useFetchWeatherData(location);

    useEffect(() => {
        console.log("🚀 ~ useEffect ~ data:", data);
        if (data && !isLoading && !error) {
            navigate("/Weather", { state: { location, weatherData: data } });
        }
        // TODO: You only need to depend on location here - data, isLoading and error will only update if location updates
        // TODO: navigate is not a needed dependency here either
    }, [location]);
    // }, [data, isLoading, error, navigate, location]);

    return null;
};

export default FetchAndNavigate;
