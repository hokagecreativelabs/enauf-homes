"use client";
import React from "react";
import { FaCalendarCheck, FaClipboardList, FaUserTie } from "react-icons/fa";
import { motion } from "framer-motion";

// Feature data
const features = [
  {
    icon: <FaCalendarCheck className="text-3xl text-black" />,
    title: "Easily Schedule Appointments to View Properties That Interest You",
    description: "Connect directly with experienced agents to get personalized assistance.",
    link: "Search",
  },
  {
    icon: <FaClipboardList className="text-3xl text-[#FF6700]" />, // Orange for highlight
    title: "Streamline Your Property Visits with Simple Appointment Requests",
    description: "Book viewings at your convenience and never miss out on a property.",
    link: "Request",
    highlight: true, // Marks this card for highlighting
  },
  {
    icon: <FaUserTie className="text-3xl text-black" />,
    title: "Get Expert Guidance by Contacting Our Knowledgeable Real Estate Agents",
    description: "Our agents are ready to help you navigate the real estate market.",
    link: "Contact",
  },
];

export default function PropertySearchFeature() {
  return (
    <section className="px-6 md:px-12 py-12 text-center">
      <h2 className="text-2xl md:text-3xl font-bold">
        Discover Your Dream Home with Our <br className="hidden md:block" />
        Comprehensive Property Search Feature
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={`p-6 border rounded-lg shadow-lg transition-all duration-300 ${
              feature.highlight
                ? "border-[#FF6700] bg-[#FFF8F3] scale-105"
                : "border-gray-300"
            }`}
            initial={{ opacity: 0, y: 50 }} // Start from below with no opacity
            animate={{ opacity: 1, y: 0 }} // Animate to full opacity and normal position
            transition={{ duration: 0.8, delay: index * 0.2 }} // Staggered delay for each item
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)", // Hover effect to make it pop
            }}
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="font-semibold text-lg">{feature.title}</h3>
            <p className="text-sm mt-2">{feature.description}</p>
            <a
              href="#"
              className="mt-4 inline-block text-[#FF6700] font-semibold hover:underline"
            >
              {feature.link} &rarr;
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
