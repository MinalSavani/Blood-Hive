import React from 'react';
import { Link } from "react-router-dom";

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='bg-gray-900 text-gray-300 border-t border-red-500 px-10 md:px-[100px] shadow-xl py-12 mt-[50px] '>
          <div className='flex flex-wrap justify-between gap-8'>
          <div className='max-w-sm'>
            <h1 className='text-2xl font-semibold text-white'>
                  About Us
            </h1>
            <p className='mt-3 text-gray-400'>
            We are dedicated to saving lives through the power of blood donation. 
            Join us in making a difference—one drop at a time
            </p>
          </div>

          <div>
            <h3 className='text-xl font-semibold text-white'>
              Quick Links
            </h3>
            <ul className='mt-3 space-y-2'>
                

                <li>
                  <Link className=" hover:text-red-500 transition duration-300">
                  Home
                  </Link>
                </li>
                <li>
                  <Link className=" hover:text-red-500 transition duration-300">
                  About Us
                  </Link>
                </li>
                <li>
                  <Link className=" hover:text-red-500 transition duration-300">
                  Contact Us
                  </Link>
                </li>

                <li>
                  <Link to="/login"
                   className=" hover:text-red-500 transition duration-300">
               Admin
                  </Link>
                </li>
            </ul>
          </div>

          <div className='max-w-sm'>
                      <h3 className='text-xl font-semibold text-white'>
                        Contact Us
                      </h3>
                      <p className='mt-3 text-gray-400'>
                      Have questions or want to contribute? Get in touch with us.
                      </p>

                      <p className='mt-2'>
                      📞 +91 223344233
                      </p>
                      <p className='mt-2'>
                      📧 blooddonation@gmail.com
                      </p>

                    <div className='flex flex-row mt-3 space-x-2'>
                    <a  className="text-gray-400 hover:text-red-500 text-2xl transition duration-300">
              <FaFacebook />
            </a>
            <a  className="text-gray-400 hover:text-red-500 text-2xl transition duration-300">
              <FaTwitter />
            </a>
            <a  className="text-gray-400 hover:text-red-500 text-2xl transition duration-300">
              <FaInstagram />
            </a>
            <a className="text-gray-400 hover:text-red-500 text-2xl transition duration-300">
              <FaLinkedin />
            </a>
                    </div>
          </div>
          </div>

          <div className="border-t border-red-800 mt-8 pt-4 text-center">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Blood Donation | All Rights Reserved</p>
      </div>
   
    </div>
  );
}

export default Footer;
