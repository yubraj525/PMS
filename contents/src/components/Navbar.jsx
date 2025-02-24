import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "./Navbar.css";
import "boxicons/css/boxicons.min.css"; // Import Boxicons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">MyWebsite</div>

      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/form">Form</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li className="search-box">
          <input type="text" placeholder="Search..." />
          <i className="bx bx-search"></i>
        </li>
      </ul>

      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        <i className={isOpen ? "bx bx-x" : "bx bx-menu"}></i>
      </div>
    </nav>
  );
};

export default Navbar;
