const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// Ruta para registrar nuevo usuario
router.post('/register', userController.registerUser);

// Ruta para obtener usuario por ID
router.get('/:id', userController.getUserById);

module.exports = router;
