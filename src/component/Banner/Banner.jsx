import React from "react";
import Airpods from "../../assets/compare_airpods_max 2 1.png";

const Banner = () => {
  return (
    <div className="relative bg-black h-screen flex items-center justify-between px-10">
      {/* Background gradient circle on the left */}
      <div className="absolute inset-0 flex justify-start items-center">
        <div className="bg-gradient-to-br from-yellow-600 to-transparent rounded-full lg:h-96 lg:w-96 md:h-60 md:w-60 blur-3xl brightness-50"></div>
      </div>

      {/* Left Side - Text and Buttons */}
      <div className="relative z-10 lg:max-w-lg text-left">
        <div className="flex items-center">
          <p className="text-yellow-500 text-sm uppercase relative pr-2">
            Latest Air Pods{" "}
          </p>
          <div className="w-8 h-[0px] border border-[#fbb03b] relative"></div>
        </div>

        <h1 className="text-white text-5xl font-bold leading-tight">
          Air Pods Max White
        </h1>
        <p className="text-gray-300 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-8 flex space-x-4">
          <a
            href="#shop-now"
            className="bg-yellow-500 text-white font-normal font-sans py-3 px-6 rounded-lg hover:bg-yellow-600 transition duration-300"
          >
            Read More
          </a>
          <a
            href="#learn-more"
            className="border-2 border-gray-400 text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition duration-300"
          >
            Buy Now
          </a>
        </div>
      </div>

      {/* Right Side - Product Image */}

      <div className="relative z-10">
        <img
          src={Airpods}
          alt="Product"
          className="lg:h-[500px] lg:w-[500px] md:w-[400px]"
        />
      </div>
    </div>
  );
};

export default Banner;
