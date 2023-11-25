import { request } from "./requests.js";
const baseUrl = "http://localhost:3030/jsonstore/users";

export const getAll = async () => {
  const result = await request("GET", baseUrl);

  // console.log(Object.values(result));
  return Object.values(result);
};

export const create = async (addVaccineData) => {
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(addVaccineData),
  });

  const result = await response.json();

  return result;
};
