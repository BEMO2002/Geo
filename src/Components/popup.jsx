import { PiHandshakeLight } from "react-icons/pi";
import popupImage from "../assets/home/logo.png";
import logo from "../assets/home/logo2.png";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Popup = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  // Show popup only once per user (unless they click the icon)
  useEffect(() => {
    if (!localStorage.getItem("popup_shown")) {
      setOpen(true);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem("popup_shown", "true");
  };

  return (
    <>
      {/* Floating Icon Button */}
      <div className="fixed left-[10px] bottom-[20px] z-50">
        <button
          onClick={() => setOpen(true)}
          className="relative w-16 h-16 rounded-full bg-second shadow-lg flex items-center justify-center cursor-pointer focus:outline-none"
        >
          {/* Ping Animation */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping" />
          <PiHandshakeLight size={30} className="relative text-white z-10" />
        </button>
      </div>

      {/* Popup Modal */}
      {open && (
        <div
          onClick={handleClose}
          className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 w-full max-w-[95vw] sm:max-w-lg md:max-w-2xl shadow-2xl flex flex-col items-center relative"
          >
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold focus:outline-none"
              aria-label="Close"
            >
              ×
            </button>
            {/* Logo */}
            <img
              src={logo}
              alt="Popup"
              className="w-24 sm:w-32 md:w-40 h-auto object-contain absolute top-4 left-4"
              style={{ zIndex: 10 }}
            />
            {/* Main image */}
            <img
              src={popupImage}
              alt="Popup"
              className="w-32 sm:w-40 md:w-56 h-auto object-contain mb-4 mt-16"
            />
            <h2 className="mb-4  text-base sm:text-lg md:text-[18px] font-semibold text-center">
              Exclusive Partnership with Shaw Technologies International (STI)
              –USA
            </h2>
            <p className="max-w-xs sm:max-w-md md:max-w-2xl text-center text-sm sm:text-base mb-2">
              We are proud to announce that GEODUKE has entered into an
              exclusive long-term partnership in the Kingdom of Saudi Arabia
              with Shaw Technologies International (STI) — a U.S.-based industry
              leader in Modern Mechanical Stabilized Earth (MSE) systems,
              Retaining Walls, Precast Concrete Arches, Omega Walls, and Large
              Block Wall systems.
            </p>
            <button
  className="bg-second text-white rounded px-6 py-3 text-sm s font-medium mt-4 shadow"
  onClick={() => {
    handleClose();
    navigate('/partnership');
  }}
>
  More Details
</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
