"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How to buy property?",
      answer:
        "Buying property in Lagos involves several steps. First, you should determine your budget and preferred location. Then, engage a reputable real estate agent to help you navigate the market.",
    },
    {
      question: "What are rental costs?",
      answer:
        "Rental costs in Lagos vary widely based on location and property type. Generally, you can expect to pay more in central areas. Always consider additional costs like maintenance and utilities.",
    },
    {
      question: "Is investing safe?",
      answer:
        "Investing in Lagos real estate can be lucrative but comes with risks. Conduct thorough market research and consult with experts to mitigate potential pitfalls. Understanding local laws is also crucial.",
    },
    {
      question: "How to find agents?",
      answer:
        "You can find real estate agents through online platforms, referrals, or local listings. Look for agents with good reviews and a solid track record. Meeting them in person can also help gauge their expertise.",
    },
    {
      question: "What documents are needed?",
      answer:
        "Essential documents for buying or renting include identification, proof of income, and property title documents. Ensure all paperwork is in order to avoid legal issues. Consulting a lawyer can provide additional security.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Section: Heading and CTA */}
        <div className="lg:pr-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Have Questions About Real Estate?
          </h2>
          <p className="text-gray-600 mb-8">
            Find answers to your most pressing questions about buying, renting,
            and investing in Lagos real estate.
          </p>
          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-4">We're here to help you!</p>
            <button className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800 transition duration-300">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Section: FAQs */}
        <div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border-b pb-4 cursor-pointer"
                onClick={() => toggleFAQ(index)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </h3>
                  <motion.span
                    className="text-gray-600"
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {activeIndex === index ? "▲" : "▼"}
                  </motion.span>
                </div>
                {activeIndex === index && (
                  <motion.p
                    className="text-gray-600 mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
