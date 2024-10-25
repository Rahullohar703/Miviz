// src/components/Hero.js

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css'; // Import the CSS

const Hero = () => {
    const { scrollY } = useScroll();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 480); // Adjust breakpoint as needed
        };

        handleResize(); // Set initial state
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const scale = useTransform(scrollY, [0, 600], [1, 0]); // Scale the image from 1 to 0

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
                    src={isMobile ? `${process.env.PUBLIC_URL}/heroimg-mobile.png` : `${process.env.PUBLIC_URL}/heroimg.png`} // Use process.env.PUBLIC_URL to point to images in public
                    alt="Hero"
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover', // Maintain aspect ratio
                        objectPosition: 'center', // Center the image
                        scale, // Apply scaling effect
                        zIndex: 1, // Keep image behind the text
                    }}
                />
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
                    paddingTop: '100px',
                }}
            >
                <h3 style={{ fontFamily: 'Martian mono', fontSize: '2rem', marginBottom: '20px' }}>
                    We are MIVIZ
                </h3>
                <p
                    style={{
                        maxWidth: '600px',
                        justifyContent: 'center',
                        textAlign: 'justify',
                        fontSize: '1.0rem',
                        lineHeight: '1.6',
                        padding: '20px',
                        fontFamily: 'Martian mono',
                    }}
                >
                    Welcome to MIVIZ Architects, a prestigious architectural firm based in Pune, India. We specialize in crafting highly personalized homes where minimalism meets functionality.
                    With a keen eye for detail and a commitment to innovative design, we create residences that reflect the unique visions and lifestyles of our clients. At MIVIZ, we believe that
                    architecture should not only be aesthetically pleasing but also enhance the way people live. Whether it’s a sleek urban retreat or a serene countryside residence, our team of
                    talented professionals is dedicated to delivering exceptional architectural solutions tailored to your needs.
                </p>
            </div>
        </>
    );
};

export default Hero;
