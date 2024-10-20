// ScrollingImage.js
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './ScrollingImage.css'; // Import the CSS file

const ScrollingImage = () => {
    const imgRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (!imgRef.current) return;
        const rect = imgRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        const isInView = rect.top < windowHeight * 0.9 && rect.bottom > 0;
        setIsVisible(isInView);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check on mount

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.div
            ref={imgRef}
            className={`scrolling-image ${isVisible ? 'in-view' : ''}`}
            animate={{ scale: isVisible ? 1.15 : 0.8 }}
            transition={{ duration: 0.5, ease: [0.2, 0.7, 0.3, 1] }}
        >
            <img
                src="https://www.dropbox.com/scl/fi/wa8p10uoyswwc4m5ilcr6/MIVIZ.svg?rlkey=y0a274rxzhz3hpop8zoht3m6x&st=k82ugibu&raw=1" // Replace with your image
                alt="Scrolling"
                className="image"
            />
        </motion.div>
    );
};

export default ScrollingImage;
