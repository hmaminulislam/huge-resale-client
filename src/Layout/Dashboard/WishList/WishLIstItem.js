import React, { useContext } from "react";
import toast from "react-hot-toast";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const WishLIstItem = ({ wishlist, refetch }) => {
  const { user } = useContext(AuthContext);
  const { img, price, name, _id, productId } = wishlist;

  //delete wishlist handle button
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/wishlists/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
        email: user?.email,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          refetch();
          toast.success("Delete successful");
        }
      });
  };

  return (
    <div className="flex flex-wrap text-center justify-between items-center border border-gray-300 px-10 py-5">
      <div className="sm:w-32 w-full">
        <img src={img} alt="" />
      </div>
      <div className="sm:w-40 w-full">
        <h3 className="font-semibold">{name}</h3>
      </div>
      <div className="sm:w-24 w-full">
        <p className="text-primary font-bold">${price}</p>
      </div>
      <div className="mx-auto">
        <button
          onClick={() => handleDelete(_id)}
          className="bg-red-500 py-2 px-2 rounded-full"
        >
          <RiDeleteBin6Line className="text-3xl text-white" />
        </button>
      </div>
      <div className="mx-auto">
        <Link to={`/dashboard/payment/${productId}`}>
          <button className="btn btn-primary btn-sm">Pay Now</button>
        </Link>
      </div>
    </div>
  );
};

export default WishLIstItem;
