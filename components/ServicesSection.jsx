"use client";
import React from "react";
import { FaHome, FaMoneyBillWave, FaBuilding, FaLightbulb, FaArrowUp } from "react-icons/fa";

const services = [
  { icon: <FaHome className="text-purple-400 text-3xl" />, title: "Find Your Dream Home" },
  { icon: <FaMoneyBillWave className="text-purple-400 text-3xl" />, title: "Unlock Property Value" },
  { icon: <FaBuilding className="text-purple-400 text-3xl" />, title: "Effortless Property Management" },
  { icon: <FaLightbulb className="text-purple-400 text-3xl" />, title: "Smart Investments, Informed Decisions" },
];

export default function ServicesSection() {
  return (
    <section className="px-6 md:px-12 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#121212] p-6 rounded-xl relative flex flex-col items-center text-center text-white transition-transform transform hover:scale-105"
          >
            <div className="relative">
              <div className="absolute inset-0 animate-pulse opacity-20">{service.icon}</div>
              {service.icon}
            </div>
            <h3 className="mt-12 text-lg font-semibold">{service.title}</h3>
            <FaArrowUp className="absolute top-4 right-4 text-[#FF6700] hover:text-white transition-colors duration-300 rotate-45" />
          </div>
        ))}
      </div>
    </section>
  );
}
