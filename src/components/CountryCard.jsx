import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const CountryCard = ({ countryData }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 10px 30px rgba(255, 215, 0, 0.3)",
      }}
      className="relative bg-gray-800 bg-opacity-90 backdrop-blur-lg shadow-2xl rounded-2xl p-6 w-full max-w-sm border border-gray-600 overflow-hidden mx-auto text-white"
    >
      {/* Glowing Background Effects */}
      <div className="absolute -top-5 -left-5 w-24 h-24 bg-yellow-400 opacity-30 blur-3xl"></div>
      <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-blue-400 opacity-30 blur-3xl"></div>

      {/* Flag Image (Updated Design) */}
      <div className="w-full h-36 mb-4 flex justify-center">
        <motion.img
          src={countryData.flags.svg}
          alt={`${countryData.name.common} flag`}
          className="w-5/6 h-full object-cover rounded-lg shadow-lg border-2 border-yellow-400"
          whileHover={{ scale: 1.05, rotate: 2 }}
        />
      </div>

      {/* Country Name */}
      <h2 className="text-2xl font-extrabold text-yellow-400 text-center mb-3">
        {countryData.name.common}
      </h2>

      {/* Country Info */}
      <div className="text-gray-300 space-y-3 text-center">
        <p>
          <span className="font-semibold text-white">🌆 Capital:</span>{" "}
          {countryData.capital?.[0] || "N/A"}
        </p>
        <p>
          <span className="font-semibold text-white">🌍 Region:</span>{" "}
          {countryData.region}
        </p>
        <p>
          <span className="font-semibold text-white">👥 Population:</span>{" "}
          {countryData.population.toLocaleString()}
        </p>
        <NavLink to={`/country/${countryData.name.common}`}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-6 py-2 bg-yellow-400 text-gray-900 font-bold rounded-full shadow-md hover:bg-yellow-300 transition duration-300"
          >
            Read More
          </motion.button>
        </NavLink>
      </div>
    </motion.div>
  );
};

export default CountryCard;
