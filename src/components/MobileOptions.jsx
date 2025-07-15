import React from 'react';
import { motion } from 'framer-motion';
import { IoReorderThreeOutline } from 'react-icons/io5';

const MobileMenuIcon = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute top-4 right-4 z-50 block md:hidden"
        >
            <IoReorderThreeOutline className="text-2xl text-white cursor-pointer hover:scale-110 transition-transform" />
        </motion.div>
    );
};

export default MobileMenuIcon;
