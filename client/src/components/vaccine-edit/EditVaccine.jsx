import { Link, useNavigate, useParams } from "react-router-dom";
import * as vaccineService from "../../services/vaccineService.js";

import { useEffect, useState } from "react";

const EditVaccine = () => {
  const navigate = useNavigate();
  const { vaccineId } = useParams();
  const [vaccine, setVaccine] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    vaccineDate: "",
    vaccineType: "",
    country: "",
    city: "",
  });

  useEffect(() => {
    vaccineService.getOne(vaccineId).then((result) => {
      setVaccine(result);
    });
  }, [vaccineId]);

  const editVaccineSubmitHandler = async (e) => {
    e.preventDefault();

    const values = Object.fromEntries(new FormData(e.currentTarget));

    await vaccineService.edit(vaccineId, values);

    navigate("/vaccinated");
  };

  const onChange = (e) => {
    setVaccine((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="container">
      <div className="coronata">
        <div id="ho_efcet" className="reader text_align_center">
          <form id="create" onSubmit={editVaccineSubmitHandler}>
            <div className="col-md-12">
              <div className="titlepage text_align_center ">
                <br />
                <h2>Edit Vaccine</h2>
              </div>
              <label className="col-md-12 col-sm-9" htmlFor="firstName">
                First name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder=""
                value={vaccine.firstName}
                onChange={onChange}
              />
              <label className="col-md-12 col-sm-9" htmlFor="lastName">
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder=""
                value={vaccine.lastName}
                onChange={onChange}
              />
              <label className="  col-md-12 col-sm-9" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder=""
                value={vaccine.email}
                onChange={onChange}
              />
              <label className="col-md-12 col-sm-9" htmlFor="phoneNumber">
                phone number
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder=""
                value={vaccine.phoneNumber}
                onChange={onChange}
              />
              <label className="col-md-12 col-sm-9" htmlFor="vaccineDate">
                Vaccine date
              </label>
              <input
                type="date"
                id="vaccineDate"
                name="vaccineDate"
                min="2018-01-01"
                max="2030-12-31"
                value={vaccine.vaccineDate}
                onChange={onChange}
              />
              <label className=" col-md-12 col-sm-9" htmlFor="vaccineType">
                Vaccine type
              </label>
              <input
                type="text"
                id="vaccineType"
                name="vaccineType"
                placeholder=""
                value={vaccine.vaccineType}
                onChange={onChange}
              />
              <label className=" col-md-12 col-sm-9" htmlFor="country">
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                placeholder=""
                value={vaccine.country}
                onChange={onChange}
              />
              <label className="col-md-12 col-sm-9" htmlFor="city">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder=""
                value={vaccine.city}
                onChange={onChange}
              />
              <label className=" col-md-12 col-sm-9" htmlFor=""></label>
              <br />
              <input className="read_more " type="submit" />
              <br />
            </div>
          </form>
          <br />
          <Link to={-1} className="read_more ">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EditVaccine;
