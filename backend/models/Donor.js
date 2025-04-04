const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  bloodType: { type: String, required: true },
  
  location: { type: String, required: true },  // <-- REQUIRED FIELD
  age: { type: Number, required: true },
  weight: { type: Number, required: true },
  role: { type: String, default: "donor" }
});

const Donor = mongoose.model('Donor', donorSchema);
module.exports = Donor;
