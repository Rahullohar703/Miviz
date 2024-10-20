// Ticker.js
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Ticker.css'; // Ensure this path is correct

const Ticker = () => {
    const tickerRef = useRef(null);
    const isInView = useInView(tickerRef, { once: false }); // Trigger when in view

    return (
        <div className="ticker-container" ref={tickerRef}>
            <motion.div
                className="ticker"
                initial={{ x: '0%' }} // Start on-screen
                animate={isInView ? { x: '-100%' } : { x: '100%' }} // Trigger when in view
                transition={{
                 duration: 20, // Adjust speed if needed
                    ease: 'linear',
                    repeat: Infinity, // Keep repeating smoothly
                }}
            >
                <span>ARCHITECT DESIGN ARCHITECT</span>
            </motion.div>
        </div>
    );
};

export default Ticker;
