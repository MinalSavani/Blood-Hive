const express = require("express");
const router = express.Router();
const Volunteer = require("../models/Volunteer");

// Route 1: Register a new volunteer
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, age, city } = req.body;

    // Check if volunteer already exists
    const existingVolunteer = await Volunteer.findOne({ email });
    if (existingVolunteer) {
      return res.status(400).json({ message: "Volunteer already registered!" });
    }

    const newVolunteer = new Volunteer({ name, email, phone, age, city });
    await newVolunteer.save();
    res.status(201).json({ message: "Volunteer registered successfully!" });
  } catch (error) {
    console.error("Error registering volunteer:", error);
    res.status(500).json({ message: "Server error, try again later!" });
  }
});

// Route 2: Get all volunteers
router.get("/", async (req, res) => {
  try {
    const volunteers = await Volunteer.find();
    res.status(200).json(volunteers);
  } catch (error) {
    console.error("Error fetching volunteers:", error);
    res.status(500).json({ message: "Server error, try again later!" });
  }
});

// Route 3: Delete a volunteer
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Check if volunteer exists
    const volunteer = await Volunteer.findById(id);
    if (!volunteer) {
      return res.status(404).json({ message: "Volunteer not found!" });
    }

    await Volunteer.findByIdAndDelete(id);
    res.status(200).json({ message: "Volunteer deleted successfully!" });
  } catch (error) {
    console.error("Error deleting volunteer:", error);
    res.status(500).json({ message: "Server error, try again later!" });
  }
});

module.exports = router;
