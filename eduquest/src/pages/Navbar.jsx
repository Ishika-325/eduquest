import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white shadow-md fixed w-full z-20 top-0 left-0">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo as Hamburger Trigger */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={toggleMenu}>
          <span className="text-xl font-bold text-indigo-600">EduQuest</span>
          <span className="lg:hidden">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </span>
        </div>

        {/* Nav Links (Desktop) */}
        <div className="hidden lg:flex space-x-6 text-gray-700 font-medium">
          <a href="#home" className="hover:text-indigo-600">Home</a>
          <a href="#courses" className="hover:text-indigo-600">Courses</a>
          <a href="#about" className="hover:text-indigo-600">About</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
        </div>
      </div>

      {/* Nav Links (Mobile Dropdown) */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md px-6 pb-4 space-y-3">
          <a href="#home" className="block text-gray-700 hover:text-indigo-600">Home</a>
          <a href="#courses" className="block text-gray-700 hover:text-indigo-600">Courses</a>
          <a href="#about" className="block text-gray-700 hover:text-indigo-600">About</a>
          <a href="#contact" className="block text-gray-700 hover:text-indigo-600">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
