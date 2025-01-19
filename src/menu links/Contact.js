// src/menu links/Contact.js
import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css'; // Import optional CSS for styling

const Contact = () => {
  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Contact Us
      </motion.h1>

      {/* Embed the Calendly booking page using an iframe */}
      <div className="form-wrapper">
        <iframe
          src="https://calendly.com/mivizarchitects/30min" // Replace with your actual Calendly link
          width="100%"
          height="800"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Calendly Booking"
        >
          Loading…
        </iframe>
      </div>
    </motion.div>
  );
};

export default Contact;
