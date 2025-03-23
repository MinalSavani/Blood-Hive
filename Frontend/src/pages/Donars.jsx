import React, { useState, useEffect } from 'react';
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const Donars = () => {
  const [donars, setDonors] = useState([]);


  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this donor?")) return;
  
    try {
      const res = await fetch(`http://localhost:5000/donors/${id}`, {
        method: "DELETE",
      });
  
      if (res.ok) {
        alert("Donor deleted successfully!");
  
        // Update donor list after deletion
        setDonors(donars.filter((donor) => donor._id !== id));
      } else {
        alert("Error deleting donor.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error, try again later.");
    }
  };
  
  useEffect(() => {
    const getDonors = async () => {
      try {
        const res = await fetch("http://localhost:5000/donors"); // ✅ Correct API call
        const data = await res.json();
        setDonors(data);
      } catch (error) {
        console.error("Error fetching donors:", error);
      }
    };
    getDonors();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "location", headerName: "Address", width: 200 },
    { field: "bloodType", headerName: "BloodType", width: 90 },
    {
      field: "edit",
      headerName: "Edit",
      width: 150,
      renderCell: (params) => (
        <Link to={`/admin/donars/${params.row._id}/edit`}>
          <button className="bg-gray-400 px-4 py-2 text-white rounded">Edit</button>
        </Link>
      ),
    },
    
    {
      field: "delete",
      headerName: "Delete",
      width: 150,
      renderCell: (params) => (
        <FaTrash
          className="text-red-500 mt-5 cursor-pointer"
          onClick={() => handleDelete(params.row._id)}
        />
      ),
    },
    
  ];

  return (
    <div className='w-[70vw]'>
      <div className='flex items-center justify-between m-[30px]'>
        <h1 className='m-[20px] text-[20px] font-semibold'>All Donors</h1>
        <Link to="/admin/newdonar">

          <button className='bg-[#1e1e1e] text-white p-[10px] cursor-pointer font-semibold'>New Donor</button>
        </Link>
      </div>

      <div className='m-[30px]'>
        <DataGrid rows={donars} getRowId={(row) => row._id} columns={columns} checkboxSelection />
      </div>
    </div>
  );
};

export default Donars;
