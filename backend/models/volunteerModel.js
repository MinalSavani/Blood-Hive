// register now parthi je volunteer che enu dta
const mongoose = require("mongoose");;

const volunteerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  city: { type: String, required: true },
}, { timestamps: true });

const Volunteer = mongoose.model("Volunteer", volunteerSchema);
module.exports = {Volunteer};