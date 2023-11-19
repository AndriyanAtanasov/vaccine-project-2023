import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="hedingh3 text_align_left">
                <h3>Resources</h3>
                <ul className="menu_footer">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li></li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li></li>
                  <li>
                    <Link to="/vaccinated">Vaccinated</Link>
                  </li>
                  <li></li>
                  <li>
                    <Link to="/news">news</Link>
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="hedingh3 text_align_left">
                <h3>About</h3>
                <p>
                  Оur goal is to create a community for people who are
                  vaccinated and want to share
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="hedingh3  text_align_left">
                <h3>Contact Us</h3>
                <ul className="top_infomation">
                  <li>
                    <i className="fa fa-map-marker" aria-hidden="true" />
                    Sofia, Bulgaria
                  </li>
                  <li>
                    <i className="fa fa-phone" aria-hidden="true" />
                    Call : +359 78978978
                  </li>
                  <li>
                    <i className="fa fa-envelope" aria-hidden="true" />
                    <a href="#">Email: atanasov@mail.com</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="hedingh3 text_align_left">
                <h3>countrys</h3>
                <div className="map">
                  <img src="images/map.png" alt="#" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <p>© 2023 All Rights Reserved. Design by Atanasov EOD</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
