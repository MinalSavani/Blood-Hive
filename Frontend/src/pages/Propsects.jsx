import React from 'react';
import {DataGrid} from "@mui/x-data-grid";
import {Link} from "react-router-dom";
 import {FaTrash}  from "react-icons/fa";
const Prospects = () => {
        const columns=[
        
  {
    field:"id",
    headerName:"ID",
    width:90
  },

  {
    field:"name",
    headerName:"Name",
    width:150
  },

  {
    field:"address",
    headerName:"Address",
    width:150
  },
  {
    field:"bloodType",
    headerName:"BloodType",
    width:90
  },

  {
    field:"disease",
    headerName:"Disease",
    width:90
  },


  {
    field:"edit",
    headerName:"Edit",
    width:150,

    renderCell:()=>{
      return(
        <>
        <Link to={`/admin/prospect/123`}>
        <button className="bg-gray-400 px-4 py-2 text-white rounded">
          Approve
        </button>
       
        </Link>
        </>

      )
    }
  },

];
const rows = [
  
    { id: 1, name: 'Maitri', address: 'Delhi, India', bloodType: 'A+', disease: 'Diabetes' },
    { id: 2, name: 'Aryan', address: 'Mumbai, India', bloodType: 'B+', disease: 'Hypertension' },
    { id: 3, name: 'Isha', address: 'Bangalore, India', bloodType: 'O+', disease: 'Thalassemia' },
    { id: 4, name: 'Riya', address: 'Chennai, India', bloodType: 'AB+', disease: 'Anemia' },
    { id: 5, name: 'Seema', address: 'Kolkata, India', bloodType: 'A-', disease: 'None' },
    { id: 6, name: 'Aditya', address: 'Hyderabad, India', bloodType: 'B-', disease: 'Asthma' },
    { id: 7, name: 'Neha', address: 'Pune, India', bloodType: 'O-', disease: 'None' },
  ];




        

  return (
    <div className='w-[70vw]'>
    <div className='flex items-center justify-between m-[30px]'>
      <h1  className='m-[20px] text-[20px] font-semibold'>
        All Prospects
      </h1>

      <button className='bg-[#1e1e1e] text-white p-[10px]  cursor-pointer font-semibold'>
        New Donar
      </button>
    </div>

    <div className='m-[30px]'>
          <DataGrid rows={rows} columns={columns} checkboxSelection/>
    </div>
    </div>
  );
}

export default Prospects;
