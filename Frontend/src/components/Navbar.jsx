import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom'; // ✅ Import Link for page navigation
import { FiMenu, FiX } from 'react-icons/fi'; // Icons for menu toggle

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu open/close

  return (
    <nav className="bg-gray-100 shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-8 md:px-12 lg:px-20 h-[80px]">
        
        {/* Logo */}
        <h1 className="text-3xl font-bold text-red-700">
          🩸 Blood<span className="text-gray-900">Hive</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          {["home", "featured", "contact"].map((section) => (
            <ScrollLink
              key={section}
              to={section}
              smooth={true}
              duration={800}
              className="cursor-pointer hover:text-red-600 transition duration-300"
              activeClass="text-red-700 font-bold"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </ScrollLink>
          ))}

          {/* ✅ Blood Bank should use <Link> to navigate instead of ScrollLink */}
          <Link
            to="/bloodbank"
            className="cursor-pointer hover:text-red-600 transition duration-300"
          >
            Blood Bank
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-red-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 shadow-lg py-5 absolute top-[80px] left-0 w-full">
          <ul className="flex flex-col space-y-4 text-center">
            {["home", "featured", "contact"].map((section) => (
              <li key={section}>
                <ScrollLink
                  to={section}
                  smooth={true}
                  duration={800}
                  className="block text-lg font-medium text-gray-800 hover:text-red-600 transition duration-300"
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </ScrollLink>
              </li>
            ))}

            {/* ✅ Mobile menu also needs to navigate properly to Blood Bank */}
            <li>
              <Link
                to="/bloodbank"
                className="block text-lg font-medium text-gray-800 hover:text-red-600 transition duration-300"
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                Blood Bank
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
