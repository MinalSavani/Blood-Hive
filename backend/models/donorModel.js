
const mongoose = require("mongoose");

const DonorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  age: { type: Number, required: true },
  weight: { type: Number, required: true },
  bloodType: { type: String, required: true },
  location: { type: String, required: true },  
  isEligible: { type: Boolean, default: false },
});


const Donor = mongoose.models.Donor || mongoose.model("Donor", DonorSchema);

module.exports = Donor;


