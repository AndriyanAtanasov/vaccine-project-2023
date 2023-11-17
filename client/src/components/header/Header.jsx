import { Link } from "react-router-dom";

const Header = () => {
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
                  <li>
                    <Link to="/news">news</Link>
                  </li>
                  <li>
                    <Link to="/add-vaccine">add vaccine</Link>
                  </li>

                  <li>
                    <Link to="/contact">logout </Link>
                  </li>
                </ul>
                <button className="nav-toggler">
                  <span></span>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
