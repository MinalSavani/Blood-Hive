const mongoose = require("mongoose");

// Defining volunteer schema
const volunteerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  age: { type: Number, required: true },
  city: { type: String, required: true },
});

const Volunteer = mongoose.model("Volunteer", volunteerSchema);

module.exports = Volunteer;
