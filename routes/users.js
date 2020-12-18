const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(require("../config/auth"));
router.get("/", checkAuth, usersCtrl.index);
router.put("/:id", checkAuth, usersCtrl.update);
router.get("/:id", checkAuth, usersCtrl.showProfile);
router.delete("/:id", checkAuth, usersCtrl.deleteProfile)

/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
  console.log('user router', req.user)
  if (req.user.userPermissions == 0) return next();
  // if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;