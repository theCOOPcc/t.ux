import tokenService from '../services/tokenService';
const BASE_URL = '/api/activities/';

export default {
  create,
  getAll,
  deleteOne,
  getOne,
  update,
};

// this works cory
export function create(activity) {
    console.log('create an activity')
  return fetch(
    BASE_URL,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': 'Bearer' + tokenService.getToken()
      },
      body: JSON.stringify(activity),
    },
    {
      mode: 'cors',
    }
  ).then((res) => res.json());
}

// this works cory
function getAll() {
    console.log('get all activities')
  return fetch(
    BASE_URL,
    {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        //  'Authorization': 'Bearer' + tokenService.getToken()
      },
    },
    { mode: 'cors' }
  ).then((res) => res.json());
}

// this works cory
function deleteOne(id) {
    console.log('delete activity')
  return fetch(
    `${BASE_URL}${id}`,
    {
      method: 'DELETE',
      headers: { Authorization: 'Bearer ' + tokenService.getToken() },
    },
    { mode: 'cors' }
  ).then((res) => res.json());
}

// this works cory
function getOne(activityId) {
    console.log('one activity')
  return fetch(
      `${BASE_URL}${activityId}`, 
      {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
            'Authorization': 'Bearer' + tokenService.getToken()
        },
      },
      {  mode: 'cors' }
    ).then((res) => res.json());
}

// this works cory
function update(activity) {
    return fetch(
      `${BASE_URL}${activity._id}`,
      {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        //   Authorization: 'Bearer ' + tokenService.getToken(),
        },
        body: JSON.stringify(activity),
      },
      { mode: 'cors' }
    ).then((res) => res.json());
  }
