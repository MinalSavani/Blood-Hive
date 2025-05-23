import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewDonar = () => {
  const [formData, setFormData] = useState({
    name: "",
    bloodType: "",
    location: "",
    contact: "",
    lastDonationDate: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate contact number
    if (!/^\d{10}$/.test(formData.contact)) {
      alert("Enter a valid 10-digit contact number.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/donors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Donor added successfully!");
        setFormData({
          name: "",
          location: "",
          contact: "",
          bloodType: "",
          lastDonationDate: "",
        });

        navigate("/admin/donars"); // ✅ Navigate properly
      } else {
        alert("Error adding donor.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error, try again later.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="m-[20px] p-[20px] h-[80vh] w-[450px]">
        <h2 className="font-semibold">New Donor</h2>
        <div className="flex flex-col my-[12px]">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            className="border-b-2 p-[10px] w-[300px]"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Blood Type</label>
          <select
            name="bloodType"
            className="border-b-2 p-[10px] w-[300px]"
            value={formData.bloodType}
            onChange={handleChange}
            required
          >
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>

          <label>Location</label>
          <input
            type="text"
            name="location"
            placeholder="Enter City/State"
            className="border-b-2 p-[10px] w-[300px]"
            value={formData.location}
            onChange={handleChange}
            required
          />

          <label>Contact</label>
          <input
            type="text"
            name="contact"
            placeholder="Enter Contact"
            className="border-b-2 p-[10px] w-[300px]"
            value={formData.contact}
            onChange={handleChange}
            required
          />

          <label>Last Donation Date</label>
          <input
            type="date"
            name="lastDonationDate"
            className="border-b-2 p-[10px] w-[300px]"
            value={formData.lastDonationDate}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="bg-[#444] cursor-pointer my-[10px] text-white p-[10px] w-[300px]"
          >
            Add Donor
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewDonar;
