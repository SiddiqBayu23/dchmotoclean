import React from 'react';
import './navbar.css'; // Buat file CSS terpisah untuk styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span>Kata1</span>
        <span>Kata2</span>
        <span>Kata3</span>
      </div>
      <div className="navbar-center">
        <img src="logo.png" alt="Logo" className="navbar-logo" />
      </div>
      <div className="navbar-right">
        <span>Kata4</span>
        <span>Kata5</span>
        <span>Kata6</span>
      </div>
    </nav>
  );
};

export default Navbar;
