import React from 'react'
import { IoReorderThreeOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";

const Aboutus = () => {


    return (
        <div className="relative min-h-screen min-w-screen bg-[#111111] overflow-hidden">
            <div className="relative min-h-screen bg-[#111111] overflow-hidden">

                {/* Background Image (always behind) */}
                <img
                    src="/public/About.jpg"
                    alt="About Me"
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-30 z-0"
                />

                {/* Foreground Content */}
                <div className="relative z-10">

                    {/* Top-left Small Logo */}
                    <div className="absolute top-0 left-4 md:left-10">
                        <img
                            src="https://raw.githubusercontent.com/33binil/Randall-s-Spices/main/public/logo1.png"
                            alt="Randall's Logo"
                            className="w-20 md:w-[120px] h-20 md:h-[120px] object-contain"
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="absolute top-12 left-1/2 transform -translate-x-1/2 hidden md:block">
                        <h1 className="font-inknut text-white space-x-64 text-[12px] md:text-[17px] font-bold">
                            <span>HOME</span>
                            <span>ABOUT US</span>
                            <span>CONTACT US</span>
                        </h1>
                    </div>

                    {/* Mobile Hamburger */}
                    <button className="absolute top-6 right-4 z-50 md:hidden">
                        <IoReorderThreeOutline className="text-2xl text-white cursor-pointer hover:scale-110 transition-transform" />
                    </button>

                    {/* Center Logo Image */}
                    <img
                        src="/public/logo1.png"
                        alt="Logo"
                        className="relative top-[330px] md:top-[393px] left-8 md:left-[640px] w-[351px] md:w-[673px] h-[141px] md:h-[255px]"
                    />

                    {/* Text Below Logo */}
                    <h1
                        className="relative top-[340px] md:top-[400px] left-[55px] md:left-[740px] text-white font-chonburi text-[45px] md:text-[73px]"
                    >
                        OMNIBLEND
                    </h1>
                </div>
            </div>

            <div className="relative mt-32 md:mt-48">
                <h1 className="text-white font-inknut text-[35px] md:text-[50px] text-center md:top-16 font-black">
                    Introducing OmniBlend
                </h1>
            </div>

            <div className="relative top-16 md:top-32 mb-36 px-8 md:px-[215px]">
                <div className="flex-col flex md:flex-row gap-x-40">


                    {/* Left Text Block */}
                    <h1 className="text-white w-full md:w-[844px] font-inknut text-[16px] md:text-[22px] text-center md:text-left leading-[30px] md:leading-[60px] font-semibold">
                        OmniBlend was born from a simple frustration: great flavor shouldn’t take a shelf full of spices or a culinary degree. As chefs, creators, and everyday cooks ourselves, we were tired of spice blends that either fell flat, felt artificial, or just didn’t work across cuisines.<br/>
                        So we built our own—starting in a small kitchen, testing combinations obsessively, chasing that perfect, versatile flavor. The result? A globally inspired, chef-grade seasoning that actually lives up to its promise: real flavor, no shortcuts, no fillers.
                    </h1>

                    {/* Right Image Block */}
                    <div className="relative mt-[-24px] left-10 md:left-0">
                        <img
                            src="/public/Aboutimage.png"
                            alt="About Image"
                            className="w-[254px] md:w-[384px] h-[486px] md:h-[606px] object-contain"
                        />
                    </div>
                </div>
                <div>
                    <h1 className="text-white font-inknut text-[16px] md:text-[22px] text-center md:text-left leading-[30px] md:leading-[60px] font-semibold">
                        Today, OmniBlend stands for more than convenience—it’s a commitment to clean ingredients, bold taste, and creative freedom in the kitchen. Whether you're a pro behind the grill or just learning to cook, we made this for you.<br/>
                        Because you deserve flavor that works hard—just like you do.
                    </h1>
                </div>
                <div className="flex-col flex md:flex-row md:gap-x-[68px]">
                    <h1 className="relative w-full text-white font-inknut top-[80px] md:top-[130px] text-[30px] md:text-[40px] text-center md:text-left leading-[60px] md:leading-[90px] font-bold">
                        Why OmniBlend<br/> Why OmniBlend ?
                    </h1>
                    <h1 className="relative text-white top-24 text-[16px] md:text-[22px] font-inknut leading-[30px] text-center md:text-left md:leading-[60px] mb-36 md:mb-64 font-semibold">
                        Because your time, taste, and standards deserve better.
                        Cooking shouldn't be a chore—or a flavorless routine. Whether it’s breakfast or a midnight snack, OmniBlend replaces cluttered spice racks and guesswork with one bold shake.
                        OmniBlend — where flavor meets freedom.
                    </h1>
                </div>

            </div>

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





    )
}
export default Aboutus
