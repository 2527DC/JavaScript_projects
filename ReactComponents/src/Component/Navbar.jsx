import React, { useState } from 'react';
import './NavBar.css'; // Import your CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="text-black  navbar-bold-text">
      <div className="container mx-auto px-8 py-3 flex justify-between items-center">
        
        {/* Logo as a clickable anchor tag */}
        <div className="flex items-center">
          <a href="#home" className="flex items-center"> {/* Link to the home section or wherever you want */}
            <img src="public/logo.jpeg" alt="logo" className="h-[70px] w-[70px] object-contain" />
            <span className="ml-2 text-2xl font-bold"> <span className='"ml-2 text-5xl font-bold'>VG17</span> Services</span> {/* Adjust size and spacing */}
          </a>
        </div>
        
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About Us</a>

          {/* Services Dropdown */}
          <div className="relative group">
            <button className="nav-link flex items-center">
              Our Services
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu - Show on hover */}
            <div className="absolute top-full bg-white text-black border border-gray-500 rounded-lg shadow-lg hidden group-hover:block w-[150px]">
              <ul>
                <li><a href="#service1" className="nav-dropdown">Prospect Lists</a></li>
                <li><a href="#service2" className="nav-dropdown">Cleansing Data</a></li>
                <li><a href="#service3" className="nav-dropdown">Appending Data</a></li>
                <li><a href="#service4" className="nav-dropdown">Profiling Of Data</a></li>
                <li><a href="#service5" className="nav-dropdown">Marketing Via Email</a></li>
                <li><a href="#service6" className="nav-dropdown">Verification Of Data</a></li>
              </ul>
            </div>
          </div>

          {/* B2B Email List Dropdown */}
          <div className="relative group">
            <button className="nav-link flex items-center">
              B2B Email List
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* B2B Dropdown Menu - Show on hover */}
            <div className="absolute top-full bg-white text-black border border-gray-500 rounded-lg shadow-lg hidden group-hover:block w-[150px]">
              <ul>
                <li><a href="#healthcare" className="nav-dropdown">Healthcare List</a></li>
                <li><a href="#c-level" className="nav-dropdown">C Level List</a></li>
                <li><a href="#technology" className="nav-dropdown">Technology List</a></li>
              </ul>
            </div>
          </div>

          <a href="#reseller" className="nav-link">Reseller</a>
          <a href="#industries" className="nav-link">Industries</a>
          <a href="#contact" className="nav-link">Contact Us</a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <a href="#home" className="nav-dropdown">Home</a>
          <a href="#about" className="nav-dropdown">About Us</a>

          <div className="relative group">
            <button className="nav-link w-full text-left flex items-center">
              Services
            </button>

            {/* Mobile Dropdown Menu - Show on hover */}
            <div className="hidden group-hover:block bg-white text-black">
              <a href="#service1" className="nav-dropdown">Service 1</a>
              <a href="#service2" className="nav-dropdown">Service 2</a>
              <a href="#service3" className="nav-dropdown">Service 3</a>
            </div>
          </div>

          <div className="relative group">
            <button className="nav-link w-full text-left flex items-center">
              B2B Email List
            </button>

            {/* Mobile B2B Dropdown Menu - Show on hover */}
            <div className="hidden group-hover:block bg-white text-black">
              <a href="#healthcare" className="nav-dropdown">Healthcare List</a>
              <a href="#c-level" className="nav-dropdown">C Level List</a>
              <a href="#technology" className="nav-dropdown">Technology List</a>
            </div>
          </div>

          <a href="#reseller" className="nav-dropdown">Reseller</a>
          <a href="#industries" className="nav-dropdown">Industries</a>
          <a href="#contact" className="nav-dropdown">Contact Us</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

