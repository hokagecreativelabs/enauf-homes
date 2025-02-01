"use client";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-10 px-4 md:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Newsletter Section */}
        <div>
          <h2 className="text-2xl font-bold flex items-center">
            Enauf <span className="text-[#FF6700]">Homes</span>
          </h2>
          <p className="text-md mt-2">Subscribe to our newsletter for the latest updates on features and releases.</p>
          <div className="flex mt-4">
            <input type="email" placeholder="Your email here" className="border p-2 flex-grow rounded-l-md" />
            <button className="bg-[#FF6700] text-white px-4 py-2 rounded-r-md">Join</button>
          </div>
          <p className="text-md mt-2">By subscribing, you consent to our Privacy Policy and agree to receive updates.</p>
        </div>

        {/* Quick Links */}
        <div className="pl-0 sm:pl-10 md:pl-24">
          <h3 className="font-semibold text-lg">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            {["Home Page", "About Us", "Contact Us", "Blog Posts", "Property Listings"].map((link, index) => (
              <li key={index}>
                <Link href="#" className="hover:text-[#FF6700] transition-all duration-300">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div className="pl-0 sm:pl-10 md:pl-24">
          <h3 className="font-semibold text-lg">Resources</h3>
          <ul className="mt-2 space-y-2">
            {["FAQs", "Market Trends", "User Guides", "Testimonials", "Privacy Policy"].map((link, index) => (
              <li key={index}>
                <Link href="#" className="hover:text-[#FF6700] transition-all duration-300">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div className="pl-0 sm:pl-10 md:pl-24">
          <h3 className="font-semibold text-lg">Connect With Us</h3>
          <ul className="mt-2 space-y-2">
            {[ 
              { icon: <FaFacebook />, name: "Facebook" },
              { icon: <FaInstagram />, name: "Instagram" },
              { icon: <FaTwitter />, name: "X" },
              { icon: <FaLinkedin />, name: "LinkedIn" },
              { icon: <FaYoutube />, name: "YouTube" },
            ].map((social, index) => (
              <li key={index} className="flex items-center space-x-2">
                {social.icon} <span>{social.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      {/* Footer Bottom */}
        <div className="border-t mt-8 shadow-t-lg pt-4 flex flex-col sm:flex-row justify-between text-sm sm:flex-nowrap items-center">
        <p className="whitespace-nowrap">&copy; 2024 EnaufHomes. All rights reserved.</p>
        <div className="flex space-x-4 whitespace-nowrap">
            <Link href="#" className="hover:text-[#FF6700] transition-all duration-300">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#FF6700] transition-all duration-300">Terms of Service</Link>
            <Link href="#" className="hover:text-[#FF6700] transition-all duration-300">Cookie Settings</Link>
        </div>
        </div>

    </footer>
  );
}
