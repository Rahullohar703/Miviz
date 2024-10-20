// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ModernNavbar from './components/ModernNavbar';
import Hero from './components/Hero';
import Colab from './menu links/Colab';
import Interior from './menu links/Interior';
import Contact from './menu links/Contact';
import Projects from './components/Projects';
import Ticker from './components/Ticker';
import ScrollingImage from './components/ScrollingImage';
import ResponsiveTable from './components/ResponsiveTable';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <ModernNavbar /> {/* Navbar is displayed on all pages */}
            
            <Routes>
                {/* Home Route */}
                <Route 
                    path="/" 
                    element={
                        <>
                            <Hero />
                            <Projects />
                            <Ticker />
                            <ScrollingImage />
                            <ResponsiveTable />
                        </>
                    } 
                />

                {/* Other Routes */}
                <Route path="/colab" element={<Colab />} />
                <Route path="/interior" element={<Interior />} />
                <Route path="/contact" element={<Contact />} />
                
                {/* Optional: Wildcard Route for 404 */}
                <Route path="*" element={<h1>404 - Page Not Found</h1>} />
            </Routes>

            <Footer /> {/* Footer is displayed on all pages */}
        </Router>
    );
}

export default App;
