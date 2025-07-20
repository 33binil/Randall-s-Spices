import React from 'react'
import { IoReorderThreeOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import {Link} from "react-router-dom";

const Buypage = () => {
    return (
        <div className="relative bg-[#111111] min-h-screen min-w-screen overflow-hidden">
            <div
                className="absolute inset-0 bg-center bg-cover pointer-events-none z-0"
                style={{
                    backgroundImage: 'url("https://raw.githubusercontent.com/33binil/Randall-s-Spices/main/public/Buypage.jpg")',
                    opacity: 0.15,
                }}
            />
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
            <div className="absolute top-16 w-full hidden md:flex justify-center space-x-[180px] z-10 ">

                <Link to="/home">
                    <button>
                        <h2 className="font-inknut text-white text-[12px] md:text-[17px] font-bold hover:scale-105 transition-transform">
                            HOME
                        </h2>
                    </button>
                </Link>

                <Link to="/aboutus">
                    <button>
                        <h2 className="font-inknut text-white text-[12px] md:text-[17px] font-bold hover:scale-105 transition-transform">
                            ABOUT US
                        </h2>
                    </button>
                </Link>

                <button>
                    <h2 className="font-inknut text-white text-[12px] md:text-[17px] font-bold hover:scale-105 transition-transform">
                        CONTACT US
                    </h2>
                </button>
            </div>
            <div className="relative md:top-[-60px] md:left-[-20px] ">
                <div className="relative top-24 md:top-[200px] left-[45px] md:left-[244px] flex-col md:flex-row">
                    <img src="https://raw.githubusercontent.com/33binil/Randall-s-Spices/main/public/omniblend_photoshoot_2.png.webp"
                         alt="Omniblend Photoshoot"
                         className="relative w-[319px] md:w-[569.23px] h-[424px] md:h-[674px]"
                    />

                    <div className="relative  md:left-[680px] top-9 md:top-[-620px]">
                        <h1 className="relative font-inknut text-white text-[9px] md:text-[13px] font-semibold hover:scale-105 transition-transform">
                            RANDALL'S HARVEST
                        </h1>

                        <h1 className="relative top-6 text-white text-[22px] md:text-[34px] font-inknut font-black">
                            Omniblend - "One Jar,<br/> Limitless Flavour"

                        </h1>

                        <div>
                            <h1 className="relative top-12 md:top-16 text-white font-inria font-bold text-[22px] md:text-[30px]">
                                Rs. 179.00
                            </h1>
                        </div>

                        <div className="relative top-24 md:top-28 left-24 md:left-8">
                            <button className="group px-6 py-2 border-2 border-white text-white rounded-full bg-transparent hover:bg-white transition-colors duration-300">
                                <h1 className="font-inknut text-[10px] md:text-[14px] flex items-center space-x-2 group-hover:text-black">
                                    <span>Buy It Now</span>
                                    <FaCartShopping className="group-hover:text-black" />
                                </h1>
                            </button>
                        </div>

                        <div className="relative top-44 w-[320px] md:w-full ">
                            <h1 className="relative text-white font-inknut font-light text-[14px] md:text-[20px]">
                                85g | Gourmet Seasoning Blend | Dual Texture | No BS |
                            </h1>
                            <div className="relative top-[22px]">
                                <h1 className="relative  text-white font-inknut font-light text-[14px] md:text-[20px] mb-96 md:mb-0">
                                    A bold, versatile spice blend crafted for everyday cooking and next-level<br/> flavor.OmniBlend combines rich, smoky spices with a touch of heat and savory depth,<br/> finished with a subtle crunch from cracked seeds.
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="relative w-[320px] md:w-full top-6 md:top-0 text-white font-inknut text-[16px] md:text-[22px] left-12 md:left-[244px] mb-60">
                    <h1 className="relative">
                        Engineered for:<br/>
                        Grills • Roasts • Eggs • Stir-Fries • Wraps • Veggies • Marinades • Sauces • Rice
                    </h1>
                    <h1 className="relative top-10">
                        Tastes Like:<br/>
                        🔥 Smoky • Savory • Slightly Sweet • Umami
                    </h1>
                    <h1 className="relative top-20">
                        Core Ingredients:<br/>
                        - Smoked paprika<br/>
                        - Garlic, onion, black pepper<br/>
                        - Cumin, coriander, rosemary<br/>
                        - Light citrus backnote<br/>
                        - Cracked fennel & toasted sesame for texture<br/>
                    </h1>
                    <h1 className="relative top-32">
                        Features:<br/>
                        ✅ Vegan<br/>
                        ✅ No MSG (customizable)<br/>
                        ✅ No preservatives<br/>
                        ✅ Globally inspired, chef-formulated<br/>
                        Use it dry, mix it wet — one jar, endless meals.<br/>
                        Whether you're a chef, foodie, or home cook, OmniBlend turns any meal into a masterpiece — in seconds.
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
                                <Link to="/aboutus">
                                    <button>
                                        <h2 className="relative top-2 font-inknut hover:scale-105 transition-transform text-[13px] md:text-xl font-extralight">
                                            Introducing Omniblend
                                        </h2>
                                    </button>
                                </Link>
                            </div>

                            <div className=" text-center md:text-left">
                                <h1 className="font-inknut text-[13px] md:text-xl font-extrabold">Home</h1>
                                <Link to="/home">
                                    <button>
                                        <h2 className="relative top-2 font-inknut hover:scale-105 transition-transform text-[13px] md:text-xl font-extralight">
                                            Ready to Buy
                                        </h2>
                                    </button>
                                </Link>
                            </div>

                            <div className=" text-center md:text-left">
                                <h1 className="font-inknut text-[13px] md:text-xl font-extrabold">Contact Us</h1>
                                <div className="relative top-2 flex justify-center md:justify-start gap-9 pt-2">
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
export default Buypage
