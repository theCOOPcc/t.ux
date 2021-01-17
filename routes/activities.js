const express = require('express');
const router = express.Router();
const activitiesCtrl = require('../controllers/activities');

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
// router.use(require('../config/auth'));
router.get('/', activitiesCtrl.index);
router.post('/', checkAuth, activitiesCtrl.create);
router.get('/:id', 
// checkAuth, 
activitiesCtrl.show);
router.put('/:id', checkAuth, activitiesCtrl.update);
router.delete('/:id', checkAuth, activitiesCtrl.delete);

/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
    // console.log('activity router', req)
    // if (req) return next();
    if (req.isAuthenticated()) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

// function isLoggedIn(req, res, next) {
//     if (req.isAuthenticated()) return next();
//     res.redirect("/auth/google");
//   }

module.exports = router;
