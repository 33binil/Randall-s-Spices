import React from 'react';
import { IoReorderThreeOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";

const Home2 = () => {
    return (
        <div className="relative bg-[#111111] min-h-screen min-w-screen overflow-hidden">

            {/* 🔳 Background Layer */}
            <div
                className="absolute inset-0 bg-center bg-cover pointer-events-none z-0"
                style={{
                    backgroundImage: 'url("https://raw.githubusercontent.com/33binil/Randall-s-Spices/main/public/Home.jpg")',
                    opacity: 0.15,
                }}
            />

            {/* 🔝 Header Section */}
            <div className="relative z-10 flex items-center justify-between p-4 md:px-10 pt-0 md:pt-4">
                <img
                    src="https://raw.githubusercontent.com/33binil/Randall-s-Spices/main/public/logo1.png"
                    alt="Randall's Logo"
                    className="w-20 md:w-[120px] h-20 md:h-[120px] object-contain"
                />
                <button className="md:hidden">
                    <IoReorderThreeOutline className="text-2xl text-white hover:scale-110 transition-transform" />
                </button>
            </div>

            {/* 🌐 Desktop Nav */}
            <div className="relative hidden md:flex justify-center space-x-[200px] mt-[-90px] z-10">
                {["HOME", "ABOUT US", "CONTACT US"].map(label => (
                    <button key={label}>
                        <h2 className="font-inknut text-white text-[12px] md:text-[17px] font-bold hover:scale-105 transition-transform">
                            {label}
                        </h2>
                    </button>
                ))}
            </div>

            {/* 📦 Product Section */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center px-4 py-9 space-y-8 md:space-y-0 md:space-x-16">
                <img
                    src="https://raw.githubusercontent.com/33binil/Randall-s-Spices/main/public/omniblend.png"
                    alt="Omniblend"
                    className="w-[284px] h-[369px] md:w-[621px] md:h-[753px] object-contain"
                />
                <h1 className="relative font-inknut text-white top-[-20px] md:top-0 text-[16px] md:text-[24px] max-w-[900px] text-center md:text-left font-semibold leading-[30px] md:leading-[57px]">
                    OmniBlend is our all‑in‑one spice innovation—meticulously balanced ingredients, 20+ from smoked paprika to real sumac, crushed and powdered for maximum depth and texture. Whether you’re grilling, roasting, stir‑frying, or sprinkling on snacks, one shake transforms any meal into a masterpiece.
                </h1>
            </div>

            {/* 🧭 CTA Button */}
            <div className="flex justify-center mt-6 md:mt-16 z-10 mb-36">
                <button className="bg-[#582F00] text-white px-8 py-4 hover:bg-[#703900] hover:scale-105 rounded-lg shadow-lg transition-colors">
                    <h2 className="font-bold text-[12px] md:text-2xl tracking-wide">Ready to Buy →️</h2>
                </button>
            </div>

            {/* 🔻 Bottom Section */}
            <div className="w-full bg-transparent px-0 md:px-0 mt-20 md:mt-32">
                <div className="relative w-full h-[502px] z-10">

                    {/* ✅ Background Images */}
                    <img
                        src="https://raw.githubusercontent.com/33binil/Randall-s-Spices/main/public/Bottom%20page.jpg"
                        alt="Desktop Herbs and Spices Poster"
                        className="absolute left-[-5px] inset-0 w-full h-full object-cover opacity-45 hidden md:block"
                    />
                    <img
                        src="https://raw.githubusercontent.com/33binil/Randall-s-Spices/main/public/BottomPage2.jpg"
                        alt="Mobile Poster"
                        className="absolute inset-0 w-full h-full object-cover opacity-45 block md:hidden"
                    />

                    {/* Foreground Content */}
                    <div className="relative z-10 text-white pt-[-50px] md:pt-0">
                        <div className="justify-center mb-16">
                            <img
                                src="https://raw.githubusercontent.com/33binil/Randall-s-Spices/main/public/logo1.png"
                                alt="Randall's Logo"
                                className="w-20 md:w-[180px] h-20 md:h-[180px] object-contain"
                            />
                        </div>

                        {/* Bottom Nav */}
                        <div className="relative flex flex-col md:flex-row justify-center mt-[-80px] md:mt-[-140px] gap-9 md:gap-52 mb-16">
                            <div className="space-y-2 text-center md:text-left">
                                <h1 className="font-inknut text-[13px] md:text-xl font-extrabold">About Us</h1>
                                <button>
                                    <h2 className="font-inknut hover:scale-105 transition-transform text-[13px] md:text-xl font-extralight">
                                        Introducing Omniblend
                                    </h2>
                                </button>
                            </div>

                            <div className="space-y-2 text-center md:text-left">
                                <h1 className="font-inknut text-[13px] md:text-xl font-extrabold">Home</h1>
                                <button>
                                    <h2 className="font-inknut hover:scale-105 transition-transform text-[13px] md:text-xl font-extralight">
                                        Ready to Buy
                                    </h2>
                                </button>
                            </div>

                            <div className="space-y-2 text-center md:text-left">
                                <h1 className="font-inknut text-[13px] md:text-xl font-extrabold">Contact Us</h1>
                                <div className="flex justify-center md:justify-start gap-9 pt-2">
                                    <FaWhatsapp className="w-5 md:w-8 h-5 md:h-8 hover:scale-110 transition-transform" />
                                    <BiLogoGmail className="w-5 md:w-7 h-5 md:h-7 hover:scale-110 transition-transform" />
                                    <FaInstagram className="w-5 md:w-7 h-5 md:h-7 hover:scale-110 transition-transform" />
                                </div>
                            </div>
                        </div>

                        {/* 📬 Subscribe Section */}
                        <div className="relative top-[-15px] md:top-16 text-center space-y-2 md:space-y-4">
                            <h1 className="font-inknut text-[16px] md:text-[28px] font-extrabold">Subscribe to Our Emails</h1>
                            <h2 className="font-inknut text-[8px] md:text-[14px]">Be the first to know about new collections and exclusive offers.</h2>
                            <form className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="px-4 py-2 text-[12px] md:text-[16px] rounded-md w-80 outline-none bg-transparent border border-white text-white placeholder:text-white"
                                />
                                <button
                                    type="submit"
                                    className="bg-[#582F00] w-[90px] md:w-[120px] h-[40px] md:h-[50px] px-4 py-2 rounded-md hover:bg-[#703900] transition-colors flex items-center justify-center"
                                >
                                    <h1 className="text-[12px] md:text-[16px] text-white">Submit →</h1>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home2;
