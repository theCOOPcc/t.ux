const express = require('express');
const router = express.Router();
const managersCtrl = require('../controllers/managers');

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
// router.use(require("../config/auth"));
router.get("/", checkAuth, managersCtrl.indexManagers);
router.put('/:id', checkAuth, managersCtrl.updateManager);



/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
  if (req.isAuthenticated()) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;