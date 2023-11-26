import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as vaccineService from "../../services/vaccineService.js";

const VaccineInfo = () => {
  const [vaccine, setVaccine] = useState({});
  const { vaccineId } = useParams();

  useEffect(() => {
    const test = vaccineService.getOne(vaccineId).then(setVaccine);
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
        </div>
      </div>
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
