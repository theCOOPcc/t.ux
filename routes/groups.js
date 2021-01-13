const express = require('express');
const router = express.Router();
const groupsCtrl = require('../controllers/groups');

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
// router.use(require("../config/auth"));
router.get('/',  groupsCtrl.index);
router.post('/', checkAuth, groupsCtrl.create);
router.get('/:id',checkAuth, groupsCtrl.show);
router.put('/:id', checkAuth, groupsCtrl.update);
router.delete('/:id', checkAuth, groupsCtrl.delete);

/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
    // console.log('group router', req)
    // if (req) return next();
    if (req.isAuthenticated()) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

// function isLoggedIn(req, res, next) {
//     if (req.isAuthenticated()) return next();
//     res.redirect("/auth/google");
//   }

module.exports = router;