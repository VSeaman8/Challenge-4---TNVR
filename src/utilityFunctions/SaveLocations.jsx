const getLocations = () => {
  let favourites = JSON.parse(localStorage.getItem("favourites"));
  console.log(favourites);
  return favourites ? favourites : [];
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
