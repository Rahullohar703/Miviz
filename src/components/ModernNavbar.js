// src/components/ModernNavbar.js

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation
import './ModernNavbar.css';

const ModernNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Effect to close the menu when the route changes
    useEffect(() => {
        setIsOpen(false); // Close menu on route change
    }, [location]);

    return (
        <motion.nav
            className="navbar"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 10 }}
        >
            {/* Logo Section */}
            <div className="logo">
                <Link to="/">
                    <img src="/logo.png" alt="Logo" className="logo-img" />
                </Link>
            </div>

            {/* Hamburger Menu Icon */}
            <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                <span className={`bar ${isOpen ? 'open' : ''}`}></span>
            </div>

            {/* Navigation Links */}
            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                <motion.li whileHover={{ scale: 1.1 }}>
                    <Link to="/">Home</Link>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }}>
                    <Link to="/careers">Careers</Link>
                </motion.li>
                
                <motion.li whileHover={{ scale: 1.1 }}>
                    <Link to="/contact">Contact</Link>
                </motion.li>
            </ul>
        </motion.nav>
    );
};

export default ModernNavbar;
