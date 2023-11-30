import React, { useEffect, useState } from "react";
import * as vaccineService from "../../services/vaccineService.js";
import VaccineListItem from "./vaccineList-item/VaccineList-item.jsx";

const VaccineList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    vaccineService.getAll().then((result) => setCharacters(result));
  }, []);

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
                {characters.reverse().map((char) => (
                  <VaccineListItem key={char._id} {...char} />
                ))}
              </table>
              {characters.length === 0 && (
                <h3 className="coronata mb-5">No info yet, please try later</h3>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VaccineList;
