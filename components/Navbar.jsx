"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="shadow-lg sticky top-0 z-30 bg-white text-black px-6 py-3 flex justify-between items-center transition-all duration-300">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold flex items-center">
        Enauf <span className="text-[#FF6700]">Homes</span>
      </Link>

      {/* Nav Links (Hidden on small screens) */}
      <ul className="hidden md:flex space-x-8 text-lg font-semibold">
        {[
          { name: "Home", href: "/" },
          { name: "Properties", href: "/properties" },
          { name: "Contact Us", href: "/contact" },
        ].map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className={`relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#FF6700] after:bottom-0 after:left-0 ${
                pathname === item.href ? "after:scale-x-100 text-[#FF6700] font-bold" : "after:scale-x-0 text-black"
              } after:transition-transform after:duration-300`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Sign Up Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="bg-[#FF6700] text-white px-6 py-2 rounded-lg font-semibold hidden md:block transition-all duration-300"
      >
        Sign Up
      </motion.button>

      {/* Mobile Menu Button */}
      <button onClick={toggleMenu} className="md:hidden text-2xl text-[#FF6700] z-50">
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 bg-white flex flex-col items-center justify-center text-black md:hidden z-40 transition-all duration-300"
          >
            <ul className="text-center space-y-6 text-xl">
              {[
                { name: "Home", href: "/" },
                { name: "Properties", href: "/properties" },
                { name: "Contact Us", href: "/contact" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    onClick={toggleMenu}
                    className={`hover:text-[#FF6700] transition-all duration-300 ${
                      pathname === item.href ? "text-[#FF6700] font-bold after:scale-x-100" : "text-black after:scale-x-0"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={toggleMenu}
              className="bg-[#FF6700] text-white px-6 py-3 mt-6 rounded-lg font-semibold transition-all duration-300"
            >
              Sign Up
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
