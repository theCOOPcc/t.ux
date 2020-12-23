import tokenService from '../services/tokenService';
const BASE_URL = '/api/groups/';

function create(group) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: { 
            'Content-type': 'application/json', 
            Authorization: 'Bearer' + tokenService.getToken() },
        body: JSON.stringify(group) }, {
            mode: 'cors' })
        .then(res => res.json());
}

function getAll() {
    return fetch(BASE_URL, { mode: 'cors' })
    .then(res => res.json())
}

function deleteOne(id) {
    return fetch(`${BASE_URL}${id}`, {
        method: 'DELETE',
        headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
    }, {mode: "cors"})
    .then(res => res.json());
}

function getOne(group) {
    return fetch(`${BASE_URL}${group._id}`, {mode: "cors"})
    .then(res => res.json())
}

function update(group) {
    return fetch(`${BASE_URL}${group._id}`, {
        method: "PUT",
        headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(group)
    }, {mode: "cors"})
    .then(res => res.json());
}

export default {
    create,
    getAll,
    deleteOne,
    getOne,
    update
}