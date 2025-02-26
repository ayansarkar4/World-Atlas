import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

const contactInfo = [
  {
    id: 1,
    icon: <FaLocationDot className="text-red-500 text-xl" />,
    title: "Find us",
    detail: "Kolkata, West Bengal",
  },
  {
    id: 2,
    icon: <IoCallSharp className="text-green-500 text-xl" />,
    title: "Call us",
    detail: "+91 12345 67890",
  },
  {
    id: 3,
    icon: <IoMdMail className="text-blue-500 text-xl" />,
    title: "Email us",
    detail: "ayan@email.com",
  },
];

const Footer = () => {
  return (
    <div className="bg-[#202020] rounded-lg shadow-md shadow-gray-800 relative z-50">
      <nav className="max-w-7xl mx-auto text-white py-4 px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:justify-between items-center sm:items-start w-full space-y-4 sm:space-y-0">
          {contactInfo.map(({ id, icon, title, detail }) => (
            <div key={id} className="flex items-center space-x-3">
              {icon}
              <div className="flex flex-col text-center sm:text-left">
                <p className="text-sm text-gray-300">{title}</p>
                <p className="text-sm text-gray-300">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </nav>

      <div className="bg-gray-700 py-3 mt-4">
        <p className="text-gray-300 text-sm text-center">
          &copy; {new Date().getFullYear()} Ayan. All Rights Reserved. | Designed by Ayan
        </p>
      </div>
    </div>
  );
};

export default Footer;
