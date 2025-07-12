import React, { useState, useEffect } from "react";

const LoadingScreen = () => {
    const [countdown, setCountdown] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const totalTime = 6000; // {6000} seconds in milliseconds
        const steps = 350;
        const intervalTime = totalTime / steps;

        const timer = setInterval(() => {
            setCountdown((prev) => (prev < 100 ? prev + 1 : 100));
        }, intervalTime);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex items-center justify-center h-screen bg-[#f6f6f4] relative">
            {/* Loading Image - Positioned at the Top */}
            <img src="https://raw.githubusercontent.com/33binil/Randall-s-Spices/main/public/Loading.jpg"
                 alt="Loading image"
                 className="absolute top-0 md:left-0 right-[251px] object-cover h-full w-full sm:w-auto sm:h-[40vh] md:w-1/4 md:h-full"
                 style={{ transform: window.innerWidth < 768 ? "rotate(90deg) translateX(-75%)" : "translateX(-10%)", }} />

            {/* Logo */}
            <img src="https://raw.githubusercontent.com/33binil/Randall-s-Spices/main/public/logoo.png"
            alt="Randall's Harvest Logo" className="w-64 h-44 relative z-10 " />

            {/* Countdown Timer */}
            <div className="absolute bottom-6 right-6 text-5xl md:text-8xl lg:text-8xl font-bold text-gray-500 px-4 py-2 rounded-lg">
                {String(countdown).padStart(3, "0")}
            </div>
        </div>
    );
};

export default LoadingScreen;
