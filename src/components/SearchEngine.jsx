const SearchEngine = () => {
  return (
    <>
      <form>
        <div class="form-group">
          <label htmlFor="locationInput">Location</label>
          <input
            type="text"
            class="form-control"
            id="locationInput"
            placeholder="Enter Location"
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default SearchEngine;
