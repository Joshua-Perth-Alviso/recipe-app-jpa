import React from 'react';
import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white text-pink-400">
      <div className="text-2xl font-bold flex items-center space-x-2">
        <img src={Logo} alt="Girl in a jacket" width="50" height="50"/>
        <p>PantryPal</p>
      </div>
      
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:text-pink-600 transition">Home</a>
          </li>
          <li>
            <a href="/recipes" className="hover:text-pink-600 transition">Recipes</a>
          </li>
          <li>
            <a href="/about" className="hover:text-pink-600 transition">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
