import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ setIsMenuOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen, setIsMenuOpen]);

  return (
    <div className="sm:px-6 bg-[#202020] rounded-lg shadow-md shadow-gray-800 relative z-50">
      <nav className="max-w-7xl flex justify-between items-center py-2 mx-auto text-white px-4 sm:px-8 relative">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img
            src="/navbar/navbar.png"
            alt="navbar-logo"
            className="w-10 h-10 sm:w-12 sm:h-12 object-cover shadow-md shadow-gray-900 rounded-full"
          />
          <NavLink to="/">
            <h1 className="text-2xl font-semibold drop-shadow-xl text-gray-200">
              WorldAtlas
            </h1>
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FaTimes className="text-white w-6 h-6" />
          ) : (
            <FaBars className="text-white w-6 h-6" />
          )}
        </button>

        {/* Fullscreen Mobile Menu */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } lg:static lg:translate-x-0 lg:bg-transparent`}
        >
          {" "}
          <ul className="flex flex-col lg:flex-row font-medium text-center lg:text-left">
            <li className="mb-3 lg:mb-0">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-3 px-4 ${
                    isActive ? "text-yellow-400" : "text-gray-300"
                  } duration-200 border-b lg:border-0 border-gray-700 hover:bg-gray-800 lg:hover:bg-transparent hover:text-yellow-400`
                }
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li className="mb-3 lg:mb-0">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-3 px-4 ${
                    isActive ? "text-yellow-400" : "text-gray-300"
                  } duration-200 border-b lg:border-0 border-gray-700 hover:bg-gray-800 lg:hover:bg-transparent hover:text-yellow-400`
                }
                onClick={() => setIsOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li className="mb-3 lg:mb-0">
              <NavLink
                to="/country"
                className={({ isActive }) =>
                  `block py-3 px-4 ${
                    isActive ? "text-yellow-400" : "text-gray-300"
                  } duration-200 border-b lg:border-0 border-gray-700 hover:bg-gray-800 lg:hover:bg-transparent hover:text-yellow-400`
                }
                onClick={() => setIsOpen(false)}
              >
                Country
              </NavLink>
            </li>
            <li className="mb-3 lg:mb-0">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block py-3 px-4 ${
                    isActive ? "text-yellow-400" : "text-gray-300"
                  } duration-200 border-b lg:border-0 border-gray-700 hover:bg-gray-800 lg:hover:bg-transparent hover:text-yellow-400`
                }
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
