import { useState } from "react";
import { useNavigate } from "react-router-dom";
import fetchWeatherData from "../utilityFunctions/FetchWeatherData";
import "./SearchEngine.css";

const SearchEngine = ({ inNavbar }) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const className = inNavbar ? "navbar-search" : "search-container";

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const data = fetchWeatherData(search);
    navigate("/Weather", { state: data });
  };

  return (
    <>
      <div className={className}>
        <form onSubmit={handleSearchSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="locationInput"
              placeholder="Enter Location"
              value={search}
              onChange={handleSearchChange}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default SearchEngine;
