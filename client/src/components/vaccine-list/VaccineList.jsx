import React, { useEffect, useState } from "react";

const base_url = "http://localhost:3030/jsonstore";

const VaccineList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(`${base_url}/users`)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(Object.values(data)); // Use Object.values on data
      });
  }, []);

  // console.log(characters);

  return (
    <>
      <div className="coronata">
        <div className="content">
          <div className="container">
            <h1 className="mb-5">Vaccinated people</h1>

            <div className="table-responsive custom-table-responsive">
              <table className="table custom-table">
                <thead>
                  <tr>
                    <th scope="col">Vaccine type</th>
                    <th scope="col">Vaccinated date</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Contact</th>
                    <th scope="col">More options</th>
                  </tr>
                </thead>
                <tbody>
                  <tr scope="row">
                    <td>
                      <ul>
                        {characters.map((data) => (
                          <li key={data._id}>{data.vaccineType}</li>
                        ))}
                      </ul>
                    </td>
                    <td>
                      <ul>
                        {characters.map((data) => (
                          <li key={data._id}>{data.vaccineDate}</li>
                        ))}
                      </ul>
                    </td>
                    <td>
                      <ul>
                        {characters.map((data) => (
                          <li key={data._id}>
                            {data.firstName} {data.lastName}
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td>
                      <ul>
                        {characters.map((data) => (
                          <li key={data._id}>{data.email}</li>
                        ))}
                      </ul>
                    </td>
                    <td>
                      {" "}
                      <ul>
                        {characters.map((data) => (
                          <li key={data._id}>{data.phoneNumber}</li>
                        ))}
                      </ul>
                    </td>
                    <td></td>
                  </tr>
                  <tr className="spacer">
                    <td colSpan="100"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VaccineList;
