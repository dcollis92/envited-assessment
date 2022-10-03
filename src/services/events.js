/*
 * If wanting to use a JWT token, you could import the following:
 */
// import * as tokenService from "./tokenService";

const BASE_URL = `${process.env.REACT_APP_API_URL}/api/events/`;

// create Event
export const create = async (event) => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // Authorization: `Bearer ${tokenService.getToken()}`,
      },
      body: JSON.stringify(event),
    });
    return await res.json();
  } catch (error) {
    throw error;
  }
};

// get all Events
export const getAll = async () => {
  try {
    const res = await fetch(`${BASE_URL}`);
    return await res.json();
  } catch (error) {
    throw error;
  }
};

// get one Event
export const getOne = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}${id}`);
    return await res.json();
  } catch (error) {
    throw error;
  }
};

// get one Event
export const update = async (event) => {
  try {
    const res = await fetch(`${BASE_URL}${event.id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        // Authorization: `Bearer ${tokenService.getToken()}`,
      },
      body: JSON.stringify(event),
    });
    return await res.json();
  } catch (error) {
    throw error;
  }
};

// delete Event
export const deleteOne = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}${id}`, {
      method: "DELETE",
      // headers: { Authorization: `Bearer ${tokenService.getToken()}` },
    });
    return await res.json();
  } catch (error) {
    throw error;
  }
};
