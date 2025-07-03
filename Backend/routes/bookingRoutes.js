const express = require('express');
const router = express.Router();
const bookingController = require('../controller/bookingController');

// Create booking (user)
router.post('/', bookingController.createBooking);

// Get bookings
router.get('/my', bookingController.getUserBookings);
router.get('/', bookingController.getAllBookings);

// Update booking status
router.put('/:bookingId/status', bookingController.updateBookingStatus);

module.exports = router;