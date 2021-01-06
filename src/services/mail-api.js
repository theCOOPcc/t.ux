import tokenService from '../services/tokenService';
const BASE_URL = '/api/nodemail/';

export function create(message) {
    return fetch(BASE_URL, {
        method: "POST",
        headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
        body: JSON.stringify(message)
    }, { mode: "cors" })
        .then(res => res.json());
}