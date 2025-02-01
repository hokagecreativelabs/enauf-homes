import React from "react";
import { FaHeart, FaComment } from "react-icons/fa";

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <img src={property.image} alt={property.title} className="w-full h-64 object-cover" />
        <span className="absolute top-2 right-2 bg-black text-white text-sm font-semibold py-1 px-3 rounded">
          {property.propertyType}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-blue-600">{property.title}</h3>
        <p className="text-gray-600">{property.address}</p>
        <p className="text-green-500 font-bold">{property.price}</p>
        <p className="text-gray-500 mt-2">{property.description}</p>
        <p className="text-gray-500 mt-2">
          {property.features.bedrooms} Beds • {property.features.bathrooms} Baths • {property.features.area}
        </p>
        <div className="flex items-center mt-4">
          <img src={property.agent.photo} alt={property.agent.name} className="w-10 h-10 rounded-full mr-3" />
          <span className="text-gray-700">{property.agent.name}</span>
        </div>
        <div className="flex items-center justify-between mt-4 text-gray-400">
          <div className="flex items-center">
            <FaHeart className="mr-1" /> {property.likes}
          </div>
          <div className="flex items-center">
            <FaComment className="mr-1" /> {property.comments}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
