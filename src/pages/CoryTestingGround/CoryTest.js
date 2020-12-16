import tokenService from '../services/tokenService';
import { activityData } from '../../SampleData/SampleData'
const BASE_URL = '/api/activities/';

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

create(activityData)