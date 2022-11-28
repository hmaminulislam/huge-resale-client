import React from "react";
import { Link } from "react-router-dom";

const MyOrderItem = ({ booking }) => {
  const { img, productName, price, _id } = booking;
  return (
    <div className="flex justify-between items-center border border-gray-300 px-10 py-5">
      <div className="w-32">
        <img src={img} alt="" />
      </div>
      <div className="w-40">
        <h3 className="font-semibold">{productName}</h3>
      </div>
      <div className="w-24">
        <p className="text-primary font-bold">${price}</p>
      </div>
      <div>
        <Link to={`/dashboard/payment/${_id}`}>
          <button className="btn btn-primary btn-sm">Pay Now</button>
        </Link>
      </div>
    </div>
  );
};

export default MyOrderItem;
