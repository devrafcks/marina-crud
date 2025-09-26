const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Login
router.get('/login', authController.loginForm);
router.post('/login', authController.login);

// Registro
router.get('/register', authController.registerForm);
router.post('/register', authController.register);

// Logout
router.get('/logout', authController.logout);

module.exports = router;
