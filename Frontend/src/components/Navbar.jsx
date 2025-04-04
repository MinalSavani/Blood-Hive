import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-100 shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-8 md:px-12 lg:px-20 h-[80px]">
        
        {/* Logo */}
        <h1 className="text-3xl font-bold text-red-700">
          🩸 Blood<span className="text-gray-900">Hive</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          <ScrollLink to="home" smooth={true} duration={800} className="cursor-pointer hover:text-red-600 transition duration-300">
            Home
          </ScrollLink>

         
          <Link to="/featured" className="hover:text-red-600 transition duration-300">
            About Us
          </Link>

          <Link to="/contactus" className="hover:text-red-600 transition duration-300">
            Contact Us
          </Link>

          <Link to="/bloodbank" className="hover:text-red-600 transition duration-300">
            Blood Bank
          </Link>

          
          <Link to="/bloodreq" className="hover:text-red-600 transition duration-300" 
           >
                Blood Request
              </Link>
        </div>




          

        {/* Mobile Menu Button */}
        <button className="md:hidden text-3xl text-red-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 shadow-lg py-5 absolute top-[80px] left-0 w-full">
          <ul className="flex flex-col space-y-4 text-center">
            <li>
              <ScrollLink to="home" smooth={true} duration={800} className="block text-lg font-medium text-gray-800 hover:text-red-600 transition duration-300" onClick={() => setIsOpen(false)}>
                Home
              </ScrollLink>
            </li>

           
            <li>
              <Link to="/services" className="block text-lg font-medium text-gray-800 hover:text-red-600 transition duration-300" onClick={() => setIsOpen(false)}>
                Services
              </Link>
            </li>

            <li>
              <Link to="/contactus" className="block text-lg font-medium text-gray-800 hover:text-red-600 transition duration-300" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>

            <li>
              <Link to="/bloodbank" className="block text-lg font-medium text-gray-800 hover:text-red-600 transition duration-300" onClick={() => setIsOpen(false)}>
                Blood Bank
              </Link>
            </li>

            <li>
            <Link to="/bloodreq" className="block text-lg font-medium text-gray-800 hover:text-red-600 transition duration-300" onClick={() => setIsOpen(false)}>
                Blood Request
              </Link>


            </li>

           
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
