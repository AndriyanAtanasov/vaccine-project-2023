import * as request from "./requests.js";

const baseUrl = "http://localhost:3030/jsonstore/users";

export const getAll = async () => {
  try {
    const result = await request.get(baseUrl);

    return Object.values(result); //getting all info for users from server.
  } catch {
    console.log("GET ERROR");
  }
};

export const create = async (addVaccineData) => {
  try {
    const result = await request.post(baseUrl, addVaccineData);

    return result; //add new vaccine to server
  } catch {
    console.log("POST ERROR, not added new vaccine to server");
  }
};
