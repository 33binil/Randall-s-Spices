import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Home = () => {
    const { scrollYProgress } = useScroll();
    const imageY = useTransform(scrollYProgress, [0, 600], [0,150]);

    return (
        <div className="relative min-h-screen min-w-screen bg-[#111111] overflow-hidden">

            {/* Full background image */}
            <div
                className="absolute inset-0 bg-center bg-cover pointer-events-none"
                style={{
                    backgroundImage: "url('/Home.jpg')",
                    opacity: 0.15,
                    zIndex: 0,
                }}
            />

            {/* Foreground Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">

                {/* Logo */}
                <div className="absolute top-0 md:top-6 left-4 md:left-12">
                    <img
                        src="/public/logo1.png"
                        alt="Omniblend Logo"
                        className="w-20 md:w-[120px] h-20 md:h-[120px] object-contain"
                    />
                </div>

                {/* Navigation */}
                <div className="absolute top-12 left-1/2 transform -translate-x-1/2">
                    <h1 className="font-inknut text-white space-x-64 text-[12px] md:text-[17px] font-bold">
                        <span>HOME</span>
                        <span>ABOUT US</span>
                        <span>CONTACT US</span>
                    </h1>
                </div>

                {/* Marquee Text */}
                <div className="absolute top-[575px] w-full">
                    <div className="marquee whitespace-nowrap">
                        <h2 className="font-rubikDoodle text-white text-3xl sm:text-[124px] inline-block">
                            OMNIBLEND&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OMNIBLEND&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OMNIBLEND
                        </h2>
                        <h2 className="font-rubikDoodle text-white text-3xl sm:text-[124px] inline-block">
                            OMNIBLEND&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OMNIBLEND&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OMNIBLEND
                        </h2>
                    </div>
                </div>

                {/* Scroll-Reactive Image */}
                <div className="relative w-full top-[110px] flex justify-center py-12">
                    <motion.img
                        src="/omniblend.png"
                        alt="Omniblend Center"
                        style={{ y: imageY }}
                        className="w-40 h-40 md:w-[621px] md:h-[753px]"
                    />
                </div>


                {/* Centered Description */}
                <div className="relative w-full left-96 min-h-screen flex items-center justify-center px-4 md:px-14">
                    <h1
                        className="font-inknut text-white text-xl md:text-[24px] max-w-[900px] text-center leading-relaxed font-semibold"
                        style={{ lineHeight: "57px" }}
                    >
                        OmniBlend is our all‑in‑one spice innovation—meticulously balanced ingredients, 20+ from smoked paprika to real sumac, crushed and powdered for maximum depth and texture. Whether you’re grilling, roasting, stir‑frying, or sprinkling on snacks, one shake transforms any meal into a masterpiece.
                    </h1>
                </div>

                {/* CTA Box */}
                <div className="w-full flex justify-center items-center mb-56">
                    <div className="bg-[#582F00] text-white px-8 py-4 rounded-lg shadow-lg text-center">
                        <h2 className="font-bold text-xl md:text-2xl tracking-wide">Ready to Buy →️</h2>
                    </div>
                </div>

                {/* Bottom Image */}
                <div className="relative right-5 w-[1940px] h-[522px] px-4 md:px-12">
                    <img
                        src="/public/Bottom page.jpg"
                        alt="Herbs and Spices Poster"
                        className="absolute bottom-0 left-0 w-full h-full object-cover z-0 opacity-45"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
