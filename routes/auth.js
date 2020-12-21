const express = require('express');
const router = express.Router();
const passport = require('passport')
const authCtrl = require('../controllers/auth');

/*---------- Public Routes ----------*/
router.post('/signup', authCtrl.signup);
router.post("/login", authCtrl.login);
router.get(
    "/google",
    passport.authenticiate("google", { scope: ["profile", "email"] })
);
router.get(
    "/google/oauth2callback",
    passport.authenticate("google", {
        // we need to dial in our redirect URLs once users have been authenticated: what page do they land on?
        successRedirect: "/",
        failureRedirect: "/",
    })
);
router.get("/logout", function(req, res) {
    req.logout();
    res.redirect('/');
});
/*---------- Protected Routes ----------*/


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router;