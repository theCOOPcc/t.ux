const express = require('express');
const router = express.Router();
const groupsCtrl = require('../controllers/activities');

/*---------- Public Routes ----------*/
router.get('/', groupsCtrl.index)
router.post('/', checkAuth, groupsCtrl.create);

/*---------- Protected Routes ----------*/
router.use(require("../config/auth"));
router.get('/:id',checkAuth, groupsCtrl.show);
router.put('/:id', checkAuth, groupsCtrl.update);
router.delete('/:id', checkAuth, groupsCtrl.delete);

/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
    console.log(req.user)
    if (req.user) return next();
    if (req.isAuthenticated()) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

// function isLoggedIn(req, res, next) {
//     if (req.isAuthenticated()) return next();
//     res.redirect("/auth/google");
//   }

module.exports = router;