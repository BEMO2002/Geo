import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { TfiArrowTopRight } from "react-icons/tfi";
import image1 from "../assets/home/img-split-panel-recent-work-01-960x750.jpg";
import image2 from "../assets/home/download (3).webp";
import image3 from "../assets/home/download (4).webp";
import image4 from "../assets/home/download (5).webp";
import shape from "../assets/home/shape-1.png";
import { motion } from "framer-motion";
import { fadeIn } from "../Framermotion/varient";
const ProfessionalCarousel = ({ items, autoPlay = true, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!autoPlay || isPaused) return;

    const timer = setTimeout(goToNext, interval);
    return () => clearTimeout(timer);
  }, [currentIndex, isPaused]);

  return (
    <div
      className="relative  w-full h-[90vh] max-h-screen overflow-hidden pt-40 md:pt-20 z-20 "
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <div className="relative w-full  h-full transition-transform duration-700 ease-in-out">
        {items.map((item, index) => (
          <div
            key={item.id || index}
            className={`absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-700 ${
              index === currentIndex
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <img
              src={shape}
              alt=""
              className="absolute -top-20 left-0 inset-0 opacity-30 rotate-180 hidden md:block"
            />
            <div className="container mx-auto  px-4 py-12">
              <div className="w-full max-w-[1500px] mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                  {/* Text Section */}
                  <motion.div
                    variants={fadeIn("down", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0 }}
                    className="max-w-full lg:w-1/2 z-50"
                  >
                    {/* الأسهم فوق التيكست */}
                    <div className="flex flex-row gap-2 items-center mb-4">
                      <button
                        onClick={goToPrev}
                        className="p-3 shadow-lg bg-white text-black hover:bg-black hover:text-white transition duration-300"
                        aria-label="Previous slide"
                      >
                        <FiChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={goToNext}
                        className="p-3 shadow-lg bg-white text-black hover:bg-black hover:text-white transition duration-300"
                        aria-label="Next slide"
                      >
                        <FiChevronRight className="w-6 h-6" />
                      </button>
                    </div>
                    {item.paragraph && (
                      <h2 className="text-4xl md:text-7xl font-semibold mb-4 text-black leading-tight">
                        {item.paragraph}
                      </h2>
                    )}
                    {item.title && (
                      <h3 className="text-2xl md:text-5xl mb-2 text-primary">
                        {item.title}
                      </h3>
                    )}
                    {item.description && (
                      <p className="text-xl w-[350px] md:w-[500px] text-black mb-6 leading-10">
                        {item.description}
                      </p>
                    )}
                    {item.cta && (
                      <button
                        className="relative inline-block my-4 md:px-12 px-6 md:py-6 py-3 text-center border-2 border-black 
            text-lg tracking-wider text-black no-underline font-bold
            cursor-pointer transition-all duration-500 ease-out
            shadow-[inset_0_0_0_0_#000]
            hover:text-white hover:shadow-[inset_0_-100px_0_0_#000]
            active:scale-90"
                      >
                        {item.cta}
                        <TfiArrowTopRight className="inline-block ml-2 text-xl" />
                      </button>
                    )}
                  </motion.div>
                  <motion.div
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0 }}
                    className="max-w-full lg:w-1/2 relative"
                  >
                    <div className="relative w-full h-[400px] flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.alt || `Slide ${index + 1}`}
                        className="w-full h-full object-cover rounded-xl relative z-10"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentIndex
                ? "bg-red-600 w-6"
                : "bg-red-500 hover:bg-red-600"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Example usage
const Slider = () => {
  const carouselItems = [
    {
      id: 1,
      image: image1,
      paragraph: "Aviation",
      title: "Delivering Success In Every Market",
      description:
        " We enable our clients to achieve success in a multitude of industry sectors from major infrastructure programs to landmark buildings",
      cta: "Explore Now",
    },
    {
      id: 2,
      image: image2,
      paragraph: "PROJECTS",
      title: "MANAGING PROJECTS ACROSS THE WORLD",
      description:
        "From Abu Dhabi's Etihad Towers to Manhattan's World Trade Center Reconstruction, HillInternational has helped our clients achieve their vision",
      cta: "View Projects",
    },
    {
      id: 3,
      image: image3,
      paragraph: "CAREERS",
      title: "TAKE YOUR CAREER HIGHER WITH HILL",
      description:
        "Join us for the opportunity to work on the most exciting, world- changing projects of your career.",
      cta: "Explore Careers",
    },

    {
      id: 4,
      image: image4,
      paragraph: "SERVICES",
      title:
        "THE FIRST CHOICE FOR GLOBAL PROGRAM, PROJECT, AND CONSTRUCTION MANAGEMENT",
      description:
        "We have one definition of success: getting the best outcome for our client.",
      cta: "Explore Services",
    },
  ];

  return (
    <div className="bg-secondary">
      <ProfessionalCarousel
        items={carouselItems}
        autoPlay={true}
        interval={6000}
      />
    </div>
  );
};

export default Slider;
