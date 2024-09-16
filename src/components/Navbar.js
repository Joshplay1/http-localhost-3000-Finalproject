import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/admin-panel">Admin Panel</Link></li>
                <li><Link to="/sign-up">Sign Up</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
