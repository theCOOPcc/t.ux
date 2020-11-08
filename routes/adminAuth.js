const express = require('express');
const router = express.Router();
const adminAuthCtrl = require('../controllers/adminAuth');

/*---------- Public Routes ----------*/
router.post('/signup', adminAuthCtrl.signup);
router.post("/login", adminAuthCtrl.login);

/*---------- Protected Routes ----------*/



module.exports = router;