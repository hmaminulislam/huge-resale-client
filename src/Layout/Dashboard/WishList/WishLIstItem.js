import React from 'react';
import toast from 'react-hot-toast';
import { RiDeleteBin6Line } from "react-icons/ri";

const WishLIstItem = ({wishlist}) => {
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/wishlists/${id}`, {
      method: 'DELETE'
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Delete successful");
        }
      });
  }
    const {img, price, name, _id} = wishlist
    return (
      <div className="flex justify-between items-center border border-gray-300 px-10 py-5">
        <div className="w-32">
          <img src={img} alt="" />
        </div>
        <div className="w-40">
          <h3 className="font-semibold">{name}</h3>
        </div>
        <div className="w-24">
          <p className="text-primary font-bold">${price}</p>
        </div>
        <div>
          <button
            onClick={() => handleDelete(_id)}
            className="bg-red-500 py-2 px-2 rounded-full"
          >
            <RiDeleteBin6Line className="text-3xl text-white" />
          </button>
        </div>
        <div>
          <button className="btn btn-primary btn-sm">Pay Now</button>
        </div>
      </div>
    );
};

export default WishLIstItem;