import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditDonor = () => {
  const { id } = useParams();  // Get donor ID from URL
  const navigate = useNavigate();
  
  console.log("🛠️ Received donor ID:", id); // Debugging

  const [donor, setDonor] = useState({
    name: "",
    bloodType: "",
    location: "",
    contact: "",
    lastDonationDate: "",
    age: "",
    weight: ""
  });

  useEffect(() => {
    if (!id) {
      console.error("❌ No donor ID found in URL");
      return;
    }

    // Fetch existing donor data
    const fetchDonor = async () => {
      try {
        console.log("🔄 Fetching donor data for ID:", id);
        const res = await fetch(`http://localhost:5000/donors/${id}`);

        if (!res.ok) {
          throw new Error(`Server responded with status ${res.status}`);
        }

        const data = await res.json();

        if (data.lastDonationDate) {
          data.lastDonationDate = data.lastDonationDate.split("T")[0];
        }

        setDonor(data);
      } catch (error) {
        console.error("❌ Error fetching donor:", error);
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

    console.log("🛠️ Updating donor with ID:", id);
    console.log("🔄 Sending data:", donor);

    if (!id) {
      console.error("❌ Cannot update donor: ID is missing");
      alert("Error: Donor ID is missing");
      return;
    }

    try {
      const res = await fetch(`http://localhost:5000/donors/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(donor),
      });

      if (res.ok) {
        alert("✅ Donor updated successfully!");
        navigate("/admin/donors");
      } else {
        const errorData = await res.json();
        alert(`❌ Error updating donor: ${errorData.message}`);
      }
    } catch (error) {
      console.error("❌ Error updating donor:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Edit Donor</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={donor.name} onChange={handleChange} placeholder="Name" className="border p-2 w-full mb-2" />
          <input type="text" name="bloodType" value={donor.bloodType} onChange={handleChange} placeholder="Blood Type" className="border p-2 w-full mb-2" />
          <input type="text" name="location" value={donor.location} onChange={handleChange} placeholder="Location" className="border p-2 w-full mb-2" />
          <input type="text" name="contact" value={donor.contact} onChange={handleChange} placeholder="Contact" className="border p-2 w-full mb-2" />
          <input type="date" name="lastDonationDate" value={donor.lastDonationDate || ""} onChange={handleChange} className="border p-2 w-full mb-2" />
          <input type="number" name="age" value={donor.age} onChange={handleChange} placeholder="Age" className="border p-2 w-full mb-2" />
          <input type="number" name="weight" value={donor.weight} onChange={handleChange} placeholder="Weight (kg)" className="border p-2 w-full mb-2" />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Update Donor</button>
        </form>
      </div>
    </div>
  );
};

export default EditDonor;
