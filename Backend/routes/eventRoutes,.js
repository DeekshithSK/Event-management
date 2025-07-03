const express = require('express');
const router = express.Router();
const eventController = require('../controller/eventController');

// Create event (organizer)
router.post('/', eventController.createEvent);

// Get all events, get by id
router.get('/', eventController.getAllEvents);
router.get('/:id', eventController.getEventById);

// Update, delete, verify event
router.put('/:id', eventController.updateEvent);
router.delete('/:id', eventController.deleteEvent);
router.put('/:eventId/verify', eventController.updateVerificationStatus);

module.exports = router;