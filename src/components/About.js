// src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" style={{ padding: '50px', textAlign: 'center' }}>
      <h2>About Us</h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        FF Architect is dedicated to creating exceptional spaces that reflect your vision.
      </motion.p>
    </section>
  );
};

export default About;
