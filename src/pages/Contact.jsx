import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const handleFormSubmit = (formdata) => {
  const formInputdata =   Object.fromEntries(formdata.entries());
  console.log(formInputdata);
  
    
  }
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-16 text-white">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl font-bold text-center text-gray-200 mb-12"
      >
        Contact Us
      </motion.h1>
      <motion.form 
      action={handleFormSubmit}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg mt-8"
      >
        <div className="mb-4">
          <motion.input 
            whileFocus={{ scale: 1.02 }}
            type="text" 
            placeholder="Enter Your Name" 
            required
            autoComplete="off"
            name="username"
            className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-600 focus:border-yellow-400 focus:outline-none" 
          />
        </div>
        <div className="mb-4">
          <motion.input 
            whileFocus={{ scale: 1.02 }}
            type="email" 
            placeholder="Enter Your Email" 
            required
            autoComplete="off"
            name="email"
            className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-600 focus:border-yellow-400 focus:outline-none" 
          />
        </div>
        <div className="mb-4">
          <motion.textarea
            whileFocus={{ scale: 1.02 }}
            cols="30"
            rows="5"
            placeholder="Enter Your Message"
            required
            autoComplete="off"
            name="message"
            className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-600 focus:border-yellow-400 focus:outline-none"
          ></motion.textarea>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full text-lg p-3 text-white bg-yellow-500 font-bold rounded-lg hover:bg-yellow-400 transition duration-300"
        >
          Submit
        </motion.button>
      </motion.form>
    </div>
  );
};

export default Contact;