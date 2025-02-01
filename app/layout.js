"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./globals.css";


export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setLoading(false);
            return 100;
          }
          return prev + 1;
        });
      }, 20); // Simulating loading by incrementing every 20ms
    }
  }, [loading]);

  return (
    <html lang="en">
      <head>
        <title>Enauf Homes</title>
      </head>
      <body>
        {/* Loader Screen */}
        {loading ? (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-white flex items-center justify-center z-50"
            // No opacity change during loading
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0 }}
          >
            <div className="text-center">
              <motion.div
                className="text-2xl font-semibold"
                key={progress}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p>Loading... {progress}%</p>
              </motion.div>
              <motion.div
                className="mt-4 h-2 bg-gray-300 rounded-full overflow-hidden w-64 mx-auto"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1 }}
              >
                <motion.div
                  className="h-full bg-[#FF6700]"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 1 }}
                />
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <>
            <Navbar />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
