import { Link, useLocation } from "react-router-dom";
import SearchEngine from "./SearchEngine";

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg ">
      <Link className="navbar-brand" href="#">
        Navbar
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
            <Link className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
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
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <Link className="dropdown-item" href="#">
                Action
              </Link>
              <Link className="dropdown-item" href="#">
                Another action
              </Link>
              <Link className="dropdown-item" href="#">
                Something else here
              </Link>
            </div>
          </li>
        </ul>
      </div>
      {location.pathname !== "/" && <SearchEngine />}
    </nav>
  );
};

export default Navbar;
