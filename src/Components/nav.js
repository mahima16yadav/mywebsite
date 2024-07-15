// Navbar.js
import React from 'react';
import './nav.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img src="./logo.png" alt="Company Logo" />
      </div>
      <nav>
        <ul className="navbar-links">
          <li><strong><a href="#home">Home</a></strong></li>
          <li><strong><a href="#about">About Us</a></strong></li>
          <li><strong><a href="#pricing">Pricing</a></strong></li>
          <li><strong><a href="#contact">Contact Us</a></strong></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
