// src/App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './components/Home';
import AboutUs from './components/Aboutus';
import LoadingScreen from './components/LoadingScreen';
import Buynow from "./components/Buynow.jsx";

function AppContent() {
    const [showLoading, setShowLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const timer = setTimeout(() => setShowLoading(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    const transition = { duration: 0.8, ease: 'easeInOut' };

    return (
        <div className="min-h-screen bg-[#111111] overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={showLoading ? 'loading' : location.pathname}
                    initial={{ x: showLoading ? 0 : '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: showLoading ? '-100%' : 0 }}
                    transition={transition}
                    className="min-h-screen"
                >
                    {showLoading ? (
                        <LoadingScreen />
                    ) : (
                        <Routes location={location}>
                            <Route path="/" element={<Navigate to="/home" />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/aboutus" element={<AboutUs />} />
                            <Route path="/buy" element={<Buynow />} />
                        </Routes>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;
