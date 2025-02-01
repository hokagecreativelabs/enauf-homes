"use client";
import React, { useRef } from "react";
import properties from "../data/properties.json";
import PropertyCard from "./PrpertyCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import { motion } from "framer-motion";

const RecentProperties = () => {
  const swiperRef = useRef(null);

  return (
    <div className="py-12 px-4">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-center md:text-left">
          Recent Properties
        </h2>
        <p className="text-gray-600 text-center md:text-left">
          Find your house in your city
        </p>
      </div>

      {/* Mobile - Swiper */}
      <div className="block md:hidden">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {properties.map((property) => (
            <SwiperSlide key={property.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <PropertyCard property={property} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Arrows Below */}
        <div className="flex justify-between items-center mt-4 px-8">
          <motion.button
            onClick={() => swiperRef.current?.slidePrev()}
            className="bg-gray-200 hover:bg-[#FF6700] text-black rounded-full p-3 shadow-md transition duration-300"
            whileHover={{
              scale: 1.1,
              rotate: -10,
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            <FaArrowLeft size={20} />
          </motion.button>
          <motion.button
            onClick={() => swiperRef.current?.slideNext()}
            className="bg-gray-200 hover:bg-[#FF6700] text-black rounded-full p-3 shadow-md transition duration-300"
            whileHover={{
              scale: 1.1,
              rotate: 10,
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            <FaArrowRight size={20} />
          </motion.button>
        </div>
      </div>

      {/* Desktop - Grid */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {properties.map((property) => (
          <motion.div
            key={property.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <PropertyCard property={property} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RecentProperties;
