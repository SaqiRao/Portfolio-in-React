import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Or use any other icon lib or SVG

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">My Portfolio</h1>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6 text-white">
          <li><a href="#about" className="hover:text-teal-400">About</a></li>
          <li><a href="#projects" className="hover:text-teal-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-teal-400">Contact</a></li>
          <li><a href="#services" className="hover:text-teal-400">Services</a></li>
        </ul>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <ul className="md:hidden px-6 pb-4 text-white flex flex-col gap-4 bg-gray-800">
          <li><a href="#about" className="hover:text-teal-400">About</a></li>
          <li><a href="#projects" className="hover:text-teal-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-teal-400">Contact</a></li>
          <li><a href="#services" className="hover:text-teal-400">Services</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
