const getLocations = () => {
  let favourites = JSON.parse(localStorage.getItem("favourites")) || [];

  return favourites.filter((location) => typeof location === "string");
};

const saveLocation = (location) => {
  let favourites = JSON.parse(localStorage.getItem("favourites"));
  if (!favourites) {
    favourites = [];
  }
  if (!favourites.includes(location)) {
    favourites.push(location);
  }
  localStorage.setItem("favourites", JSON.stringify(favourites));
};

export { saveLocation, getLocations };
