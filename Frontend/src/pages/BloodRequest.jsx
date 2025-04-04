import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

const BloodRequest = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    city: "",
    bloodGroup: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/bloodreq', formData);
      console.log('Blood Request Submitted:', response.data);
      alert("Blood request successfully submitted!");
      setFormData({
        name: "",
        age: "",
        email: "",
        phone: "",
        city: "",
        bloodGroup: "",
      }); // Reset form
    } catch (error) {
      console.error('Error submitting blood request:', error);
      alert("Failed to submit the blood request.");
    }
  };

  return (
    <div className="max-w-xl mx-auto my-8 p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Blood Request Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Age:</label>
          <input
            type="number"
            name="age"
            placeholder="25"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="example@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Phone Number:</label>
          <input
            type="number"
            name="phone"
            placeholder="1234567890"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">City:</label>
          <input
            type="text"
            name="city"
            placeholder="City Name"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Blood Group:</label>
          <select
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          >
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700"
          >
            Request Blood
          </button>
        </div>
      </form>
    </div>
  );
};

export default BloodRequest;
