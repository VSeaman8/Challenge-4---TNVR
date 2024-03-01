import { useState, useEffect } from "react";

import {
  getLocations,
  saveLocation,
} from "../utilityFunctions/SaveLocations.jsx";

const AddFavourite = ({ location }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    const favourites = getLocations();
    setIsFavourite(favourites.includes(location));
  }, [location]);

  const handleButtonClick = () => {
    let favourites = getLocations();

    if (isFavourite) {
      saveLocation(location, true);
    } else {
      saveLocation(location);
    }
    setIsFavourite(!isFavourite);
  };

  return (
    <button onClick={handleButtonClick}>
      {isFavourite ? "Remove from Favourites" : "Add to Favourites"}
    </button>
  );
};

export default AddFavourite;
