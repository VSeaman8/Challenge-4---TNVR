const SearchEngine = () => {
  return (
    <>
      <div className="search-container">
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="locationInput"
              placeholder="Enter Location"
            />
          </div>

          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchEngine;
