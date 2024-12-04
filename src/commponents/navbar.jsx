import React from "react";
import { Link } from "react-router-dom"; // Import Link dari react-router-dom
import "./navbar.css"; // Pastikan file CSS ini tersedia

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/about-us"><span>About Us</span></Link>
        <Link to="/products"><span>Products</span></Link>
        <Link to="/workshop"><span>Workshop</span></Link>
      </div>
      <div className="navbar-center">
        {/* Membungkus logo dengan Link ke Home */}
        <Link to="/">
          <img src="logo.png" alt="Logo" className="navbar-logo" />
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/harga"><span>Harga</span></Link>
        <Link to="/booking"><span>Booking</span></Link>
        <Link to="/news"><span>News</span></Link>
      </div>
    </nav>
  );
};

export default Navbar;
