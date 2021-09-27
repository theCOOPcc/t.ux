const express = require("express");
const router = express.Router();
const usersCtrl = require("../controllers/users");

/*---------- Public Routes ----------*/
router.get("/user", usersCtrl.currentUser);
// router.get("'/test/:id'", usersCtrl.getAllInfo);

/*---------- Protected Routes ----------*/
router.get("/", checkAuth, usersCtrl.index);
router.put("/:id", checkAuth, usersCtrl.update);
// route below updates subdocument of SessionInfo in user schema.
router.put("/:id", usersCtrl.updateSessionInfo);

router.get("/:id", checkAuth, usersCtrl.showProfile);
router.delete("/:id", checkAuth, usersCtrl.deleteProfile);

/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
  if (req.isAuthenticated()) return next();
  return res.status(401).json({ msg: "Not Authorized" });
}

module.exports = router;
