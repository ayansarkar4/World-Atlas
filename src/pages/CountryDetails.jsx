import React, { useEffect, useTransition, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getIndCountryData } from "../api/Postapi";
import { motion } from "framer-motion";


const CountryDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isPending, startTransition] = useTransition();
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    startTransition(async () => {
      try {
        const response = await getIndCountryData(id);
        if (response.status === 200 && response.data.length > 0) {
          setCountryData(response.data[0]);
        } else {
          console.error("Error: Country data not found");
        }
      } catch (error) {
        console.error("Fetching data failed:", error);
      }
    });
  }, [id]);

  if (isPending) {
    return <h1 className="text-center text-white text-2xl mt-10">Loading...</h1>;
  }

  if (!countryData) {
    return <h1 className="text-center text-red-500 text-2xl mt-10">No country data available</h1>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 px-4 py-32 sm:py-10 relative">
      
      <motion.button
        onClick={() => navigate(-1)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute top-6 left-6 flex items-center gap-2 bg-white/10 backdrop-blur-lg border border-gray-600 text-white px-4 py-2 rounded-full shadow-md transition-all hover:bg-white/20"
      >
         Go Back
      </motion.button>

      {/* Country Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative bg-gradient-to-br from-gray-800 to-black shadow-2xl p-6 sm:p-10 rounded-xl max-w-3xl w-full text-white border border-gray-700"
      >
        {/* Floating Accent Border */}
        <div className="absolute inset-0 rounded-xl border border-cyan-400 opacity-30 blur-lg"></div>

        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-5">
          {/* Flag Image */}
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            src={countryData?.flags?.svg}
            alt={countryData?.flags?.alt || "Flag"}
            className="w-32 sm:w-40 md:w-48 rounded-lg shadow-lg border border-gray-600"
          />

          {/* Country Name */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-yellow-300"
          >
            {countryData?.name?.common || "Unknown Country"}
          </motion.h1>
        </div>

        {/* Details Grid */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-6 grid grid-cols-2 gap-5 sm:gap-6 text-sm sm:text-lg"
        >
          <Detail label="🏛 Capital" value={countryData?.capital?.[0] || "N/A"} />
          <Detail label="🌎 Region" value={countryData?.region || "N/A"} />
          <Detail label="🌍 Subregion" value={countryData?.subregion || "N/A"} />
          <Detail label="👥 Population" value={countryData?.population.toLocaleString() || "N/A"} />
          <Detail label="💻 TLD" value={countryData.tld[0]} />
          <Detail
            label="🗣 Languages"
            value={Object.values(countryData.languages).join(", ")}
          />
          <Detail
            label="💰 Currencies"
            value={Object.values(countryData.currencies).map((cur) => cur.name).join(", ")}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

/* Reusable Detail Component */
const Detail = ({ label, value }) => (
  <div className="bg-gray-800/50 p-3 rounded-lg shadow-md">
    <p className="text-gray-400 text-sm">{label}</p>
    <p className="text-white font-semibold">{value}</p>
  </div>
);

export default CountryDetails;
