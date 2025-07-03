const Review = require('../models/review.model');
const Vendor = require('../models/vendor.model');

// Create review
exports.createReview = async (req, res) => {
  try {
    const { eventId, vendorId, rating, comment } = req.body;

    const review = new Review({
      user: req.userId, // From middleware
      event: eventId,
      vendor: vendorId,
      rating,
      comment
    });

    await review.save();

    // Update vendor rating if review is for vendor
    if (vendorId) {
      const vendorReviews = await Review.find({ vendor: vendorId });
      const avgRating = vendorReviews.reduce((sum, rev) => sum + rev.rating, 0) / vendorReviews.length;
      
      await Vendor.findByIdAndUpdate(vendorId, {
        rating: avgRating,
        totalReviews: vendorReviews.length
      });
    }

    res.status(201).json({ message: 'Review created successfully', review });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get reviews for event
exports.getEventReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ event: req.params.eventId })
      .populate('user', 'name')
      .sort({ createdAt: -1 });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get reviews for vendor
exports.getVendorReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ vendor: req.params.vendorId })
      .populate('user', 'name')
      .sort({ createdAt: -1 });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};