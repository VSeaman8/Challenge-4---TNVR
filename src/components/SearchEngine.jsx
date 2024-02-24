import "./SearchEngine.css";

const SearchEngine = ({ inNavbar }) => {
  const className = inNavbar ? "navbar-search" : "search-container";
  return (
    <>
      <div className={className}>
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="locationInput"
              placeholder="Enter Location"
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default SearchEngine;
