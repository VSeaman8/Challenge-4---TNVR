import FavouriteLocationsPlaces from "../components/FavouriteLocationsPlaces";

const FavouriteLocations = () => {
  return (
    <div className="favouriteLocation-container">
      <h1>Telling you about ...</h1>
      <h2>Favourite Locations</h2>
      <h3>Click to remove favourite </h3>
      <h3>Click name to view info</h3>
      <FavouriteLocationsPlaces />
    </div>
  );
};

export default FavouriteLocations;
