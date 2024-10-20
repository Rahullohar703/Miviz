// src/components/Hero.js
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
const Hero = () => {
  const { scrollY } = useScroll();

  // Transform scroll position to scale value for the image
  const scale = useTransform(scrollY, [0, 600], [1, 0]); // Scale from 1 to 0
  const textY = useTransform(scrollY, [0, 600], [0, 300]); // Move down from 0 to 300px

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        style={{
          height: '100vh',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Hero Image */}
        <motion.img
          src="https://www.dropbox.com/scl/fi/wa8p10uoyswwc4m5ilcr6/MIVIZ.svg?rlkey=y0a274rxzhz3hpop8zoht3m6x&st=k82ugibu&raw=1" // Replace with your image URL
          alt="Hero"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            scale, // Apply scaling based on scroll
            zIndex: 1, // Keep image on top
          }}
        />

        {/* Hero Text "MIVIZ" */}
      </section>

      {/* Background Section with Heading and Paragraph */}
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'white',
          paddingTop: '100px', // Create space below the Hero section
        }}
      >
        {/* Section Heading */}
        <h3 style={{  fontFamily: 'Martian mono', fontSize: '2rem', marginBottom: '20px' }}>We are MIVIZ</h3>

        {/* Paragraph Content */}
        <p
          style={{
            maxWidth: '600px',
            justifyContent: 'center' ,
            textAlign: 'justify',
            fontSize: '1.0rem',
            lineHeight: '1.6',
            padding: '20px',
            fontFamily: 'Martian mono'
          }}
        >
          Welcome to MIVIZ Architects, a prestigious architectural firm based in Auckland. We
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
