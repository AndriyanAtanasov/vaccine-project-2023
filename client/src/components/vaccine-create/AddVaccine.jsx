import { useNavigate } from "react-router-dom";
import * as vaccineService from "../../services/vaccineService.js";

const AddVaccine = () => {
  const navigate = useNavigate();

  const addVaccineSubmitHandler = async (e) => {
    e.preventDefault();

    const addVaccineData = Object.fromEntries(new FormData(e.currentTarget));

    await vaccineService.create(addVaccineData);

    navigate("/vaccinated");
  };

  return (
    <div className="container">
      <div className="coronata">
        <div id="ho_efcet" className="reader text_align_center">
          <form id="create" onSubmit={addVaccineSubmitHandler}>
            <div className="col-md-12">
              <div className="titlepage text_align_center ">
                <br />
                <h2>Vaccine</h2>
              </div>
              <label className="col-md-12 col-sm-9" htmlFor="firstName">
                First name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder=""
              />
              <label className="col-md-12 col-sm-9" htmlFor="lastName">
                Last name
              </label>
              <input type="text" id="lastName" name="lastName" placeholder="" />
              <label className="  col-md-12 col-sm-9" htmlFor="email">
                Email
              </label>
              <input type="text" id="email" name="email" placeholder="" />
              <label className="col-md-12 col-sm-9" htmlFor="phoneNumber">
                phone number
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder=""
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
              />
              <label className=" col-md-12 col-sm-9" htmlFor="vaccineType">
                Vaccine type
              </label>
              <input
                type="text"
                id="vaccineType"
                name="vaccineType"
                placeholder=""
              />
              <label className=" col-md-12 col-sm-9" htmlFor="country">
                Country
              </label>
              <input type="text" id="country" name="country" placeholder="" />
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

export default AddVaccine;
