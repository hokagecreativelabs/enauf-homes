"use client";
import { useState, useEffect, useCallback } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import RealEstateForm from "./BookingForm";

const slides = [
  {
    title: "Discover Your Dream Property In Lagos Today",
    subtitle: "Whether Buying, Selling or Investing, we've got the perfect solution for you.",
    image: "/assets/home1.jpg",
  },
  {
    title: "Your Ideal Home Awaits",
    subtitle: "Find properties that match your lifestyle and budget.",
    image: "/assets/home2.jpg",
  },
  {
    title: "Effortless Property Search",
    subtitle: "We make property buying and selling seamless and stress-free.",
    image: "/assets/home3.jpg",
  },
];

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
    setImageLoaded(false);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setImageLoaded(false);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${index === activeSlide ? "opacity-100" : "opacity-0"}`}
          style={{ backgroundImage: `url(${slide.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          {!imageLoaded && <Skeleton height="100vh" width="100%" />}
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 mb-64">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white max-w-4xl leading-tight">
              {slide.title}
            </h2>
            <h3 className="text-md sm:text-xl md:text-2xl font-semibold mt-4 text-white max-w-5xl mb-64">
              {slide.subtitle}
            </h3>
            {/* <div className="hidden sm:flex mt-8 flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#FF6700] hover:bg-[#c27803] text-white font-semibold py-3 px-6 text-lg sm:text-xl rounded-lg transition duration-300 ease-in-out">
                Search
              </button>
              <button className="bg-white text-[#FF6700] hover:bg-gray-200 font-semibold py-3 px-6 text-lg sm:text-xl rounded-lg transition duration-300 ease-in-out">
                Learn More
              </button>
            </div> */}
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-4xl font-bold z-30 hidden sm:block" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-4xl font-bold z-30 hidden sm:block" onClick={nextSlide}>
        &#10095;
      </button>

      {/* Real Estate Form */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4">
        <RealEstateForm />
      </div>
    </div>
  );
};

export default HeroSection;
