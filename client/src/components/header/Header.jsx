import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/authContext.js";
import { useState } from "react";
import Logout from "../logout/Logout.jsx";

const Header = () => {
  const { isAuthenticated, username } = useContext(AuthContext);

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header-area">
      <div className="container">
        <div className="row d_flex">
          <div className="col-sm-3 logo_sm">
            <div className="logo">
              <a href="#"></a>
            </div>
          </div>
          <div className="col-lg-10 offset-lg-1 col-md-12 col-sm-9">
            <div className="navbar-area">
              <nav className="site-navbar">
                <ul>
                  <li>
                    <Link to="/" className="active">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/vaccinated">Vaccinated</Link>
                  </li>
                  <li>
                    <Link to="/" className="logo_midle">
                      covid-19
                    </Link>
                  </li>

                  {isAuthenticated && (
                    <>
                      <li>
                        <Link to="/add-vaccine">add vaccine</Link>
                      </li>
                      <li>
                        <div className="dropdown">
                          <button
                            onClick={handleDropdownToggle}
                            className="dropbtn"
                          >
                            HI, {username}
                          </button>
                          {isDropdownOpen && (
                            <div className="dropdown-content">
                              <Link
                                to="/logout"
                                className="dropdown-item"
                                onClick={Logout}
                              >
                                logout
                              </Link>
                            </div>
                          )}
                        </div>
                      </li>
                    </>
                  )}
                  {!isAuthenticated && (
                    <>
                      <li>
                        <Link to="/register">Register </Link>
                      </li>
                      <li>
                        <Link to="/login">login</Link>
                      </li>
                    </>
                  )}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
