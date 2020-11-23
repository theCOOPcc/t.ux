import tokenService from '../services/tokenService';
const BASE_URL = 'api/lessons/';

export function create(lesson) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: { 'content-type': 'application/json', 'Authorization': 'Bearer' + tokenService.getToken() },
        body: JSON.stringify(lesson) }, {
            mode: 'cors' })
        .then(res => res.json());
}

export function getAll() {
    return fetch(BASE_URL, { mode: 'cors' })
    .then(res => res.json())
}

export function deleteOne(id) {
    return fetch(`${BASE_URL}${id}`, {
        method: 'DELETE',
        headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
    }, {mode: "cors"})
    .then(res => res.json());
}

export function getOne(lesson) {
    return fetch(`${BASE_URL}${lesson._id}`, {mode: "cors"})
    .then(res => res.json())
}

export function update(lesson) {
    return fetch(`${BASE_URL}${lesson._id}`, {
        method: "PUT",
        headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(lesson)
    }, {mode: "cors"})
    .then(res => res.json());
}