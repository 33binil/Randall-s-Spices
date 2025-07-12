import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { IoReorderThreeOutline } from "react-icons/io5";

const Home = () => {
    const { scrollYProgress } = useScroll();
    const imageY = useTransform(scrollYProgress, [0, 600], [0, 150]);

    return (
        <div className="relative min-h-screen min-w-screen bg-[#111111] overflow-hidden">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-center bg-cover pointer-events-none z-0"
                style={{
                    backgroundImage:
                        'url("https://raw.githubusercontent.com/33binil/Randall-s-Spices/main/public/Home.jpg")',
                    opacity: 0.15,
                }}
            />

            {/* Foreground Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">

                {/* Logo */}
                <div className="absolute top-0 md:top-0 left-4 md:left-10">
                    <img
                        src="https://raw.githubusercontent.com/33binil/Randall-s-Spices/main/public/logo1.png"
                        alt="Randall's Logo"
                        className="w-20 md:w-[120px] h-20 md:h-[120px] object-contain"
                    />
                </div>

                {/* Navigation Text */}
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
                    <h1 className="font-inknut text-white space-x-64 text-[12px] md:text-[17px] font-bold">
                        <span>HOME</span>
                        <span>ABOUT US</span>
                        <span>CONTACT US</span>
                    </h1>
                </div>

                {/* Top-right Hamburger Icon */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute top-4 right-4 z-50 md:hidden"
                >
                    <IoReorderThreeOutline className="text-2xl text-white cursor-pointer hover:scale-110 transition-transform" />
                </motion.div>

                {/* Center Content with Description and Product Image */}
                <div className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-4">
                    <motion.div style={{ y: imageY }}>
                        <img
                            src="https://raw.githubusercontent.com/33binil/Randall-s-Spices/main/public/omniblend.png"
                            alt="Omniblend"
                            className="w-40 h-40 md:w-[621px] md:h-[753px]"
                        />
                    </motion.div>

                    <h1
                        className="font-inknut text-white text-xl md:text-[24px] max-w-[900px] text-center md:text-left leading-relaxed font-semibold mt-8 md:mt-0"
                        style={{ lineHeight: '57px' }}
                    >
                        OmniBlend is our all‑in‑one spice innovation—meticulously balanced ingredients, 20+ from smoked paprika to real sumac, crushed and powdered for maximum depth and texture. Whether you’re grilling, roasting, stir‑frying, or sprinkling on snacks, one shake transforms any meal into a masterpiece.
                    </h1>
                </div>

                {/* Call to Action Box */}
                <div className="w-full flex justify-center items-center mb-56">
                    <div className="bg-[#582F00] text-white px-8 py-4 rounded-lg shadow-lg text-center">
                        <h2 className="font-bold text-xl md:text-2xl tracking-wide">Ready to Buy →️</h2>
                    </div>
                </div>

                {/* Bottom Section Image */}
                <div className="relative w-full h-[522px] px-4 md:px-12">
                    <img
                        src="https://raw.githubusercontent.com/33binil/Randall-s-Spices/main/public/Bottom page.jpg"
                        alt="Herbs and Spices Poster"
                        className="absolute bottom-0 left-0 w-full h-full object-cover z-0 opacity-45"
                    />
                    <div className="relative z-10 flex justify-center items-center h-full">
                        <h1 className="font-inknut text-white text-center text-lg font-extrabold">
                            About Us
                        </h1>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;
