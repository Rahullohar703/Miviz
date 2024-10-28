// src/menu links/Colab.js
import React from 'react';
import { motion } from 'framer-motion';
import './Careers.css'; // Import CSS for styling

const Careers = () => {
  return (
    <motion.div
      className="careers-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Header Section */}
      <motion.div
        className="careers-header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <h1>Collaborate With Us</h1>
        <p>Join hands with MIVIZ Architects to create innovative, sustainable designs.</p>
      </motion.div>

      {/* careersoration Cards Section */}
      <div className="careers-cards">
      <a 
          href="https://forms.gle/WBUL9YaU62Uu9Q788"
          target="_blank"
          rel="noopener noreferrer"
          className="card-link" /* Add class to customize link styles */
        >
        <motion.div
          className="careers-card"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <h3>Collaborate on Projects</h3>
          <p>Work closely with our expert team to develop modern and sustainable designs.</p>
        </motion.div></a>
        <a 
          href="https://forms.gle/u8rkQ5cbVZmEiZof9"
          target="_blank"
          rel="noopener noreferrer"
          className="card-link" /* Add class to customize link styles */
        >
        <motion.div
          className="careers-card"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <h3>Join Our Team</h3>
          <p>Looking for talented architects and designers to join our innovative team.</p>
        </motion.div></a>
      </div>

      {/* Call to Action Section */}
      <motion.div
        className="careers-cta"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <h2>Let's Build Something Great Together</h2>
        <p>
          Ready to Collaborate with us? Get in touch today and let's turn your vision into reality.
        </p>
        
      </motion.div>
    </motion.div>
  );
};

export default Careers;
