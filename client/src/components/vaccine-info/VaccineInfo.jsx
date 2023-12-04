import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import * as vaccineService from "../../services/vaccineService.js";
import AuthContext from "../../contexts/authContext.jsx";

const VaccineInfo = () => {
  const { userId, userName } = useContext(AuthContext);
  const [vaccine, setVaccine] = useState({});
  const { vaccineId } = useParams();

  useEffect(() => {
    vaccineService.getOne(vaccineId).then(setVaccine);
  }, [vaccineId]);

  return (
    <div className="coronata">
      <div className="content">
        <div className="container">
          <h1 className="mb-5">More Info</h1>
          <div className="login-container">
            <form className="login-form">
              <label>Name: {vaccine.firstName}</label>
              <br />
              <label>Last name: {vaccine.lastName}</label>
              <br />
              <label>Email address: {vaccine.email}</label>
              <br />
              <label>Phone number: {vaccine.phoneNumber}</label>
              <br />
              <label>Vaccine type: {vaccine.vaccineType}</label>
              <br />
              <label>Vaccine date: {vaccine.vaccineDate}</label>
              <br />
              <label>Country: {vaccine.country}</label>
              <br />
              <label>City: {vaccine.city}</label>
              <br />
            </form>

            <br />
          </div>
          {userId === vaccine._ownerId && (
            <div>
              <Link
                to={`/vaccine/${vaccineId}/edit`}
                className="read_more vaccine-more-options"
              >
                Edit
              </Link>
              <Link
                to="/vaccine/:vaccineId/edit"
                className="read_more vaccine-more-options"
              >
                X
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="coronata"></div>
      <div className="cevery_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VaccineInfo;
