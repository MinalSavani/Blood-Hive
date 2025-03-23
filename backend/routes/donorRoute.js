const express = require("express");
const Donor = require("../models/Donor");

const router = express.Router();

// Get all donors
router.get("/", async (req, res) => {
  try {
    const donors = await Donor.find();
    res.json(donors);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Add a new donor
router.post("/", async (req, res) => {
  try {
    const { name, bloodType, location, contact, lastDonationDate } = req.body;
    const newDonor = new Donor({ name, bloodType, location, contact, lastDonationDate });
    await newDonor.save();
    res.status(201).json(newDonor);
  } catch (error) {
    res.status(500).json({ message: "Error adding donor" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedDonor = await Donor.findByIdAndDelete(req.params.id);
    if (!deletedDonor) {
      return res.status(404).json({ message: "Donor not found" });
    }
    res.status(200).json({ message: "Donor deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Update a donor
router.put("/:id", async (req, res) => {
  try {
    const updatedDonor = await Donor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedDonor) return res.status(404).json({ message: "Donor not found" });

    res.json(updatedDonor);
  } catch (error) {
    res.status(500).json({ message: "Error updating donor" });
  }
});




module.exports = router;
