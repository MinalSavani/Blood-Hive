
const express = require("express");
const { registerDonor } = require("../controllers/registerController"); 

const router = express.Router();

router.post("/", registerDonor); 

module.exports = router;
