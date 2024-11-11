import React from 'react';
import { motion } from 'framer-motion';
import './ResponsiveTable.css';

const servicesData = [
    'Residential Design',
    'Commercial Architecture',
    'Interior Design',
    'Landscape Architecture',
    'Renovation and Restoration',
    '3D Visuals',
    'Urban Planning and Design',
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
                {servicesData.map((service, index) => (
                    <motion.tr
                        key={index}
                        className="table-row"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                    >
                        <td data-label={service}>{service}</td>
                    </motion.tr>
                ))}
            </tbody>
        </table>
    </motion.div>
);

export default ResponsiveTable;
