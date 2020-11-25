import tokenService from '../services/tokenService';
const BASE_URL = 'api/managers/';

function getAll() {
  return fetch(
    BASE_URL,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + tokenService.getToken(),
      },
    },
    { mode: 'cors' }
  ).then((res) => res.json());
}

function update(id) {
  return fetch(
    `${BASE_URL}/${id}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + tokenService.getToken(),
      },
      body: JSON.stringify(data),
    },
    { mode: 'cors' }
  ).then((res) => res.json());
}

export default {
  getAll,
  update,
};
