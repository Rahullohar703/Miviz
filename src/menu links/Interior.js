// src/menu links/Interior.js
import React from 'react';
import { motion } from 'framer-motion';
import './Interior.css'; // Import CSS for styling

const Interior = () => {
  return (
    <motion.div
      className="interior-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Header Section */}
      <motion.div
        className="interior-header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <h1>Interior Design</h1>
        <p>Transform your spaces with modern and functional interior design.</p>
      </motion.div>

      {/* Service Cards Section */}
      <div className="interior-cards">
        <motion.div
          className="interior-card"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <h3>Living Room</h3>
          <p>Design a cozy and elegant space to unwind and entertain guests.</p>
        </motion.div>

        <motion.div
          className="interior-card"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <h3>Kitchen</h3>
          <p>Functional and stylish kitchen layouts for your modern lifestyle.</p>
        </motion.div>

        <motion.div
          className="interior-card"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <h3>Bedroom</h3>
          <p>Create a serene retreat with thoughtful interior design.</p>
        </motion.div>
      </div>

      {/* Call to Action Section */}
      <motion.div
        className="interior-cta"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <h2>Let’s Bring Your Vision to Life</h2>
        <p>
          Collaborate with us to design interiors that reflect your style and personality.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          Get in Touch
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Interior;
