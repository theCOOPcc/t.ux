const express = require('express');
const router = express.Router();
const passport = require('passport');
const authCtrl = require('../controllers/auth');

/*---------- Public Routes ----------*/
router.post('/signup', authCtrl.signup);
router.post('/login', authCtrl.login);
router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);
router.get(
  '/google/oauth2callback',
  passport.authenticate(
    'google',
    {
        // we need to dial in our redirect URLs once users have been authenticated: what page do they land on?
        successRedirect: 
        // "http://taketux.io/activity/heuristics",
        // "http://localhost:3000/activity/heuristics",
        "https://tux-staging.herokuapp.com/activity/heuristics/",
        failureRedirect: "/login",
    }
    // generateUserToken
  )
);
router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});
/*---------- Protected Routes ----------*/

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}

// function createJWT(user) {
//     return jwt.sign(
//       { user }, // data payload
//       process.env.SECRET,
//       { expiresIn: "24h" }
//     );
//   }

// function generateUserToken(req, res) {
//     console.log('generating user token', req)
//     // const accessToken = token.createJWT(req.user);
//     // console.log('user token: ', accessToken)
//     // res.render('https://localhost:3000', { accessToken })
// }

module.exports = router;
