import React, { useState, useEffect } from 'react';
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const Volunteer = () => {
  const [volunteers, setVolunteers] = useState([]);

  const handleDelete = async (id) => {
    console.log("Attempting to delete volunteer with ID:", id);

    try {
      const res = await fetch(`http://localhost:5000/api/volunteers/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        alert("Volunteer deleted successfully!");
        setVolunteers(volunteers.filter((volunteer) => volunteer._id !== id));
      } else {
        const errorMsg = await res.json();
        alert("Error deleting volunteer: " + errorMsg.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error, try again later.");
    }
  };

  useEffect(() => {
    const getVolunteers = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/volunteers");
        const data = await res.json();
        console.log("Fetched Volunteers:", data);
        setVolunteers(data);
      } catch (error) {
        console.error("Error fetching volunteers:", error);
      }
    };
    getVolunteers();
  }, []);

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "phone", headerName: "Phone", width: 120 },
    { field: "age", headerName: "Age", width: 90 },
    { field: "city", headerName: "City", width: 110 },
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
        <h1 className='m-[20px] text-[20px] font-semibold'>All Volunteers</h1>
        <Link to="/admin/newvolunteer">
          <button className='bg-[#1e1e1e] text-white p-[10px] cursor-pointer font-semibold'>
            New Volunteer
          </button>
        </Link>
      </div>

      <div className='m-[30px]'>
        <DataGrid rows={volunteers} getRowId={(row) => row._id} columns={columns} checkboxSelection />
      </div>
    </div>
  );
};

export default Volunteer;
