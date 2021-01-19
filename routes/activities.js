const express = require('express');
const router = express.Router();
const activitiesCtrl = require('../controllers/activities');

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
// router.use(require('../config/auth'));
router.get('/', activitiesCtrl.index);
router.post('/', checkAuth, activitiesCtrl.create);
router.get('/:id', 
checkAuth, 
activitiesCtrl.show);
router.put('/:id', checkAuth, activitiesCtrl.update);
router.delete('/:id', checkAuth, activitiesCtrl.delete);

/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
    if (req.isAuthenticated()) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}
module.exports = router;
