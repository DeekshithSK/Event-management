const Organizer = require('../models/organizer.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Register organizer
exports.register = async (req, res) => {
  try {
    const { fullName, email, phone, description, category, password } = req.body;

    // Check if organizer already exists
    const existingOrganizer = await Organizer.findOne({ email });
    if (existingOrganizer) {
      return res.status(400).json({ message: 'Organizer already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create organizer
    const organizer = new Organizer({
      fullName,
      email,
      phone,
      description,
      category,
      password: hashedPassword
    });

    await organizer.save();

    // Generate JWT
    const token = jwt.sign({ organizerId: organizer._id }, process.env.JWT_SECRET, {
      expiresIn: '1d'
    });

    res.status(201).json({ message: 'Organizer registered successfully', token });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Login organizer
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find organizer
    const organizer = await Organizer.findOne({ email });
    if (!organizer) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, organizer.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT
    const token = jwt.sign({ organizerId: organizer._id }, process.env.JWT_SECRET, {
      expiresIn: '1d'
    });

    res.json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all organizers (admin)
exports.getAllOrganizers = async (req, res) => {
  try {
    const organizers = await Organizer.find().select('-password');
    res.json(organizers);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Update organizer verification status (admin)
exports.updateVerificationStatus = async (req, res) => {
  try {
    const { organizerId } = req.params;
    const { isVerified } = req.body;

    const organizer = await Organizer.findByIdAndUpdate(
      organizerId,
      { isVerified },
      { new: true }
    ).select('-password');

    res.json({ message: 'Verification status updated', organizer });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};