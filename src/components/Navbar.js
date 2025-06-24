import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { FaCode } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600 hover:from-blue-600 hover:to-purple-600 tracking-tight">
          <FaCode className="text-white drop-shadow-sm" />
          CodeWithSaqib
        </a>

        {/* Mobile menu toggle button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop menu */}
      <ul className="hidden md:flex gap-6 text-white font-medium">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          
          <Link to="/experience">Experience</Link>
        </li>
        <li>
        
          <Link to="/contact">Contact</Link>
        </li>
        
      </ul>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <ul className="md:hidden px-6 pb-4 text-white flex flex-col gap-4 bg-gray-800">
          
          <li><Link to="/">Home</Link></li>
          <li> <Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
