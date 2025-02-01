"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-9xl mx-auto py-12 px-4">
    {/* Banner */}
      <div className="shadow-sm relative bg-cover bg-no-repeat bg-center h-64 flex items-center justify-center text-white" style={{ backgroundImage: "url('/assets/home1.jpg')" }}>
        {/* <h1 className="text-4xl font-bold">Find Your Dream Property</h1> */}
      </div>
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="text-3xl font-bold text-center mb-8 mt-8"
      >
        Contact Us
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              value={formData.name} 
              onChange={handleChange} 
              className="border p-2 w-full rounded" 
              required 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              value={formData.email} 
              onChange={handleChange} 
              className="border p-2 w-full rounded" 
              required 
            />
            <textarea 
              name="message" 
              placeholder="Your Message" 
              value={formData.message} 
              onChange={handleChange} 
              className="border p-2 w-full rounded h-32" 
              required
            ></textarea>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600">
              Send Message
            </button>
          </form>
        </div>
        
        {/* Contact Details & Map */}
        <div className="space-y-6">
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <div className="space-y-4">
              <p className="flex items-center gap-2"><FaPhone /> +1 234 567 890</p>
              <p className="flex items-center gap-2"><FaEnvelope /> contact@example.com</p>
              <p className="flex items-center gap-2"><FaMapMarkerAlt /> 123 Real Estate St, NY</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="250"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=New+York"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
