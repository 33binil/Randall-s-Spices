import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
    const [countdown, setCountdown] = useState(0); // Starting number

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
            {/* Desktop image */}
            <img
                src="https://raw.githubusercontent.com/33binil/Randall-s-Spices/main/public/Loading.jpg"
                alt="Windows Loading image"
                className="absolute top-0 md:left-0 object-cover h-full w-[458px] hidden md:block"
            />

            {/* Mobile image */}
            <img
                src="https://raw.githubusercontent.com/33binil/Randall-s-Spices/main/public/Loading2.jpg"
                alt="Mobile Loading image"
                className="absolute top-[-10px] object-cover h-[264px] w-[440px] block md:hidden"
            />

            {/* Logo */}
            <img
                src="https://raw.githubusercontent.com/33binil/Randall-s-Spices/main/public/logoo.png"
                alt="Randall's Harvest Logo"
                className="w-[225px] md:w-[479px] h-[114px] md:h-[242px] relative z-10"
            />

            {/* Countdown number */}
            <div className="absolute bottom-6 top-[780px] right-12 text-5xl md:text-8xl lg:text-8xl font-bold text-gray-500 px-4 py-2 rounded-lg">
                {String(countdown).padStart(3, '0')}
            </div>
        </div>
    );
};

export default LoadingScreen;
