import React from "react";
import { FiSearch, FiShoppingCart, FiUser, FiPhoneCall } from "react-icons/fi"; // React Icons for the icons
import { IoLocationOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
      {/* Top Contact Bar */}
      <div className="bg-gray-50 py-2 border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center text-sm text-gray-600">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <FiPhoneCall className="relative"></FiPhoneCall>
              <span className="relative pl-2">+1234567890</span>
            </div>
            <div className="flex items-center pl-4 pb-3">
              <div className=" w-4 h-[0px] origin-top-left rotate-90 border border-[#545454]"></div>
            </div>
            <div className="flex items-center">
              <IoLocationOutline className="relative"></IoLocationOutline>
              <span className="relative pl-2">
                Here is your shop Location, City Name
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-[#FFF7EB] py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-lg font-bold">
            <span className="bg-black text-white px-4 py-2">LOGO</span>
          </div>

          {/* Navigation Links */}
          <nav className="space-x-8">
            <a href="/" className="text-gray-800 hover:text-yellow-500">
              Home
            </a>
            <a href="/services" className="text-gray-800 hover:text-yellow-500">
              Services
            </a>
            <a href="/shop" className="text-gray-800 hover:text-yellow-500">
              Shop
            </a>
            <a
              href="/accessories"
              className="text-gray-800 hover:text-yellow-500"
            >
              Accessories
            </a>
            <a href="/blog" className="text-gray-800 hover:text-yellow-500">
              Blog
            </a>
            <a href="/about" className="text-gray-800 hover:text-yellow-500">
              About
            </a>
          </nav>

          {/* Icons Section */}
          <div className="flex space-x-4 text-gray-800">
            <FiSearch
              size={24}
              className="hover:text-yellow-500 cursor-pointer"
            />
            <FiShoppingCart
              size={24}
              className="hover:text-yellow-500 cursor-pointer"
            />
            <FiUser
              size={24}
              className="hover:text-yellow-500 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
