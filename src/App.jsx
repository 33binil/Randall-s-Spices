import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import Home from "./components/Home";
import Home2 from "./components/Home2";

const App = () => {
    const [showHome, setShowHome] = useState(false);
    const [hideHome, setHideHome] = useState(false);
    const [showHome2, setShowHome2] = useState(false);
    const [animateLoading, setAnimateLoading] = useState(false);

    useEffect(() => {
        document.body.style.overflow = "hidden";

        const loadingSlideTimer = setTimeout(() => {
            setAnimateLoading(true);
        }, 2800);

        const revealHomeTimer = setTimeout(() => {
            setShowHome(true);
            document.body.style.overflow = "auto";
        }, 4300);

        const hideHomeTimer = setTimeout(() => {
            setHideHome(true); // Triggers fade out
        }, 6500); // After 3s

        const home2Timer = setTimeout(() => {
            setShowHome2(true);
        }, 6500); // 👈 500ms after Home fade

        return () => {
            clearTimeout(loadingSlideTimer);
            clearTimeout(revealHomeTimer);
            clearTimeout(hideHomeTimer);
            clearTimeout(home2Timer);
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <main className="relative w-screen min-h-screen overflow-hidden bg-[#111111]">

            {/* LoadingScreen slides left */}
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

            {/* Home shows briefly then fades out */}
            {showHome && (
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={hideHome ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="absolute top-0 left-0 w-screen h-screen z-40 bg-[#111111]"
                >
                    <Home />
                </motion.div>
            )}

            {/* Home2 slides up to take over */}
            {showHome2 && (
                <motion.div
                    initial={{ y: "100vh", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 1.8, // feel free to adjust
                        ease: [0.25, 0.1, 0.25, 1] // 👈 smoother, more linear-style ease
                    }}
                    className="relative top-0 left-0 "
                >
                    <Home2 />
                </motion.div>
            )}
        </main>
    );
};

export default App;
