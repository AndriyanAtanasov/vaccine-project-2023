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
                    <a href="index.html">Home</a>
                  </li>
                  <li></li>
                  <li>
                    <a href="javascript:void(0)">What we do</a>
                  </li>
                  <li></li>
                  <li>
                    {" "}
                    <a href="javascript:void(0)">Media</a>
                  </li>
                  <li></li>
                  <li>
                    {" "}
                    <a href="javascript:void(0)">Travel Advice</a>
                  </li>
                  <li></li>
                  <li>
                    <a href="javascript:void(0)">Protection</a>
                  </li>
                  <li></li>
                  <li>
                    <a href="javascript:void(0)">Care</a>
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="hedingh3 text_align_left">
                <h3>About</h3>
                <p>
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="hedingh3  text_align_left">
                <h3>Contact Us</h3>
                <ul className="top_infomation">
                  <li>
                    <i className="fa fa-map-marker" aria-hidden="true" />
                    Making this the first true
                  </li>
                  <li>
                    <i className="fa fa-phone" aria-hidden="true" />
                    Call : +01 1234567890
                  </li>
                  <li>
                    <i className="fa fa-envelope" aria-hidden="true" />
                    <a href="Javascript:void(0)">Email : demo@gmail.com</a>
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
