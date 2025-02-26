import React from "react";
import { NavLink, useRouteError } from "react-router-dom";
import { motion } from "framer-motion";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  

  return (
    <div className="flex flex-col items-center justify-center h-screen  text-white text-center p-6">
      <motion.h1
        className="text-6xl font-bold mb-4 text-red-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Oops!
      </motion.h1>
      <motion.p
        className="text-lg mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        An unexpected error has occurred.
      </motion.p>
      {error && (
        <motion.p
          className="bg-red-600 p-3 rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {error.statusText}
        </motion.p>
      )}
      <NavLink to={"/"}>
      <motion.button
        href="/"
        className="mt-6 px-6 py-2 bg-green-600 hover:bg-green-700 rounded-full text-white shadow-md"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        Go Home
      </motion.button>
      </NavLink>
    </div>
  );
};

export default ErrorPage;