export default function ParallaxSection() {
    return (
      <div
        className="h-[40vh] bg-center bg-cover bg-no-repeat bg-body-img bg-fixed flex flex-col items-center justify-center text-center px-4"
      >
        <h2 className="text-4xl font-bold text-white md:text-6xl">
          Stay Updated on Properties
        </h2>
        <p className="text-lg text-white mt-4 mb-8 max-w-xl">
          Sign up for property alerts or schedule a consultation with our expert agents today!
        </p>
        <div className="flex gap-4">
          <button className="bg-[#FF6700] text-white py-2 px-6 rounded-md hover:bg-[#c27803] transition duration-300">
            Learn More
          </button>
          <button className="bg-white text-black py-2 px-6 rounded-md hover:bg-gray-200 transition duration-300">
            Sign Up
          </button>
        </div>
      </div>
    );
  }
  