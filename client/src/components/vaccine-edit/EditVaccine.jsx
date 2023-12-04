import { useNavigate, useParams } from "react-router-dom";
import * as vaccineService from "../../services/vaccineService.js";

import { useEffect, useState } from "react";

import useForm from "../../hooks/useForm.js";

const EditVaccine = () => {
  const navigate = useNavigate();
  const { vaccineId } = useParams();
  const [vaccine, setVaccine] = useState({
    firstName: "",
  });

  useEffect(() => {
    vaccineService.getOne(vaccineId).then((result) => {
      setVaccine(result);
    });
  }, [vaccineId]);

  const editVaccineSubmitHandler = async (values) => {
    await vaccineService.edit(vaccineId, values);

    navigate("/vaccinated");
  };

  const { values, onChange, onSubmit } = useForm(
    editVaccineSubmitHandler,
    vaccine
  );

  return (
    <div className="container">
      <div className="coronata">
        <div id="ho_efcet" className="reader text_align_center">
          <form id="create" onSubmit={onSubmit}>
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
                onChange={onChange}
                value={values.firstName}
              />
              <label className="col-md-12 col-sm-9" htmlFor="lastName">
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder=""
                onChange={onChange}
                value={values.lastName}
              />
              <label className="  col-md-12 col-sm-9" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder=""
                onChange={onChange}
                value={values.email}
              />
              <label className="col-md-12 col-sm-9" htmlFor="phoneNumber">
                phone number
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder=""
                onChange={onChange}
                value={values.phoneNumber}
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
                value={values.vaccineDate}
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
                onChange={onChange}
                value={values.vaccineType}
              />
              <label className=" col-md-12 col-sm-9" htmlFor="country">
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                placeholder=""
                onChange={onChange}
                value={values.country}
              />
              <label className="col-md-12 col-sm-9" htmlFor="city">
                City
              </label>
              <input type="text" id="city" name="city" placeholder="" />
              <label className=" col-md-12 col-sm-9" htmlFor=""></label>
              <br />
              <input
                className="read_more "
                type="submit"
                defaultValue="Create Vaccine"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditVaccine;
