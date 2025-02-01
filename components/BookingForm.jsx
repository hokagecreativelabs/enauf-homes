"use client";

import { useState } from "react";
import { Range } from "react-range";

const RealEstateForm = () => {
  const [activeTab, setActiveTab] = useState("All Purpose");
  const [priceRange, setPriceRange] = useState([7000, 38500]);

  const handleTabChange = (tab) => setActiveTab(tab);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full">
      <div className="flex justify-center gap-4 mb-6">
        {["All Purpose", "Rent", "Sell"].map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`py-2 px-4 rounded-full font-semibold ${activeTab === tab ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"} transition duration-300 ease-in-out`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input type="text" placeholder="Keywords" className="border border-gray-300 rounded-lg px-4 py-2 w-full" />
        <select className="border border-gray-300 rounded-lg px-4 py-2 w-full" defaultValue="">
          <option value="" disabled>-- Property Type --</option>
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
          <option value="land">Land</option>
        </select>
        <input type="text" placeholder="Area" className="border border-gray-300 rounded-lg px-4 py-2 w-full" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <input type="text" placeholder="Property ID" className="border border-gray-300 rounded-lg px-4 py-2 w-full" />
        <div className="flex flex-col">
          <label className="text-gray-700 mb-2">Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
          <Range
            step={1000}
            min={7000}
            max={38500}
            values={priceRange}
            onChange={setPriceRange}
            renderTrack={({ props, children }) => {
                const { key, ...restProps } = props; // Extract 'key' from props
                return (
                <div {...restProps} key={key} className="h-2 bg-gray-300 rounded-full relative">
                    {children}
                </div>
                );
            }}
            renderThumb={({ props }) => {
                const { key, ...restProps } = props; // Extract 'key' from props
                return <div {...restProps} key={key} className="w-5 h-5 bg-blue-500 rounded-full cursor-pointer" />;
            }}
            />

        </div>
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg mt-6 w-full">Search</button>
    </div>
  );
};

export default RealEstateForm;
