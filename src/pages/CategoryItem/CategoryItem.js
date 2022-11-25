import React from "react";
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";

const CategoryItem = ({ product, setProductDetails, setModal }) => {
  const { img, resalePrice, name, location, } = product;
  const handleClick = (product) => {
    setProductDetails(product)
    setModal(true)
  };
  return (
    <div className="border border-gray-300 p-5 text-center relative">
      <img className="h-36 mb-5" src={img} alt="" />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-primary mt-2 font-semibold">${resalePrice}</p>
      <p className="text-secondary mt-2 mb-3 font-semibold">{location}</p>
      <label onClick={() => handleClick(product)}
        htmlFor="product-book-modal"
        className="bg-primary py-2 cursor-pointer px-4 rounded-full text-white font-semibold text-sm"
      >
          Book Now
      </label>
      <div className="absolute top-12 right-2">
        <label htmlFor="product-details-modal">
          <AiOutlineEye
            onClick={() => handleClick(product)}
            className="text-primary w-6 h-6 cursor-pointer mb-2"
          />
        </label>
        <AiOutlineHeart className="text-primary w-6 h-6 cursor-pointer" />
      </div>
    </div>
  );
};

export default CategoryItem;
