import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`relative ${isMenuOpen ? "overflow-hidden" : ""}`}>
      <Navbar setIsMenuOpen={setIsMenuOpen} />
      <Outlet />
      
      {/* Hide footer only when menu is open */}
      {!isMenuOpen && <Footer />}
    </div>
  );
};

export default Layout;
