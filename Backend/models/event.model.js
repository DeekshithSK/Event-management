const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { 
    type: String, 
    required: true,
    enum: ['Wedding', 'Birthday', 'Corporate', 'Festival', 'Other']
  },
  venue: { type: String, required: true },
  date: { type: Date, required: true },
  themes: { type: String },
  capacity: { type: Number, required: true },
  pricing: { type: Number, required: true },
  description: { type: String, required: true },
  status: { 
    type: String, 
    default: 'Active',
    enum: ['Active', 'Cancelled', 'Completed', 'Pending']
  },
  organizer: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Organizer', 
    required: true 
  },
  category: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Category' 
  },
  images: [{ type: String }],
  isVerified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Event', eventSchema);