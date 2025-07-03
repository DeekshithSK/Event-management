const express = require('express');
const router = express.Router();
const vendorController = require('../controller/vendorController');

// Register vendor
router.post('/register', vendorController.register);

// Get all vendors, get by id, verify
router.get('/', vendorController.getAllVendors);
router.get('/:id', vendorController.getVendorById);
router.put('/:vendorId/verify', vendorController.updateVerificationStatus);

module.exports = router;