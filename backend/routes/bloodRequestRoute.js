const express = require("express");
const BloodRequest = require("../models/bloodRequest");
const router = express.Router();

// POST: Submit blood request
router.post("/", async (req, res) => {
  try {
    const { name, age, email, phone, city, bloodGroup } = req.body;

    const newRequest = new BloodRequest({
      name,
      age,
      email,
      phone,
      city,
      bloodGroup,
    });

    await newRequest.save();
    res.status(201).json({ message: "Blood request submitted successfully", request: newRequest });
  } catch (error) {
    console.error("Error saving blood request:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// GET: Get all blood requests
router.get("/", async (req, res) => {
  try {
    const requests = await BloodRequest.find();
    res.status(200).json(requests);
  } catch (error) {
    console.error("Error fetching blood requests:", error);
    res.status(500).json({ message: "Failed to fetch requests" });
  }
});
router.put("/approve/:id", async (req, res) => {
  try {
    const request = await BloodRequest.findByIdAndUpdate(
      req.params.id,
      { status: "Approved" }, // ✅ Update status
      { new: true }
    );

    if (!request) {
      return res.status(404).json({ message: "Request not found" });
    }

    res.json({ message: "Blood request approved", request });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
