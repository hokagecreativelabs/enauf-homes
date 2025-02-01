import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Lead Agent",
      description: "Passionate about helping clients find their dream homes.",
      image: "https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg", // Add your image path here
      icons: [FaLinkedin, FaTwitter, FaEnvelope],
    },
    {
      name: "Jane Smith",
      role: "Sales Manager",
      description: "Expert in market trends and property evaluations.",
      image: "https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg", // Add your image path here
      icons: [FaLinkedin, FaTwitter, FaEnvelope],
    },
    {
      name: "Michael Brown",
      role: "Marketing Director",
      description:
        "Crafting strategies to connect buyers with their ideal properties.",
      image: "https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg", // Add your image path here
      icons: [FaLinkedin, FaTwitter, FaEnvelope],
    },
    {
      name: "Emily White",
      role: "Client Support",
      description: "Here to assist you with any inquiries or needs.",
      image: "https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg", // Add your image path here
      icons: [FaLinkedin, FaTwitter, FaEnvelope],
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
        Our Team
      </h2>
      <p className="text-gray-600 text-center mb-12">
        Meet our dedicated team of real estate professionals.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="text-center bg-white shadow-md rounded-lg p-6 border"
          >
            <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="bg-gray-200 w-full h-full"></div> // Fallback placeholder
              )}
            </div>
            <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
            <p className="text-gray-600 mb-4">{member.role}</p>
            <p className="text-gray-500 text-sm">{member.description}</p>
            <div className="flex justify-center gap-4 mt-4">
              {member.icons.map((Icon, idx) => (
                <Icon
                  key={idx}
                  className="text-gray-600 hover:text-gray-800 transition duration-200"
                  size={20}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-2">We're hiring!</h3>
        <p className="text-gray-600 mb-4">
          Join our team and make a difference.
        </p>
        <button className="bg-white border border-gray-800 text-black py-2 px-6 rounded-md hover:bg-gray-100 transition duration-300">
          Open positions
        </button>
      </div>
    </div>
  );
}
