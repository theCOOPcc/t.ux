const BASE_URL = "/api/users/";

// this one works cory
function getAllUsers() {
  return fetch(BASE_URL, { mode: "cors" }).then((res) => res.json());
}

// this one works cory
function deleteUser(id) {
  return fetch(
    `${BASE_URL}${id}`,
    {
      method: "DELETE",
    },
    { mode: "cors" }
  ).then((res) => res.json());
}

// this one works cory
function getUser(user) {
  return fetch(`${BASE_URL}${user.id}`, { mode: "cors" }).then((res) =>
    res.json()
  );
}

function getCurrentUser() {
  return fetch(`${BASE_URL}` + "user", { mode: "cors" }).then((res) =>
    res.json()
  );
}

// this one works cory
function updateUser(user) {
  // console.log('update service function', user)
  return fetch(
    `${BASE_URL}${user._id}`,
    {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    },
    { mode: "cors" }
  ).then((res) => res.json());
}

function updateSessionInfo(user) {
  return fetch(
    `${BASE_URL}${user._id}`,
    {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    },
    { mode: "cors" }
  ).then((res) => res.json());
}

export default {
  getAllUsers,
  deleteUser,
  getUser,
  updateUser,
  getCurrentUser,
  updateSessionInfo,
};
