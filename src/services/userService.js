import tokenService from "../services/tokenService";
const BASE_URL = "/api/users/";

// restrict access to functions on the front end

// this one works cory
function getAllUsers() {
  return fetch(
    BASE_URL,
    {
      headers: { Authorization: "Bearer " + tokenService.getToken() },
    },
    { mode: "cors" }
  ).then((res) => res.json());
}

// this one works cory
function deleteUser(id) {
  return fetch(`${BASE_URL}${id}`, {
    method: 'DELETE',
    headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
    }, 
    {mode: "cors"})
  .then(res => res.json());
}

// this one works cory
function getUser(user) {
  return fetch(`${BASE_URL}${user._id}`, {mode: "cors"})
  .then(res => res.json())
}

// this one works cory
function updateUser(user) {
  console.log('update service function', user)
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
  getAllUsers,
  deleteUser,
  getUser,
  updateUser
}