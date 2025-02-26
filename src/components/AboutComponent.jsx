import React from 'react'
import { motion } from "framer-motion";
import countryFacts from "../api/CountryData.json";

const AboutComponent = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-16 text-white">
      {/* Title Section with Animation */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl font-bold text-center text-gray-200 mb-12"
      >
        Here are the Interesting Facts <br />
        <span className="text-yellow-400">we're proud of!</span>
      </motion.h2>

      {/* Card Section with Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {countryFacts.map((country) => (
          <motion.div
            key={country.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 shadow-xl rounded-2xl p-6 w-full max-w-md border border-gray-700 overflow-hidden relative mx-auto"
          >
            {/* Glowing Effect */}
            <div className="absolute -top-5 -left-5 w-20 h-20 bg-yellow-400 opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-blue-400 opacity-20 blur-3xl"></div>

            <h2 className="text-2xl font-bold text-yellow-400 text-center mb-4">
              {country.countryName}
            </h2>
            <div className="text-gray-300 space-y-3">
              <p>
                <span className="font-semibold text-white">Capital:</span> {country.capital}
              </p>
              <p>
                <span className="font-semibold text-white">Population:</span> {country.population.toLocaleString()}
              </p>
              <p>
                <span className="font-semibold text-white">Interesting Facts:</span> {country.interestingFact}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default AboutComponent

