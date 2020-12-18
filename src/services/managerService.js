import tokenService from "../services/tokenService";
const BASE_URL = "/api/managers/";

// restrict access to functions on the front end

function getAllManagers() {
  return fetch(
    BASE_URL,
    {
      headers: { Authorization: "Bearer " + tokenService.getToken() },
    },
    { mode: "cors" }
  ).then((res) => res.json());
}

function deleteManager(id) {
  return fetch(`${BASE_URL}${id}`, {
    method: 'DELETE',
    headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
    }, 
    {mode: "cors"})
  .then(res => res.json());
}

function getManager(user) {
  return fetch(`${BASE_URL}${user._id}`, {mode: "cors"})
  .then(res => res.json())
}

function updateManager(user) {
  console.log(user)
  return fetch(`${BASE_URL}${user._id}`, {
      method: "PUT",
      headers: {
        'content-type': 'application/json', 
        'Authorization': 'Bearer ' + tokenService.getToken()},
      body: JSON.stringify(user)
  }, {mode: "cors"})
  .then(res => res.json());
}

export default {
  getAllManagers,
  deleteManager,
  getManager,
  updateManager
}