// src/menu links/Colab.js
import React from 'react';
import { motion } from 'framer-motion';
import './Collab.css'; // Import CSS for styling

const Collab = () => {
  return (
    <motion.div
      className="collab-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Header Section */}
      <motion.div
        className="collab-header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <h1>Collaborate With Us</h1>
        <p>Join hands with MIVIZ Architects to create innovative, sustainable designs.</p>
      </motion.div>

      {/* Collaboration Cards Section */}
      <div className="collab-cards">
        <motion.div
          className="collab-card"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <h3>Collaborate on Projects</h3>
          <p>Work closely with our expert team to develop modern and sustainable designs.</p>
        </motion.div>

        <motion.div
          className="collab-card"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <h3>Join Our Team</h3>
          <p>Looking for talented architects and designers to join our innovative team.</p>
        </motion.div>
      </div>

      {/* Call to Action Section */}
      <motion.div
        className="collab-cta"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <h2>Let's Build Something Great Together</h2>
        <p>
          Ready to collaborate with us? Get in touch today and let's turn your vision into reality.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          Contact Us
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Collab;
