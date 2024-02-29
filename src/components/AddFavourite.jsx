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
      favourites = favourites.filter((favourite) => favourite !== location);
    } else {
      favourites.push(location);
    }
    saveLocation(favourites);
    setIsFavourite(!isFavourite);
  };

  return (
    <button onClick={handleButtonClick}>
      {isFavourite ? "Remove from Favourites" : "Add to Favourites"}
    </button>
  );
};

export default AddFavourite;
