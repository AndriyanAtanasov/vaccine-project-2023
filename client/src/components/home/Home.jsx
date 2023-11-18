import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="coronata">
      <div className="container">
        <div className="row d_flex grid">
          <div className="col-md-7">
            <div className="coronata_img text_align_center">
              <figure>
                <img src="images/corona.png" alt="#" />
              </figure>
              <br />
            </div>
          </div>
          <div className="col-md-5 oder1">
            <div className="titlepage text_align_left">
              <h2>Are you vaccinated?</h2>
              <p>
                if you are vaccinated and you want to participate in a global
                project, join us
              </p>
              <Link className="read_more" to="/about">
                About More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
