const BASE_URL = "/api/activities/";

export default {
  create,
  getAll,
  getOne,
  update,
};

// this works cory
export function create(activity) {
  console.log("create an activity");
  return fetch(
    BASE_URL,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(activity),
    },
    {
      mode: "cors",
    }
  ).then((res) => res.json());
}

// this works cory
function getAll() {
  console.log("get all activities");
  return fetch(
    BASE_URL,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    },
    { mode: "cors" }
  ).then((res) => res.json());
}

// this works cory
function getOne(activityId) {
  console.log("one activity");
  return fetch(
    `${BASE_URL}${activityId}`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    },
    { mode: "cors" }
  ).then((res) => res.json());
}

// this works cory
function update(activity) {
  return fetch(
    `${BASE_URL}${activity._id}`,
    {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(activity),
    },
    { mode: "cors" }
  ).then((res) => res.json());
}
