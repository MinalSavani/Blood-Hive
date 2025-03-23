const express = require("express");
const router = express.Router();
const BloodBank = require("../models/bloodBankModel");


router.get("/", async (req, res) => {
  try {
    const { state, city, bloodGroup } = req.query;

    const query = {};
    if (state) query.state = state;
    if (city) query.city = city;
    if (bloodGroup) query.bloodGroup = bloodGroup;

    const bloodBanks = await BloodBank.find(query);
    res.json(bloodBanks);
  } catch (error) {
    console.error(" Error fetching blood banks:", error);
    res.status(500).json({ error: "Failed to fetch blood banks" });
  }
});

module.exports = router;
