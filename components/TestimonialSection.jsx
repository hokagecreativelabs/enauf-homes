"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper"; // Import Pagination and Autoplay from 'swiper'
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore from "swiper/core"; // Import SwiperCore

// Register the Pagination and Autoplay modules
SwiperCore.use([Pagination, Autoplay]);

export default function TestimonialSection() {
  const testimonials = [
    {
      message:
        "This real estate agency helped me find my dream home in Lagos! Their professionalism and market knowledge are unmatched.",
      name: "John Doe",
      position: "Software Engineer, TechCorp",
      image: "/assets/home1.jpg", // Replace with your image URLs
    },
    {
      message:
        "Investing in Lagos real estate seemed daunting, but this team made the process seamless and rewarding.",
      name: "Jane Smith",
      position: "Investor, PropertySolutions",
      image: "/assets/home2.jpg", // Replace with your image URLs
    },
    {
      message:
        "Their expert advice and guidance during my rental search were exceptional. Highly recommended!",
      name: "Michael Brown",
      position: "Marketing Manager, BrightFuture",
      image: "/assets/home3.jpg", // Replace with your image URLs
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <Swiper
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 1000, disableOnInteraction: false }} // Enable autoplay
        spaceBetween={30}
        slidesPerView={1}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8">
              {/* Left Section: Image */}
              <div className="w-full lg:w-1/2 h-96 lg:h-auto">
                <img
                  src={testimonial.image}
                  alt={`Photo of ${testimonial.name}`}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>

              {/* Right Section: Testimonial Content */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <p className="text-gray-600 italic text-lg lg:text-xl mb-6">
                  "{testimonial.message}"
                </p>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Pagination Indicators */}
      <div className="swiper-pagination mt-6"></div>
      <div className="mt-6 text-center">
        <p className="text-gray-600">Swipe to explore more testimonials.</p>
      </div>
    </div>
  );
}
