const express = require('express');
const router = express.Router();
const lessonsCtrl = require('../controllers/lessons');

/*---------- Public Routes ----------*/
router.get('/', lessonsCtrl.index)

/*---------- Protected Routes ----------*/
router.use(require("../config/auth"));
router.post('/', checkAuth, lessonsCtrl.create);
router.get('/:id',checkAuth, lessonsCtrl.show);
router.put('/:id', checkAuth, lessonsCtrl.update);
router.delete('/:id', checkAuth, lessonsCtrl.delete);

/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;