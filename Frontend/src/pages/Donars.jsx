import React, { useState, useEffect } from 'react';
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const Donars = () => {
  const [donars, setDonors] = useState([]);
  
  const handleDelete = async (id) => {
    console.log("Attempting to delete donor with ID:", id); // Debugging
    
    try {
      const res = await fetch(`http://localhost:5000/donors/${id}`, {
        method: "DELETE",
      });
  
      if (res.ok) {
        alert("Donor deleted successfully!");
        setDonors(donars.filter((donor) => donor._id !== id));
      } else {
        const errorMsg = await res.json();
        alert("Error deleting donor: " + errorMsg.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error, try again later.");
    }
  };
  
  useEffect(() => {
    const getDonors = async () => {
      try {
        const res = await fetch("http://localhost:5000/donors");
        const data = await res.json();
        console.log("Fetched Donors:", data); // Debugging step
        setDonors(data);
      } catch (error) {
        console.error("Error fetching donors:", error);
      }
    };
    getDonors();
  }, []);
  
  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "location", headerName: "Location", width: 200 },
    { field: "bloodType", headerName: "Blood Type", width: 90 },
    { field: "age", headerName: "Age", width: 90 }, // ✅ Added Age Field
    { field: "weight", headerName: "Weight (kg)", width: 110 }, // ✅ Added Weight Field
    {
      field: "delete",
      headerName: "Delete",
      width: 150,
      renderCell: (params) => (
        <FaTrash
          className="text-red-500 mt-5 cursor-pointer"
          onClick={() => handleDelete(params.row._id)} // ✅ Fix: Use params.row._id
        />
      ),
    }
  ];

  return (
    <div className='w-[70vw]'>
      <div className='flex items-center justify-between m-[30px]'>
        <h1 className='m-[20px] text-[20px] font-semibold'>All Donors</h1>
       
      </div>

      <div className='m-[30px]'>
        <DataGrid rows={donars} getRowId={(row) => row._id} columns={columns} checkboxSelection />
      </div>
    </div>
  );
};

export default Donars;