import tokenService from "./tokenService";
const BASE_URL = '/api/auth/';

function signup(user) {
  return fetch(BASE_URL + 'signup', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(user)
  })
  .then(res => {
    // console.log(res, '<-- response object')
    return res.json();
  })
  .then(json => {
    if(json.token) return json;
    // console.log(json, '<-- the error')
    throw new Error(`${json.err}`)
  })
  .then(({ token }) => {
    tokenService.setToken(token);
    window.location = 
    'http://localhost:3000/activity/heuristics'
    // 'http://taketux.io/activity/heuristics'
    // 'http://tux-staging.herokuapp.com/activity/heuristics'
  })
}

function getUser() {
  return tokenService.getUserFromToken();
}

function logout() {
  tokenService.removeToken();
}

function logoutFromGoogle() {
  return fetch(BASE_URL + "logout")
  .then(
    console.log('logging out from google')
  )
}
 
function login(creds) {
  // console.log('auth service login function -- creds', creds)
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
  .then(({ token }) => 
  tokenService.setToken(token)
  )
}

// add this function to the google strategy:
// getJWTAfterGoogleLogin (req, res) <--this is on the front end
// respond with a token from the server
// put token in localStorage
// set the token to the google login

export default {
  signup,
  getUser,
  logout,
  logoutFromGoogle,
  login,
};