// ModernNavbar.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ModernNavbar.css';
import { Link } from 'react-router-dom'; // Import Link


const ModernNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            className="navbar"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 10 }}
        >
            <div className="logo">MyLogo</div>

            <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                <span className={`bar ${isOpen ? 'open' : ''}`}></span>
            </div>

            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
            <motion.li whileHover={{ scale: 1.1 }}>
                <Link to="/">Home</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
                <Link to="/colab">Colab</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
                <Link to="/interior">Interior</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
                <Link to="/contact">Contact</Link>
            </motion.li>
        </ul>
        </motion.nav>
    );
};

export default ModernNavbar;
