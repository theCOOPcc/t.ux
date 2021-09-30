const BASE_URL = "/api/managers/";

// restrict access to functions on the front end

function getAllManagers() {
  return fetch(BASE_URL, { mode: "cors" }).then((res) => res.json());
}

function deleteManager(id) {
  return fetch(
    `${BASE_URL}${id}`,
    {
      method: "DELETE",
    },
    { mode: "cors" }
  ).then((res) => res.json());
}

function getManager(user) {
  return fetch(`${BASE_URL}${user._id}`, { mode: "cors" }).then((res) =>
    res.json()
  );
}

function updateManager(user) {
  console.log(user);
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
  getAllManagers,
  deleteManager,
  getManager,
  updateManager,
};
