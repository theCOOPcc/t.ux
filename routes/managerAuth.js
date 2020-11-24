const express = require('express');
const router = express.Router();
const managerAuthCtrl = require('../controllers/managerAuth');

/*---------- Public Routes ----------*/
router.post('/signup', managerAuthCtrl.signup);
router.post('/login', managerAuthCtrl.login);

/*---------- Protected Routes ----------*/

module.exports = router;
