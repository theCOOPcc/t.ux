const BASE_URL = "/api/nodemail/";

export function create(group) {
  console.log("sending email backend");
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
