import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Home from './components/Home';
import Home2 from './components/Home2';

const App = () => {
    const [showHome, setShowHome] = useState(false);
    const [animateLoading, setAnimateLoading] = useState(false);
    const [showHome2, setShowHome2] = useState(false);
    const [ setHideHome] = useState(false);

    useEffect(() => {
        document.body.style.overflow = "hidden";

        const loadingSlideTimer = setTimeout(() =>
            setAnimateLoading(true),
            2800);

        const revealHomeTimer = setTimeout(() => {
            setShowHome(true);
            document.body.style.overflow = "auto";
        }, 4300);

        const slideUpHomeTimer = setTimeout(() =>
            setShowHome2(true),
            7300); // 3s after Home appears

        const hideHomeTimer = setTimeout(() => {
            setHideHome(true); // Triggers fade out
        }, 6500); // After 3s

        const home2Timer = setTimeout(() => {
            setShowHome2(true);
        }, 6500); // 👈 500ms after Home fade

        return () => {
            clearTimeout(loadingSlideTimer);
            clearTimeout(revealHomeTimer);
            clearTimeout(slideUpHomeTimer);
            clearTimeout(hideHomeTimer);
            clearTimeout(home2Timer);
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <main className="relative w-screen min-h-screen overflow-hidden bg-[#111111]">
        <AnimatePresence>
            {!showHome && (
                <motion.div
                    initial={{ x: 0, opacity: 1 }}
                    animate={animateLoading ? { x: "-100vw", opacity: 0 } : { x: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="w-screen h-screen absolute top-0 left-0 z-50"
                >
                    <LoadingScreen />
                </motion.div>
            )}

            {showHome && !showHome2 && (
                <motion.div
                    key="home"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 1 }}
                    className=" w-screen h-screen bg-[#111111]"
                >
                    <Home />
                </motion.div>
            )}

            {showHome2 && (
                <motion.div
                    key="home2"
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className=" w-screen h-screen bg-[#111111] overflow-y-auto"
                >
                    <Home2 />
                </motion.div>
            )}
        </AnimatePresence>
        </main>
    );
};

export default App;
