const express = require("express");
const router = express.Router();
const passport = require("passport");

/*---------- Public Routes ----------*/
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/google/oauth2callback",
  passport.authenticate("google", {
    // we need to dial in our redirect URLs once users have been authenticated: what page do they land on?
    successRedirect: "/activity/heuristics",
    // "http://localhost:3000/activity/heuristics",
    // "http://taketux.io/activity/heuristics",
    // "https://thecoop-tux.herokuapp.com/activity/heuristics/",
    failureRedirect: "/login",
  })
  // , function (req, res) {
  //   console.log('AUTHENTICATED USER', req.user)
  //   res.redirect(
  //     'http://localhost:3000/activity/heuristics'
  //     // "http://23carnies.com/activity/heuristics"
  //     // 'http://thecoop-tux.herokuapp.com/activity/heuristics'
  //   );
  // }
);

router.get("/logout", function (req, res) {
  console.log("logging out", req.user);
  req.logout();
  res.redirect(
    // 'http://localhost:3000'
    "http://taketux.com"
    // 'http://thecoop-tux.herokuapp.com'
  );
});
/*---------- Protected Routes ----------*/

module.exports = router;
