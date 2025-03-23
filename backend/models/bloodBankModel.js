const mongoose = require("mongoose");


const bloodBankSchema = new mongoose.Schema({
  sno: { type: Number, required: true },
  name: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  bloodGroup: { type: String, required: true },
  availability: { type: String, default: "Available" },
  lastUpdated: { type: Date, default: Date.now }  
});


const BloodBank = mongoose.model("BloodBank", bloodBankSchema);

module.exports = BloodBank;
