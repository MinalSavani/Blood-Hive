const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const adminRoutes = require("./routes/adminRoute");
const donorRoute = require("./routes/donorRoute");
const registerRoute = require("./routes/registerRoute");
const bloodBankRoute = require("./routes/bloodBankRoute");
const contactRoute = require("./routes/contactRoute");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/blood_donation")
  .then(() => console.log(" MongoDB Connected"))
  .catch((err) => console.log(" DB Connection Error:", err));

// Routes
app.use("/donors", donorRoute);
app.use("/register", registerRoute);
app.use("/api/admin", adminRoutes);
app.use("/api/bloodbanks", bloodBankRoute);
app.use("/contact", contactRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));