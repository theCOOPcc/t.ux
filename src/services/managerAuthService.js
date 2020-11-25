import managerTokenService from './managerTokenService'

const BASE_URL = '/api/managerAuth/';

function signup(manager) {
  return fetch(BASE_URL + 'signup', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(manager)
  })
  .then(res => {
    console.log(res, '<-- response object')
    return res.json();
  })
  .then(json => {
    if(json.token) return json;
    console.log(json, '<-- the error')
    throw new Error(`${json.err}`)
  })
  .then(({ token }) => {
    managerTokenService.setToken(token);
  })
}

function getManager() {
  console.log('getting manager')
  return managerTokenService.getUserFromToken();
}

function logout() {
  managerTokenService.removeToken();
}

function login(creds) {
  console.log('credentials', creds)
  return fetch(BASE_URL + "login", {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(creds),
  })
  .then((res) => {
    // Valid login if we have a status of 2xx (res.ok)
    if (res.ok) return res.json();
    throw new Error("Bad Credentials!");
  })
  .then(({ token }) => managerTokenService.setToken(token));
}

export default {
  signup,
  getManager,
  logout,
  login,
};