const express = require('express');
const router = express.Router();
const organizerController = require('../controller/organizerController');

// Registration & Login
router.post('/register', organizerController.register);
router.post('/login', organizerController.login);

// Admin: Get all organizers, verify organizer
router.get('/', organizerController.getAllOrganizers);
router.put('/:organizerId/verify', organizerController.updateVerificationStatus);

module.exports = router;