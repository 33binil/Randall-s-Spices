import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Home = () => {
    const { scrollYProgress } = useScroll();
    const imageY = useTransform(scrollYProgress, [0, 600], [0,150]);

    return (
        <div className="relative min-h-screen min-w-screen bg-[#111111] overflow-hidden">

            {/* Full background image */}
            <div
                className="absolute inset-0 bg-center bg-cover pointer-events-none z-0"
                style={{
                    backgroundImage: 'url("https://raw.githubusercontent.com/33binil/Randall-s-Spices/main/public/Home.jpg")',
                    opacity: 0.15,
                }}
            />

            {/* Foreground Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">

                {/* Logo */}
                <div className="absolute top-0 md:top-6 left-4 md:left-12">
                    <img
                        src="https://raw.githubusercontent.com/33binil/Randall-s-Spices/main/public/logo1.png"
                        alt="Omniblend Logo"
                        className="w-20 md:w-[120px] h-20 md:h-[120px] object-contain"
                    />
                </div>

                {/* Marquee Text */}
                <div className="absolute top-[440px] md:top-[500px] w-full">
                    <div className="marquee whitespace-nowrap">
                        <h2 className="font-rubikDoodle text-white text-[70px] md:text-[124px] inline-block">
                            OMNIBLEND&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OMNIBLEND&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OMNIBLEND
                        </h2>
                        <h2 className="font-rubikDoodle text-white text-[70px] md:text-[124px] inline-block">
                            OMNIBLEND&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OMNIBLEND&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OMNIBLEND
                        </h2>
                    </div>
                </div>

                {/* Scroll-Reactive Image */}
                <div className="relative w-full flex justify-center py-12">
                    <motion.img
                        src="https://raw.githubusercontent.com/33binil/Randall-s-Spices/main/public/omniblend.png"
                        alt="Omniblend Center"
                        style={{ y: imageY }}
                        className="w-[321px] h-[403px] md:w-[621px] md:h-[753px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
