const BASE_URL = "/api/auth/";

function logoutFromGoogle() {
  return fetch(BASE_URL + "logout").then(
    console.log("logging out from google")
  );
}

// add this function to the google strategy:
// getJWTAfterGoogleLogin (req, res) <--this is on the front end
// respond with a token from the server
// put token in localStorage
// set the token to the google login

export default {
  logoutFromGoogle,
};
