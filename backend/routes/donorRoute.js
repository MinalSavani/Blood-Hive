const express = require("express");
const mongoose = require("mongoose");
const Donor = require("../models/Donor");

const router = express.Router();

// Get all donors
router.get("/", async (req, res) => {
  try {
    const donors = await Donor.find();
    res.json(donors);
  } catch (error) {
    console.error("Error fetching donors:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

// Register a new donor
router.post("/", async (req, res) => {
  try {
    console.log("Received Data:", req.body); // Debugging step

    const { name, email, phone, bloodType, location, age, weight } = req.body;

    if (!name || !email || !phone || !bloodType || !location || !age || !weight) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newDonor = new Donor({ 
      name, 
      email, 
      phone, 
      bloodType, 
     location, 
      age, 
      weight 
    });

    await newDonor.save();
    
    console.log("Donor saved:", newDonor);
    res.status(201).json({ message: "Donor registered successfully", donor: newDonor });

  } catch (error) {
    console.error("Error adding donor:", error);
    res.status(500).json({ message: "Error adding donor" });
  }
});

// ❌ FIXED: DELETE route is now correctly placed outside of the POST route
router.delete("/:id", async (req, res) => {
  try {
    console.log("Received DELETE request for ID:", req.params.id);

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.log("Invalid donor ID format:", id);
      return res.status(400).json({ message: "Invalid donor ID format" });
    }

    const deletedDonor = await Donor.findByIdAndDelete(id);

    if (!deletedDonor) {
      console.log("Donor not found:", id);
      return res.status(404).json({ message: "Donor not found" });
    }

    console.log("Donor deleted successfully:", deletedDonor);
    res.json({ message: "Donor deleted successfully" });

  } catch (error) {
    console.error("Error deleting donor:", error);
    res.status(500).json({ message: "Server Error" });
  }
});
// Update an existing donor
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Received UPDATE request for ID:", id);
    console.log("Request Body:", req.body);

    // Check if the donor ID is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.log("Invalid donor ID format:", id);
      return res.status(400).json({ message: "Invalid donor ID format" });
    }

    // Find the donor and update their details
    const updatedDonor = await Donor.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedDonor) {
      console.log("Donor not found:", id);
      return res.status(404).json({ message: "Donor not found" });
    }

    console.log("Donor updated successfully:", updatedDonor);
    res.json({ message: "Donor updated successfully", donor: updatedDonor });

  } catch (error) {
    console.error("Error updating donor:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});
module.exports = router;
