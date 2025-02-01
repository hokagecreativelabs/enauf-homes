"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import properties from "../../../data/properties.json";
import { FaHeart, FaShareAlt, FaBath, FaBed, FaRulerCombined } from "react-icons/fa";
// import Map from "@/components/Map";
import { use } from "react"; // Import use() for unwrapping the promise
import Link from "next/link";

export default function PropertyDetails({ params }) {
  const router = useRouter();
  const { id } = use(params); // Unwrap the params object using use()
  const [property, setProperty] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const selectedProperty = properties.find((prop) => prop.id === parseInt(id));
    if (!selectedProperty) router.push("/properties");
    setProperty(selectedProperty);
  }, [id, router]);

  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSubmitMessage = (e) => {
    e.preventDefault();
    alert(`Message sent: ${message}`);
    setMessage(""); // Reset message after submission
  };

  if (!property) return <p>Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Main Property Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Property Images */}
        <div className="w-full">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Agent Info and Contact Form */}
        <div className="flex flex-col justify-between">
          <div className="flex items-center gap-4 mb-6">
            <img
              src={property.agent.photo}
              alt={property.agent.name}
              className="w-20 h-20 rounded-full shadow-md"
            />
            <div>
              <p className="text-lg font-semibold">{property.agent.name}</p>
              <p className="text-gray-600">Real Estate Agent</p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmitMessage} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <label htmlFor="message" className="block text-gray-800 font-semibold mb-2">Send a Message</label>
            <textarea
              id="message"
              value={message}
              onChange={handleMessageChange}
              placeholder="Write your message here..."
              className="w-full p-2 rounded-md border border-gray-300 mb-4"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Property Info */}
      <div className="mt-8">
        <h1 className="text-3xl font-bold">{property.title}</h1>
        <p className="text-gray-600">{property.address}</p>
        <p className="text-2xl font-semibold text-blue-600 mt-2">{property.price}</p>
        <div className="flex items-center gap-4 mt-4">
          <span className="flex items-center gap-2 text-gray-700"><FaBed /> {property.features.bedrooms} Beds</span>
          <span className="flex items-center gap-2 text-gray-700"><FaBath /> {property.features.bathrooms} Baths</span>
          <span className="flex items-center gap-2 text-gray-700"><FaRulerCombined /> {property.features.area}</span>
        </div>
        <p className="mt-4 text-gray-700">{property.description}</p>

        {/* Social & Actions */}
        {/* <div className="flex items-center gap-4 mt-6">
          <button className="text-red-500"><FaHeart /> {property.likes}</button>
          <button className="text-blue-500"><FaShareAlt /> Share</button>
        </div> */}
      </div>

      {/* Map Feature */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Location</h2>
        {/* <Map address={property.address} /> */}
      </div>

      {/* Other Searches / Related Listings */}
      <div className="mt-12">
  <h2 className="text-2xl font-bold mb-4">Other Properties You May Like</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {properties
      .filter((prop) => prop.id !== property.id) // Filter out the current property
      .slice(0, 6) // Show a limited number of other properties
      .map((otherProperty) => (
        <Link legacyBehavior key={otherProperty.id} href={`/properties/${otherProperty.id}`} passHref>
          <a>
            <div className="border rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300">
              <img
                src={otherProperty.image}
                alt={otherProperty.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{otherProperty.title}</h3>
                <p className="text-gray-600">{otherProperty.price}</p>
                <p className="text-blue-600 hover:underline">View Details</p>
              </div>
            </div>
          </a>
        </Link>
      ))}
  </div>
</div>

    </div>
  );
}
