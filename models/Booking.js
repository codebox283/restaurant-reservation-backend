// models/Booking.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    time: { type: String, required: true },
    guests: { type: Number, required: true },
    name: { type: String, required: true },
    contact: { type: String, required: true },
    tableNumber: { type: Number, required: true },
    arrivalTime: { type: String, required: true },
    leavingTime: { type: String, required: true } 
});

module.exports = mongoose.model('Booking', bookingSchema);
