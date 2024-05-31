
import React from 'react';
import '../css/Navbar.css'; // Import CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Vriksh</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
      <div className="user-section">
        <a href="#login" className="login-link">Login</a>
        <div className="avatar"></div>
      </div>
    </nav>
  );
}

export default Navbar;
