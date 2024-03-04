import FavouriteLocationsPlaces from "../components/FavouriteLocationsPlaces.jsx";
import "./FavouriteLocations.css";

const FavouriteLocations = () => {
  return (
    <div className="favouriteLocation-container">
      <h2>Telling you about ...</h2>
      <h1>Favourite Locations</h1>
      <h4>Click name to view info</h4>
      <FavouriteLocationsPlaces />
    </div>
  );
};

export default FavouriteLocations;
