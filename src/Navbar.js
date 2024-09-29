// Navbar.js
import React from 'react';
import './Navbar.css'; // Create a separate CSS file for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2 className="navbar-title">Quiz App</h2>
            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
