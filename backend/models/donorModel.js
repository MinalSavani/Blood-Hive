// Register now parthi je donor che ae store
// donor schema
const mongoose = require("mongoose");

const donorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  weight: { type: Number, required: true },
  bloodType: { type: String, required: true },
  isEligible: { type: Boolean, default: true },
}, { timestamps: true });

const Donor = mongoose.model("Prospect", donorSchema);
module.exports = Donor; 
