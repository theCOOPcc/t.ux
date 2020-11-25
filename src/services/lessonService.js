import tokenService from '../services/tokenService';
const BASE_URL = 'api/lessons/';

function create(lesson) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: { 'content-type': 'application/json', 'Authorization': 'Bearer' + tokenService.getToken() },
        body: JSON.stringify(lesson) }, {
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

function getOne(lesson) {
    return fetch(`${BASE_URL}${lesson._id}`, {mode: "cors"})
    .then(res => res.json())
}

function update(lesson) {
    return fetch(`${BASE_URL}${lesson._id}`, {
        method: "PUT",
        headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(lesson)
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