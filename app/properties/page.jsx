"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaThLarge, FaList } from "react-icons/fa";
import properties from "../../data/properties.json";
import PropertyCard from "@/components/PrpertyCard";
import RealEstateForm from "@/components/BookingForm";
import Link from "next/link"; // Import Link

export default function PropertiesPage() {
  const [sortOrder, setSortOrder] = useState("lowToHigh");
  const [layout, setLayout] = useState("grid");

  const sortedProperties = [...properties].sort((a, b) => {
    const priceA = parseFloat(a.price.replace(/[$,]/g, ""));
    const priceB = parseFloat(b.price.replace(/[$,]/g, ""));
    return sortOrder === "lowToHigh" ? priceA - priceB : priceB - priceA;
  });

  return (
    <div>
      {/* Booking Form */}
      <div className="max-w-6xl mx-auto py-6 px-4">
        <RealEstateForm />
      </div>
      
      {/* Filters */}
      <div className="max-w-6xl mx-auto py-6 px-4 flex justify-between items-center">
        <div>
          <label className="mr-2 font-semibold">Sort by Price:</label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
        </div>
        <div className="flex gap-4">
          <button onClick={() => setLayout("grid")} className={layout === "grid" ? "text-[#FF6700]" : "text-gray-600"}>
            <FaThLarge size={24} />
          </button>
          <button onClick={() => setLayout("list")} className={layout === "list" ? "text-[#FF6700]" : "text-gray-600"}>
            <FaList size={24} />
          </button>
        </div>
      </div>

      {/* Property Listings */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className={`max-w-9xl mx-auto px-4 ${layout === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" : "space-y-6"}`}
      >
        {sortedProperties.map((property) => (
          <Link key={property.id} href={`/properties/${property.id}`}> {/* Remove the extra <a> tag */}
            <PropertyCard property={property} layout={layout} />
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
