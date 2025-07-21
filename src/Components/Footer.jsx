import React from "react";
import { Link } from "react-router-dom";
import mapImg from "../assets/home/map.png";
import logo from "../assets/home/Picture2.png";
const Footer = () => {
  return (
    <footer className="bg-[#0a4267] border-t border-[#E5E7EB] mt-10">
      <div className="max-w-[1350px] mx-auto px-4 md:px-[120px] py-12 flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Logo & Static Info */}
        <div className="flex flex-col items-center md:items-start select-none max-w-xs">
          <Link to="/">
            <img src={logo} alt="" className="w-70 rounded-lg mb-3" />
          </Link>
          <div className="text-white text-center md:text-left text-[14px] mt-2 leading-relaxed">
            <div className="font-bold mb-1">Head Offices Saudi Arabia</div>
            <div>
              Riyadh
              <br />
              18 Floor, Burj Tamkeen, Olaya St., Riyadh
            </div>
            <div className="mt-2">
              Medinah
              <br />
              7116 Prince Abdul Majeed Rd, Al Dhahirah Dist., Medina
            </div>
            <div className="mt-2">
              Delivering innovative, sustainable solutions for modern cities and
              businesses. Your trusted partner in earth solutions technology.
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-4 uppercase text-white font-medium text-[16px] text-center">
          <Link to="/" className="hover:text-[#E30613] transition-colors">
            Home
          </Link>
          <Link to="/who" className="hover:text-[#E30613] transition-colors">
            Who We Are
          </Link>
          <Link
            to="/services"
            className="hover:text-[#E30613] transition-colors"
          >
            What We Do
          </Link>
          <Link
            to="/solutions"
            className="hover:text-[#E30613] transition-colors"
          >
            Solutions
          </Link>
          <Link
            to="/projects"
            className="hover:text-[#E30613] transition-colors"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="hover:text-[#E30613] transition-colors"
          >
            Contact Us
          </Link>
        </nav>

        {/* Contact Info & Map */}
        <div className="flex flex-col items-center  gap-4">
          <div className="text-white text-left text-[15px]">
            <div className="mt-5 font-semibold text-white">Contact Us</div>
            <div>
              Email:{" "}
              <a
                href="mailto: info@geoduke.com 
"
                className="hover:text-[#E30613] transition-colors"
              >
                info@geoduke.com
              </a>
            </div>
            <div>
              Website:{" "}
              <a
                href="www.geoduke.com "
                className="hover:text-[#E30613] transition-colors"
              >
                www.geoduke.com
              </a>
            </div>
          </div>
          <div className="w-[180px] md:w-[220px] lg:w-[260px] mt-2">
            <img
              src={mapImg}
              alt="Our Locations Map"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 py-4 text-center text-white text-[13px] bg-[#0a4267]">
        &copy; {new Date().getFullYear()} GEODUKE. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
