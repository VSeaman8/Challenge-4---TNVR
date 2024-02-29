const getLocations = () => {
  let favourites = JSON.parse(localStorage.getItem("favourites"));
  return favourites ? favourites : [];
};

const saveLocation = (location) => {
  let favourites = JSON.parse(localStorage.getItem("favourites"));
  if (!favourites) {
    favourites = [];
  }
};

export { saveLocation, getLocations };
