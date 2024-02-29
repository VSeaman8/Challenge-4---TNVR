import { getLocations } from "../utilityFunctions/SaveLocations.jsx";
import Place from "./Place.jsx";
import "./FavouriteLocationsPlaces.css";

const FavouriteLocationsPlaces = () => {
  const locations = getLocations();

  return (
    <div className="location-container">
      {locations.map((location, index) => (
        <Place key={index} location={location} />
      ))}
    </div>
  );
};

export default FavouriteLocationsPlaces;
