import { Link, useLocation } from "react-router-dom";
import { getLocations } from "../utilityFunctions/SaveLocations.jsx";
import SearchEngine from "./SearchEngine";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const favouriteLocations = getLocations();
  return (
    <div className="navbar-container">
      <nav className="navbar navbar-expand-lg ">
        <Link className="navbar-brand" to="/">
          Tell Me About.....
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Favourite Locations
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                {favouriteLocations.map((location, index) => (
                  <Link
                    key={index}
                    className="dropdown-item"
                    to={`//${location}`}
                  >
                    {location}
                  </Link>
                ))}
              </div>
            </li>
          </ul>
        </div>
        {location.pathname !== "/" && <SearchEngine inNavbar />}
      </nav>
    </div>
  );
};

export default Navbar;
