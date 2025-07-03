const Admin = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Admin login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find admin
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT
    const token = jwt.sign({ adminId: admin._id }, process.env.JWT_SECRET, {
      expiresIn: '1d'
    });

    res.json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get dashboard stats
exports.getDashboardStats = async (req, res) => {
  try {
    const User = require('../models/user.model');
    const Event = require('../models/event.model');
    const Booking = require('../models/booking.model');
    const Organizer = require('../models/organizer.model');
    const Vendor = require('../models/vendor.model');

    const stats = {
      totalUsers: await User.countDocuments(),
      totalEvents: await Event.countDocuments(),
      totalBookings: await Booking.countDocuments(),
      totalOrganizers: await Organizer.countDocuments(),
      totalVendors: await Vendor.countDocuments(),
      pendingEvents: await Event.countDocuments({ isVerified: false }),
      pendingBookings: await Booking.countDocuments({ status: 'Pending' })
    };

    res.json(stats);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};