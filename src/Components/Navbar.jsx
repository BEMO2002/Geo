import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/home/Screenshot 2025-07-21 221411.png";
import { GoRocket } from "react-icons/go";
import { motion, AnimatePresence } from "framer-motion";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  // NavLink component for consistent styling
  const NavLink = ({ to, children, onClick }) => (
    <Link
      to={to}
      className={`relative group px-[16px] py-[8px] text-[16px] uppercase  font-[400] leading-[26px] ${
        isActive(to)
          ? "text-primary"
          : "text-base hover:text-primary duration-300"
      }`}
      onClick={onClick}
    >
      {children}
      <span
        className={`absolute left-0 -bottom-3 h-[4px] bg-primary transition-all duration-300 ${
          isActive(to) ? "w-full" : "w-0 group-hover:w-full"
        }`}
      ></span>
    </Link>
  );

  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-50 shadow">
      <div className="max-w-[1650px] mx-auto md:px-[120px] px-4 py-1 gap-[32px] sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="" className="md:w-60 w-40" />
          </Link>

          <div className="hidden lg:flex items-center   space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/who">Who We Are</NavLink>
            <NavLink to="/services">What We Do</NavLink>
            <NavLink to="/solutions">Solutions</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </div>

          {/* CTA Button - hidden on mobile */}
          <div className="hidden lg:flex">
            <Link
              to="/contact"
              className="relative w-full md:w-[347px] h-[48px] inline-flex items-center justify-center gap-2 px-[16px] py-[8px] font-[700] border  text-[16px] leading-[26px] rounded-[5px] text-white hover:text-primary hover:border-1 bg-primary hover:bg-[#fff] focus:outline-none transition-colors duration-300 uppercase"
            >
              <GoRocket size={24} />
              Lets Grow Your business
            </Link>
          </div>

          {/* Mobile menu button - shown on mobile and tablet */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - shown when menu is open */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/20  "
              onClick={toggleMenu}
            />
            {/* Side Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 40,
                duration: 0.4,
              }}
              className="fixed right-0 top-0 h-full w-3/4 max-w-xs bg-white shadow-xl z-[1001]"
            >
              <div className="flex justify-end w-full px-4 pt-4">
                <button
                  onClick={toggleMenu}
                  className="text-2xl text-gray-700 hover:text-primary focus:outline-none transition-colors duration-200"
                  aria-label="Close menu"
                >
                  <FiX />
                </button>
              </div>
              <div className="flex flex-col items-center w-full py-4">
                <div className="w-full flex flex-col items-center space-y-4">
                  <NavLink to="/" onClick={toggleMenu}>
                    Home
                  </NavLink>
                  <NavLink to="/who" onClick={toggleMenu}>
                    Who We Are
                  </NavLink>
                  <NavLink to="/services" onClick={toggleMenu}>
                    What We Do
                  </NavLink>
                  <NavLink to="/solutions" onClick={toggleMenu}>
                    Solutions
                  </NavLink>
                  <NavLink to="/projects" onClick={toggleMenu}>
                    Projects
                  </NavLink>
                  <NavLink to="/contact" onClick={toggleMenu}>
                    Contact Us
                  </NavLink>
                </div>
                <div className="w-full px-4 pt-6">
                  <Link
                    to="/contact"
                    className="w-full md:w-[300px] h-[48px] flex justify-center gap-2 px-[16px] py-[8px] font-[700] border  text-[16px] leading-[26px] rounded-[8px] text-white hover:text-primary hover:border-1 bg-primary hover:bg-[#fff] transition-colors duration-300 uppercase"
                  >
                    <GoRocket size={24} />
                    Lets Grow Your business
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
