import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Update the import
import { MenuContext } from './MenuContext';
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  const { isMenuOpen, toggleMenu } = useContext(MenuContext);

  return (
    <header className="bg-gray-800 p-4 shadow-md w-full text-white">
      <nav className="container mx-auto flex items-center justify-between relative">
        <div className="flex items-center">
          <img src="imgs-page/logo-page.png" alt="Your Logo" className="max-w-3 mr-4 w-20 h-20" />
          <h2 className="text-left text-2xl">Sneaker Fantasy</h2>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            ☰
          </button>
        </div>
        {/* Menú desplegable a la derecha */}
        <ul
          className={`flex md:flex-col items-center justify-center bg-white text-black ${isMenuOpen ? 'flex' : 'hidden'
            }`}
        >
          <li><Link to="/" className="hover:text-red-500 text-lg py-2">Home</Link></li>
          <li><Link to="/about" className="hover:text-red-500 text-lg py-2">About</Link></li>
          <li><Link to="/contact" className="hover:text-red-500 text-lg py-2">Contact</Link></li>
          <li><Link to="/products" className="hover:text-red-500 text-lg py-2">Products</Link></li>
        </ul>
        {/* Fin del menú desplegable */}
        <ul className="md:flex items-center space-x-4 gap-4 hidden text-white">
          <li><Link to="/" className="hover:text-red-500 text-2xl ">Home</Link></li>
          <li><Link to="/about" className="hover:text-red-500 text-2xl ">About</Link></li>
          <li><Link to="/Contact" className="hover:text-red-500 text-2xl ">Contact</Link></li>
          <li><Link to="/products" className="hover:text-red-500 text-2xl py-2">Products</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;