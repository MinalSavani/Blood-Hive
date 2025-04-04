const mongoose = require("mongoose");

const VolunteerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  age: { type: Number, required: true },
  city: { type: String, required: true },
});

module.exports = mongoose.model("Volunteer", VolunteerSchema);
