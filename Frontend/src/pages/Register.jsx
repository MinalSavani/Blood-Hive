import { useState } from "react";

import axios from "axios"; // Import axios

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bloodType: "",
   location:"",
    age: "",
    weight: "",
    role: "donor",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.age < 18 || formData.weight < 50) {
      alert("You are not eligible to donate blood.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/donors", formData); 
      alert(res.data.message); // Show success message
    } catch (error) {
      console.error("Registration Error:", error.response?.data?.error || error.message);
      alert("Registration failed! Try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
    
      <form className="bg-white justify-center items-center p-6 rounded-lg shadow-lg w-full max-w-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-center text-red-600 mb-4">Register</h2>
        <input type="text" name="name" placeholder="Full Name" required className="w-full p-2 mb-3 border rounded" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" required className="w-full p-2 mb-3 border rounded" onChange={handleChange} />
        <input type="tel" name="phone" placeholder="Phone Number" required className="w-full p-2 mb-3 border rounded" onChange={handleChange} />
        <input type="text" name="bloodType" placeholder="Blood Type (if donor)" className="w-full p-2 mb-3 border rounded" onChange={handleChange} />

        <input
  type="text"
  name="location"
  placeholder="Location"
  required
  className="w-full p-2 mb-3 border rounded"
  value={formData.location}   // <-- Add this
  onChange={handleChange}
/>

        <input type="number" name="age" placeholder="Age" required className="w-full p-2 mb-3 border rounded" onChange={handleChange} />
        <input type="number" name="weight" placeholder="Weight (kg)" required className="w-full p-2 mb-3 border rounded" onChange={handleChange} />
        <select name="role" className="w-full p-2 mb-3 border rounded" onChange={handleChange}>
          <option value="donor">Donor</option>
          
        </select>
        <button type="submit" className="w-full p-2 bg-red-600 text-white rounded hover:bg-red-700 transition">Register</button>
      </form>
      </div>
   
  );
}
