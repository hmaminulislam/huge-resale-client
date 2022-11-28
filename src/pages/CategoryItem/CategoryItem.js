import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const CategoryItem = ({ product, setProductDetails, setModal }) => {
  const { user } = useContext(AuthContext);
  const { img, resalePrice, name, location, sellerName, userVerify } = product;

  //handle book and quick view
  const handleClick = (product) => {
    setProductDetails(product);
    setModal(true);
  };

  //handle wishlist
  const handleWishlist = (product) => {
    const wishlist = {
      productId: product._id,
      name,
      email: user?.email,
      img: product.img,
      price: product.resalePrice,
    };
    fetch(`http://localhost:5000/wishlists`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(wishlist),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Add wishlist");
        }
        if (data.alreadyAddWishlist) {
          toast.error("Already added wishlist");
        }
      });
  };

  return (
    <div className="border border-gray-300 p-5 text-center relative">
      <img className="h-36 mb-5" src={img} alt="" />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-primary mt-2 font-semibold">${resalePrice}</p>
      <div className="flex items-center justify-center">
        <h3 className="font-semibold text-center mr-2">{sellerName}</h3>
        {userVerify && (
          <BsFillCheckCircleFill className="text-sky-400 bg-white" />
        )}
      </div>
      <p className="text-secondary mb-3 font-semibold">{location}</p>
      <label
        onClick={() => handleClick(product)}
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
        <button onClick={() => handleWishlist(product)}>
          <AiOutlineHeart className="text-primary w-6 h-6 cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default CategoryItem;
