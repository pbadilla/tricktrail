import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <button
        className="text-gray-700 text-2xl p-2"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-lg transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {isOpen && (
          <ul className="flex flex-col p-4 space-y-2">
            <li>
              <a href="#home" className="block text-gray-700 hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="block text-gray-700 hover:text-blue-600">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="block text-gray-700 hover:text-blue-600">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="block text-gray-700 hover:text-blue-600">
                Contact
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default HamburgerMenu;
