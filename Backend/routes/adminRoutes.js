const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminController');

// Admin login
router.post('/login', adminController.login);

// Dashboard stats
router.get('/dashboard', adminController.getDashboardStats);

module.exports = router;