// src/components/Hero.js
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css'; // Optional CSS styling for cleaner code

const Hero = () => {
  const { scrollY } = useScroll();

  // Scroll-based transformations
  const scale = useTransform(scrollY, [0, 600], [1, 0]); // Scale the image from 1 to 0
  const textY = useTransform(scrollY, [0, 600], [0, 200]); // Move text down with scroll

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="hero-container">
        {/* Hero Image */}
        <motion.img
          src="/heroimg.png" // Image from public folder
          alt="Hero"
          className="hero-image"
          style={{ scale }}
        />

        {/* Hero Text */}
        <motion.h1
          className="hero-title"
          style={{ y: textY }} // Apply scroll-based movement
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          MIVIZ
        </motion.h1>
      </section>

      {/* Background Section with Content */}
      <div className="content-section">
        <h3 className="content-heading">We are MIVIZ</h3>
        <p className="content-paragraph">
          Welcome to MIVIZ Architects, a prestigious architectural firm based in Pune, India. We
          specialize in crafting highly personalized homes where minimalism meets functionality.
          With a keen eye for detail and a commitment to innovative design, we create residences
          that reflect the unique visions and lifestyles of our clients. At MIVIZ, we believe that
          architecture should not only be aesthetically pleasing but also enhance the way people
          live. Whether it’s a sleek urban retreat or a serene countryside residence, our team of
          talented professionals is dedicated to delivering exceptional architectural solutions
          tailored to your needs.
        </p>
      </div>
    </>
  );
};

export default Hero;
