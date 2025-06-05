import React, { useState } from 'react';
import { Button } from "../components/ui/button";
import { Layers, Menu, X, Facebook, Twitter, Instagram , Search,
  Globe, Calendar} from "lucide-react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

   const today = new Date().toLocaleDateString("en-IN", {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <>{/* 🔷 Top Dark Bar */}
      <div className="bg-gradient-to-r from-indigo-900 to-gray-950 text-gray-300 text-sm px-14 py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center max-[430px]:flex-col">
          <div className='flex gap-2 items-center'>
          <Calendar  size={16} />
          <span>{today}</span>
          </div>
          <div className="flex gap-4 items-center max-[430px]:pt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-4 h-4 hover:text-white" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-4 h-4 hover:text-white" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-4 h-4 hover:text-white" />
            </a>
          </div>
        </div>
      </div>
   
    <header className="border-b border-gray-100 px-14 py-4 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo + Toggle Button */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={toggleMenu}>
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <Layers className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">EduQuest</span>
          <span className="md:hidden ml-2">
            {menuOpen ? <X className="w-5 h-5 text-gray-800" /> : <Menu className="w-5 h-5 text-gray-800" />}
          </span>
        </div>

        {/* Nav Links - Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-gray-600 hover:text-indigo-600">Home</a>
          <a href="#about" className="text-gray-600 hover:text-indigo-600">About Us</a>
          <a href="#courses" className="text-gray-600 hover:text-indigo-600">Courses</a>
          <a href="#category" className="text-gray-600 hover:text-indigo-600">Category</a>
          <a href="#more" className="text-gray-600 hover:text-indigo-600">More</a>
        </nav>

        {/* Login Button */}
        <div className="hidden md:flex items-center gap-8 max-[950px]:gap-5 ">
          <Search className='text-gray-600 max-[900px]:hidden' size={16}/>
          <Menu className='text-gray-600 max-[900px]:hidden' size={16}/>
          <Globe className='text-gray-600 max-[900px]:hidden' size={16} />
          <Button className="bg-indigo-600 text-white transform transition duration-300 hover:scale-110">
            Login
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4 shadow-md space-y-3">
          <a href="#home" className="block text-gray-700 hover:text-indigo-600">Home</a>
          <a href="#about" className="block text-gray-700 hover:text-indigo-600">About Us</a>
          <a href="#courses" className="block text-gray-700 hover:text-indigo-600">Courses</a>
          <a href="#category" className="block text-gray-700 hover:text-indigo-600">Category</a>
          <a href="#more" className="block text-gray-700 hover:text-indigo-600">More</a>
          <Button className=" bg-indigo-600 text-white transform transition duration-300 hover:scale-105">
            Login
          </Button>
        </div>
      )}
    </header>
     </>
  );
}

export default Header;
