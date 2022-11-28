import React from "react";
import { Link } from "react-router-dom";

const MyOrderItem = ({ booking }) => {
  const { img, productName, price, _id } = booking;
  return (
    <div className="flex flex-wrap text-center justify-between items-center border border-gray-300 px-10 py-5">
      <div className="sm:w-32 w-full">
        <img src={img} alt="" />
      </div>
      <div className="sm:w-40 w-full">
        <h3 className="font-semibold">{productName}</h3>
      </div>
      <div className="sm:w-24 w-full">
        <p className="text-primary font-bold">${price}</p>
      </div>
      <div className="mx-auto">
        <Link to={`/dashboard/payment/${_id}`}>
          <button className="btn btn-primary btn-sm">Pay Now</button>
        </Link>
      </div>
    </div>
  );
};

export default MyOrderItem;
