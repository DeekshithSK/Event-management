const Vendor = require('../models/vendor.model');

// Register vendor
exports.register = async (req, res) => {
  try {
    const { name, email, phone, category, description } = req.body;

    // Check if vendor already exists
    const existingVendor = await Vendor.findOne({ email });
    if (existingVendor) {
      return res.status(400).json({ message: 'Vendor already exists' });
    }

    // Create vendor
    const vendor = new Vendor({
      name,
      email,
      phone,
      category,
      description
    });

    await vendor.save();

    res.status(201).json({ message: 'Vendor registered successfully', vendor });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all vendors
exports.getAllVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find({ isActive: true });
    res.json(vendors);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get vendor by ID
exports.getVendorById = async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.params.id);
    if (!vendor) {
      return res.status(404).json({ message: 'Vendor not found' });
    }
    res.json(vendor);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Update vendor verification status (admin)
exports.updateVerificationStatus = async (req, res) => {
  try {
    const { vendorId } = req.params;
    const { isVerified } = req.body;

    const vendor = await Vendor.findByIdAndUpdate(
      vendorId,
      { isVerified },
      { new: true }
    );

    res.json({ message: 'Verification status updated', vendor });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};