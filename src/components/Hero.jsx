import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Background Blur Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent blur-3xl opacity-30"></div>

      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 mt-0 sm:mt-14">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 order-2 sm:order-1 text-center sm:text-left"
        >
          <h1 className="text-4xl sm:text-5xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 leading-tight">
            Explore the World, <br /> One Country at a Time.
          </h1>
          <p className="text-gray-300 mt-4 ">
            Discover the history, culture, and beauty of every nation. Sort,
            search, and filter through countries to find the details you need.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 flex items-center gap-3 bg-yellow-500 text-white  px-6 py-3 font-semibold rounded-xl shadow-lg hover:bg-yellow-600 transition duration-300 mx-auto sm:mx-0"
          >
            Start Exploring <FaLongArrowAltRight size={20} />
          </motion.button>
        </motion.div>

        {/* Right Side (Image with Animation) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="order-1 sm:order-2 "
        >
          <img
            src="/hero/image.png"
            alt="World Map"
            className=" w-full max-w-md mx-auto md:max-w-full rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
