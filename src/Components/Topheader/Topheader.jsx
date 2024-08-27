import React from 'react';
import { FaSignInAlt, FaStar, FaClock, FaQuestionCircle } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const TopHeader = () => {
  return (
    <>
      <div className='font-poppins bg-gray-900 text-white py-2 pr-12 flex justify-end items-center shadow-md'>
        <div className='flex items-center space-x-7'>
          <NavLink to="/gundrukreads-login" className='text-sm font-medium text-white hover:text-blue-400 transition-colors duration-300 flex items-center space-x-1'>
            <FaSignInAlt />
            <span>Login/Register</span>
          </NavLink>

          <NavLink to="/best-sellers" className='text-sm font-medium text-white hover:text-blue-400 transition-colors duration-300 flex items-center space-x-1'>
            <FaStar />
            <span>Best Sellers</span>
          </NavLink>

          <NavLink to="/new-arrivals" className='text-sm font-medium text-white hover:text-blue-400 transition-colors duration-300 flex items-center space-x-1'>
            <FaClock />
            <span>New Arrivals</span>
          </NavLink>

          <NavLink to="/help-support" className='text-sm font-medium text-white hover:text-blue-400 transition-colors duration-300 flex items-center space-x-1'>
            <FaQuestionCircle />
            <span>Help/Support</span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
