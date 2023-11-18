const baseUrl = "http://localhost:3030/jsonstore";

export const create = async (addVaccineData) => {
  const response = await fetch(`${baseUrl}/users`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(addVaccineData),
  });

  const result = await response.json();

  return result;
};
