import React, { useEffect, useRef, useState } from "react";
import {
  FiChevronLeft,
  FiArrowRight,
  FiShoppingCart,
  FiSearch,
} from "react-icons/fi";

const ProductLineWithButtons = () => {
  const scrollContainerRef = useRef(null);

  // Function to scroll left
  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -300, // Adjust this value based on how far you want it to scroll
      behavior: "smooth",
    });
  };

  // Function to scroll right
  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 300, // Adjust this value based on how far you want it to scroll
      behavior: "smooth",
    });
  };

  const [items, setProducts] = useState([]);
  useEffect(() => {
    fetch("/public/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const products = items.slice(0, 12);

  return (
    <div className="relative container ml-auto py-10">
      {/* Scrollable Product Line */}
      <section className="mb-10">
        <div className="flex items-center">
          <p className="text-[#FBB03B] text-2xl  relative pr-2">
            Here is Our Top Listed{" "}
          </p>
          <div className="w-8 h-[0px] border border-[#fbb03b] relative"></div>
        </div>
        <h2 className="text-[#333333] text-[64px] font-medium font-['DM Sans'] leading-[76.80px] mb-10">
          New Arrival Products
        </h2>
        <div
          className="overflow-x-auto snap-x snap-mandatory no-scrollbar flex gap-4 pb-4 lg:pb-0"
          ref={scrollContainerRef}
        >
          {products.map((product) => (
            <div className="group">
              <div
                key={product.id}
                className="snap-center bg-white rounded-lg border p-4 basis-[calc(20%-1rem)] lg:basis-1/5 md:basis-1/3 sm:basis-1/2 min-w-0  flex-shrink-0 group-hover:shadow-2xl transition duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-auto h-auto object-cover rounded-lg mb-4"
                />
                {/* <p className="text-yellow-500 font-bold mt-2">
                  {product.price}
                </p> */}
                <div className="flex items-center space-x-12">
                  <button className="items-center flex border-2 bg-gray text-gray-800 font-semibold py-2 rounded-3xl group-hover:bg-yellow-600 group-hover:text-white transition duration-300 p-5">
                    <FiShoppingCart className="mr-2 relative" />
                    <span className="relative">Cart</span>
                  </button>
                  <a
                    href="#/"
                    className="relative bg-black text-white p-2 rounded-[50px] group-hover:bg-yellow-600"
                  >
                    <FiSearch></FiSearch>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Previous and Next Buttons */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex space-x-2">
          {/* <button
            onClick={scrollLeft}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-2 rounded-full shadow-lg"
          >
            <FiChevronLeft className="w-6 h-6" />
          </button> */}
          <button
            onClick={scrollRight}
            className=" border-2 border-black p-2 rounded-full hover:bg-black hover:transition"
          >
            <FiArrowRight className="w-6 h-6 hover:text-white"></FiArrowRight>
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProductLineWithButtons;
