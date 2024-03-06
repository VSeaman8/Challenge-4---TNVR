import { useState, useRef } from "react";
import FetchAndNavigate from "./FetchAndNavigate.jsx";
import "./SearchEngine.css";

const SearchEngine = ({ inNavbar }) => {
  const [search, setSearch] = useState("");
  const [submit, setSubmit] = useState(false);
  //const searchRef = useRef();

  const className = inNavbar ? "navbar-search" : "search-container";

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    //searchRef.current = event.target.value;
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log(search);
    setSubmit(true);
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

          <button className="search-button" type="submit">
            Submit
          </button>
        </form>
      </div>
      {submit && <FetchAndNavigate location={search} />}
    </>
  );
};

export default SearchEngine;
