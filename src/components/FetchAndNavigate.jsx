import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetchWeatherData from "../utilityFunctions/useFetchWeatherData.jsx";

const FetchAndNavigate = ({ location }) => {
  const navigate = useNavigate();
  const { data, error, isLoading } = useFetchWeatherData(location);

  useEffect(() => {
    if (data && !isLoading && !error) {
      navigate("/Weather", { state: { location, weatherData: data } });
    }
  }, [data, isLoading, error, navigate, location]);

  return null;
};

export default FetchAndNavigate;
