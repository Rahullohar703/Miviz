// src/components/about.js

import React from 'react';
import { motion } from 'framer-motion';
import './about.css';

const about = () => {
    const persons = [
        {
            name: 'Ar. Manohar Lohar',
            photo: 'manoharprofile.png', // Replace with actual image path
            info: 'John is a software engineer with over 10 years of experience in full-stack development. He enjoys creating dynamic and beautiful web applications.'
        },
        {
            name: 'Ar. Netra Sali',
            photo: 'netraprofile.png', // Replace with actual image path
            info: 'Jane is a UX designer focused on creating user-friendly interfaces. She has a passion for making the web more accessible for everyone.'
        }
    ];

    const cardAnimation = {
        initial: { opacity: 0, y: 50, scale: 0.9 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 50, scale: 0.9 },
        transition: { duration: 0.5 }
    };

    return (
        <div className="about-container">
            {persons.map((person, index) => (
                <motion.div
                    key={index}
                    className="about-card"
                    variants={cardAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ staggerChildren: 0.1 }}
                >
                    <motion.img 
                        src={person.photo} 
                        alt={person.name} 
                        className="person-photo"
                        initial={{ scale: 0.8 }} 
                        animate={{ scale: 1 }} 
                        exit={{ scale: 0.8 }} 
                        transition={{ duration: 0.3 }} 
                    />
                    <motion.div 
                        className="person-info"
                        initial={{ x: 20 }} 
                        animate={{ x: 0 }} 
                        exit={{ x: 20 }} 
                        transition={{ duration: 0.3 }} 
                    >
                        <h2>{person.name}</h2>
                        <p>{person.info}</p>
                    </motion.div>
                </motion.div>
            ))}
        </div>
    );
};

export default about;
