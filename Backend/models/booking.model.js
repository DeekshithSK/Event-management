const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  event: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Event', 
    required: true 
  },
  eventName: { type: String, required: true },
  date: { type: Date, required: true },
  status: { 
    type: String, 
    default: 'Pending',
    enum: ['Pending', 'Confirmed', 'Cancelled', 'Completed']
  },
  numberOfGuests: { type: Number, required: true },
  totalAmount: { type: Number, required: true },
  paymentStatus: { 
    type: String, 
    default: 'Pending',
    enum: ['Pending', 'Paid', 'Failed', 'Refunded']
  },
  specialRequirements: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', bookingSchema);