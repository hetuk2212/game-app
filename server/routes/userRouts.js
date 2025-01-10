const express = require('express');
const userController = require('../controllers/ userController');
const router = express.Router();

// Example route
router.post('/register', userController.registerUser);

module.exports = router;
