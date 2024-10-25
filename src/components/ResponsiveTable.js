// ResponsiveTable.js
import React from 'react';
import { motion } from 'framer-motion';
import './ResponsiveTable.css';

const data = [
    { title: 'Residential Design' },
    { title: 'Commercial Architecture' },
    { title: 'Interior Design' },
    { title: 'Landscape Architecture' },
    { title: 'Renovation and Restoration' },
    { title: '3D Visuals' },
    { title: 'Urban Planning and Design' },
];

const ResponsiveTable = () => (
    <motion.div
        className="table-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
        <table className="responsive-table">
            <thead>
                <tr>
                    <th>Our Services</th>
                    
                </tr>
            </thead>
            <tbody>
                {data.map((book, index) => (
                    <tr key={index}>
                        <td>{book.title}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </motion.div>
);

export default ResponsiveTable;
