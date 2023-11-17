const AddVaccine = () => {
  return (
    <div className="container">
      <div className="coronata">
        <div id="ho_efcet" className="reader text_align_center">
          <form id="create">
            <div className="col-md-12">
              <div className="titlepage text_align_center ">
                <br />
                <h2>Create Vaccine</h2>
              </div>
              <label
                className="col-lg-10 offset-lg-1 col-md-12 col-sm-9"
                htmlFor="firstName"
              ></label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter first name"
              />

              <label
                className="col-lg-10 offset-lg-1 col-md-12 col-sm-9"
                htmlFor="lastName"
              ></label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter last name"
              />

              <label
                className="col-lg-10 offset-lg-1 col-md-12 col-sm-9"
                htmlFor="email"
              ></label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter email address"
              />

              <label
                className="col-lg-10 offset-lg-1 col-md-12 col-sm-9"
                htmlFor="vaccineType"
              ></label>
              <input
                type="text"
                id="vaccineType"
                name="vaccineType"
                placeholder="Enter vaccine type"
              />
              <label
                className="col-lg-10 offset-lg-1 col-md-12 col-sm-9"
                htmlFor="country"
              ></label>
              <input
                type="text"
                id="country"
                name="country"
                placeholder="Enter country"
              />
              <label
                className="col-lg-10 offset-lg-1 col-md-12 col-sm-9"
                htmlFor="city"
              ></label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="Enter city"
              />
              <label
                className="col-lg-10 offset-lg-1 col-md-12 col-sm-9"
                htmlFor="street"
              ></label>
              <input
                type="text"
                id="street"
                name="street"
                placeholder="Enter street"
              />
              <label
                className="col-lg-10 offset-lg-1 col-md-12 col-sm-9"
                htmlFor="streetNumber"
              ></label>
              <input
                type="text"
                id="streetNumber"
                name="streetNumber"
                placeholder="Enter street number"
              />
              <label
                className="col-lg-10 offset-lg-1 col-md-12 col-sm-9"
                htmlFor="game-img"
              ></label>

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
