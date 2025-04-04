const express = require("express");
const router = express.Router();
const Volunteer = require("../models/Volunteer"); // Adjust path if needed

// Add New Volunteer
router.post("/", async (req, res) => {
  try {
    const newVolunteer = new Volunteer(req.body);
    await newVolunteer.save();
    res.status(201).json({ message: "Volunteer added successfully!" });
  } catch (error) {
    console.error("Error adding volunteer:", error);
    res.status(500).json({ error: "Failed to add volunteer." });
  }
});

module.exports = router;
