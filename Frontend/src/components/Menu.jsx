import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // ✅ Added useNavigate
import {
  FaHome,
  FaUser,
  FaUsers,
  FaSignOutAlt, // ✅ Added Logout icon
} from "react-icons/fa";

const Menu = () => {
  const [activeLink, setActiveLink] = useState("/admin");
  const navigate = useNavigate(); // ✅ For Logout functionality

  const handleLinkActive = (link) => {
    setActiveLink(link);
  };

  // ✅ Handle Logout
  const handleLogout = () => {
    navigate("/"); // Redirect to Home/Login Page
  };

  return (
    <div className="h-screen w-[300px] bg-red-700 text-white p-6 flex flex-col justify-between shadow-lg">
      
      {/* Top Section (Admin Panel Title + Donors & Volunteers) */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>

        {/* Home */}
        <Link to="/admin" onClick={() => handleLinkActive("/admin")}>
          <div
            className={`flex items-center text-lg cursor-pointer p-3 rounded transition-colors 
              ${activeLink === "/admin" ? "bg-red-500" : "hover:bg-red-600"}`}
          >
            <FaHome className="mr-3" />
            Home
          </div>
        </Link>

        {/* Donors */}
        <Link to="/admin/donars" onClick={() => handleLinkActive("/admin/donars")}>
          <div
            className={`flex items-center text-lg cursor-pointer p-3 rounded transition-colors 
              ${activeLink === "/admin/donars" ? "bg-red-500" : "hover:bg-red-600"}`}
          >
            <FaUsers className="mr-3" />
            Donors
          </div>
        </Link>

        {/* Volunteers */}
        <Link to="/admin/volunteers" onClick={() => handleLinkActive("/admin/volunteers")}>
          <div
            className={`flex items-center text-lg cursor-pointer p-3 rounded transition-colors 
              ${activeLink === "/admin/volunteers" ? "bg-red-500" : "hover:bg-red-600"}`}
          >
            <FaUser className="mr-3" />
            Volunteers
          </div>
        </Link>
      </div>

      {/* Logout Button (Fixed at Bottom) */}
      <button
        onClick={handleLogout}
        className="flex items-center text-lg cursor-pointer p-3 rounded transition-colors hover:bg-red-900"
      >
        <FaSignOutAlt className="mr-3" />
        Logout
      </button>

    </div>
  );
};

export default Menu;
