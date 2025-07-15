import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { IoReorderThreeOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";

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
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 hidden md:hidden">
                    <h1 className="font-inknut text-white space-x-64 text-[12px] md:text-[17px] font-bold">
                        <span>HOME</span>
                        <span>ABOUT US</span>
                        <span>CONTACT US</span>
                    </h1>
                </div>

                {/* Top-right Hamburger Icon */}
                <button className="absolute top-6 right-4 z-50 md:hidden">
                    <IoReorderThreeOutline className="text-2xl text-white cursor-pointer hover:scale-110 transition-transform" />
                </button>

                {/* Center Content with Description and Product Image */}
                <div className="relative top-[-60px] md:top-0 min-h-screen flex flex-col md:flex-row items-center justify-center px-4">
                    <motion.div style={{ y: imageY }}>
                        <img
                            src="https://raw.githubusercontent.com/33binil/Randall-s-Spices/main/public/omniblend.png"
                            alt="Omniblend"
                            className="w-[284px] h-[369px] md:w-[621px] md:h-[753px]"
                        />
                    </motion.div>

                    <h1
                        className="font-inknut text-white text-[16px] md:text-[24px] max-w-[900px] text-center md:text-left font-semibold leading-[30px] md:leading-[57px] mt-8 md:mt-0"
                    >
                        OmniBlend is our all‑in‑one spice innovation—meticulously balanced ingredients, 20+ from smoked paprika to real sumac, crushed and powdered for maximum depth and texture. Whether you’re grilling, roasting, stir‑frying, or sprinkling on snacks, one shake transforms any meal into a masterpiece.
                    </h1>
                </div>

                {/* Call to Action Box */}
                <div>
                    <div className="relative w-[171px] h-[5px] md:w-full md:h-full top-[-120px] md:top-[-120px] justify-center items-center mb-24 md:mb-56">



                    </div>
                </div>
                <div>
                    <div className="relative w-[171px] h-[5px] md:w-full md:h-full top-[-250px] md:top-[-400px] justify-center items-center mb-12 md:mb-56">
                        <button className="bg-[#582F00] text-white px-8 py-4 hover:bg-[#703900] hover:scale-105 rounded-lg shadow-lg transition-colors flex items-center">
                           <h2 className="font-bold text-[12px] md:text-2xl tracking-wide">Ready to Buy →️</h2>
                        </button>
                    </div>
                </div>


                {/* Bottom Section Image */}
                <div className="relative top-0 md:top-10 w-full h-[522px] px-4 md:px-12 ">
                    {/* Desktop-only bottom image */}
                    <img
                        src="https://raw.githubusercontent.com/33binil/Randall-s-Spices/main/public/Bottom page.jpg"
                        alt="Desktop Herbs and Spices Poster"
                        className="absolute bottom-0 left-[-2px] w-full h-full object-cover z-0 opacity-45 hidden md:block"
                    />

                    {/* Mobile-only bottom image */}
                    <img
                        src="https://raw.githubusercontent.com/33binil/Randall-s-Spices/main/public/BottomPage2.jpg"
                        alt="Mobile Herbs and Spices Poster"
                        className="absolute bottom-0 left-[-2px] w-full h-full object-cover z-0 opacity-45 block md:hidden"
                    />

                    {/* Bottom Section */}
                    <div className="relative text-white top-[-110px] md:top-[-130px]">
                        {/* Bottom Section Logo */}
                        <div>
                            <img
                                src="https://raw.githubusercontent.com/33binil/Randall-s-Spices/main/public/logo1.png"
                                alt="Randall's Logo"
                                className="relative left-72 md:left-36 w-20 md:w-[180px] h-20 md:h-[180px] top-[250px] md:top-72 object-contain"
                            />
                        </div>

                        {/* Bottom About us/ Contactus/ Home */}
                        <div className="relative flex flex-col top-[70px] md:top-0 md:flex-row gap-7 md:gap-x-52">

                            <div className="text-left pl-4 md:pl-[700px] space-y-2">
                                <h1 className="font-inknut text-[13px] md:text-xl font-extrabold">About Us</h1>
                                <button>
                                    <h2 className="font-inknut hover:scale-105 transition-transform text-[13px] md:text-xl font-extralight">Introducing Omniblend</h2>
                                </button>
                            </div>

                            <div className="text-left pl-4 md:pl-0 space-y-2">
                                <h1 className="font-inknut text-[13px] md:text-xl font-extrabold">Home</h1>
                                <button>
                                    <h2 className="font-inknut text-[13px] hover:scale-105 transition-transform md:text-xl font-extralight">Ready to Buy</h2>
                                </button>
                            </div>

                            <div className="text-left pl-4 md:pl-0 space-y-2">
                                <h1 className="font-inknut text-[13px] md:text-xl font-extrabold">Contact Us</h1>

                                <div className="flex flex-col items-start space-y-2 md:space-y-6 relative left-5">
                                    <button>
                                        <FaWhatsapp className="w-5 md:w-8 h-5 md:h-8 hover:scale-110 transition-transform" />
                                    </button>
                                    <button>
                                        <BiLogoGmail className="w-5 md:w-7 h-5 md:h-7 hover:scale-110 transition-transform" />
                                    </button>
                                    <button>
                                        <FaInstagram className="w-5 md:w-7 h-5 md:h-7 hover:scale-110 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Subscribe to Email */}
                        <div className="relative flex flex-col top-[60px] md:top-[20px] items-center justify-center">
                            <div>
                                <h1 className="relative top-20 md:top-16 text-[16px] md:text-[28px] font-inknut font-extrabold">Subscribe to Our Emails</h1>
                            </div>
                            <div>
                                <h1 className="relative top-20 md:top-16 text-[8px] md:text-[14px] font-inknut">Be the first to know about new collections and exclusive offers.</h1>
                            </div>
                            <form className="mt-24 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className=" px-4 md:px-4 py-2 md:py-2 text-[12px] md:text-[16px] rounded-md w-80 outline-none bg-transparent border border-white text-white placeholder:text-white"
                                />
                                <button
                                    type="submit"
                                    className="relative left-[120px] md:left-0 bg-[#582F00] w-[90px] md:w-[120px] h-[40px] md:h-[50px]  px-4 py-2 rounded-md hover:bg-[#703900] transition-colors flex items-center"
                                >
                                    <h1 className="relative text-[12px] md:text-[16px] text-white">Submit →</h1>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
