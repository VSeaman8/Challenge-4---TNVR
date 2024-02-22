import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" href="#">
        Navbar
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link className="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown link
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
    </nav>
  );
};

export default Navbar;
