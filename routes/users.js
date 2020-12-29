const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
// router.use(require("../config/auth"));
router.get("/", checkAuth, usersCtrl.index);
router.put("/:id", checkAuth, usersCtrl.update);
router.get("/:id", checkAuth, usersCtrl.showProfile);
router.delete("/:id", checkAuth, usersCtrl.deleteProfile)

/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
  // console.log('user router', req.user)
  // if (req.user) return next();
  if (req) return next();
  if (req.isAuthenticated()) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

// function isLoggedIn(req, res, next) {
//   if (req.isAuthenticated()) return next();
//   res.redirect("/auth/google");
// }

module.exports = router;