import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditDonor = () => {
  const { id } = useParams();  // Get donor ID from URL
  const navigate = useNavigate();
  
  const [donor, setDonor] = useState({
    name: "",
    bloodType: "",
    location: "",
    contact: "",
    lastDonationDate: "",
  });

  useEffect(() => {
    // Fetch existing donor data
    const fetchDonor = async () => {
      try {
        const res = await fetch(`http://localhost:5000/donors/${id}`);
        const data = await res.json();
        setDonor(data);
      } catch (error) {
        console.error("Error fetching donor:", error);
      }
    };
    fetchDonor();
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    setDonor({ ...donor, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/donors/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(donor),
      });

      if (res.ok) {
        alert("Donor updated successfully!");
        navigate("/admin/donars");  // Redirect to donors list
      } else {
        alert("Error updating donor");
      }
    } catch (error) {
      console.error("Error updating donor:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Edit Donor</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={donor.name} onChange={handleChange} placeholder="Name" className="border p-2 w-full mb-2" />
          <input type="text" name="location" value={donor.location} onChange={handleChange} placeholder="Location" className="border p-2 w-full mb-2" />
          <input type="text" name="contact" value={donor.contact} onChange={handleChange} placeholder="Contact" className="border p-2 w-full mb-2" />
          <input type="date" name="lastDonationDate" value={donor.lastDonationDate} onChange={handleChange} className="border p-2 w-full mb-2" />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Update Donor</button>
        </form>
      </div>
    </div>
  );
};

export default EditDonor;
