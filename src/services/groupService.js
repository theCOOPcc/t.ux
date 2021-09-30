const BASE_URL = "/api/groups/";

function create(group) {
  return fetch(
    BASE_URL,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(group),
    },
    { mode: "cors" }
  ).then((res) => res.json());
}

function getAll() {
  return fetch(BASE_URL, { mode: "cors" }).then((res) => res.json());
}

function deleteOne(id) {
  return fetch(
    `${BASE_URL}${id}`,
    {
      method: "DELETE",
    },
    { mode: "cors" }
  ).then((res) => res.json());
}

function getOne(group) {
  return fetch(`${BASE_URL}${group}`, { mode: "cors" }).then((res) =>
    res.json()
  );
}

function update(group) {
  return fetch(
    `${BASE_URL}${group._id}`,
    {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(group),
    },
    { mode: "cors" }
  ).then((res) => res.json());
}

export default {
  create,
  getAll,
  deleteOne,
  getOne,
  update,
};
