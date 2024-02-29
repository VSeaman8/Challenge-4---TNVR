import AddFavourite from "./AddFavourite.jsx";

const Place = ({ location }) => {
  return (
    <div className="place-container">
      <h2>{location} </h2>
      <AddFavourite location={location} />
    </div>
  );
};

export default Place;
