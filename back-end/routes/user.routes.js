const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/register', userController.registerUser);

router.get('/:id', userController.getUserById);

module.exports = router;