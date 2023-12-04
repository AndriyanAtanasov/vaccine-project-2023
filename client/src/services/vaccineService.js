import * as request from "./requests.js";

const baseUrl = "http://localhost:3030/data/vaccine";

export const getAll = async () => {
  try {
    const result = await request.get(baseUrl); //getting all info for users from server.

    return result;
  } catch {
    console.log("GET ERROR, no content");
    return result;
  }
};

export const getOne = async (vaccineId) => {
  try {
    const result = await request.get(`${baseUrl}/${vaccineId}`); //getting info for user from server.

    return result;
  } catch {
    console.log("GET ERROR");
    return result;
  }
};

export const create = async (addVaccineData) => {
  try {
    const result = await request.post(baseUrl, addVaccineData); //add new vaccine to server

    return result;
  } catch {
    console.log("POST ERROR, not added new vaccine to server");
    return result;
  }
};

export const edit = async (vaccineId, addVaccineData) => {
  try {
    const result = await request.put(`${baseUrl}/${vaccineId}`, addVaccineData); //edit vaccine to server

    return result;
  } catch {
    console.log("POST ERROR, not added new vaccine to server");
    return result;
  }
};
