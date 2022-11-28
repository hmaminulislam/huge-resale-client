import React from "react";
import { GrDeliver } from "react-icons/gr";
import { BiDollarCircle, BiSupport } from "react-icons/bi";
import { BsEnvelope } from "react-icons/bs";

const CompanyInfo = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 mt-14">
      <div className="flex items-center border border-gray-300 p-5">
        <GrDeliver className="text-4xl mr-3" />
        <div>
          <h3 className="text-xl font-semibold">Free Delivary</h3>
          <p>Free delivary for orders over $100</p>
        </div>
      </div>
      <div className="flex items-center border border-gray-300 p-5">
        <BiDollarCircle className="text-4xl mr-3" />
        <div>
          <h3 className="text-xl font-semibold">Payment</h3>
          <p>10% charge per order</p>
        </div>
      </div>
      <div className="flex items-center border border-gray-300 p-5">
        <BiSupport className="text-4xl mr-3" />
        <div>
          <h3 className="text-xl font-semibold">Support</h3>
          <p>24/7 hours</p>
        </div>
      </div>
      <div className="flex items-center border border-gray-300 p-5">
        <BsEnvelope className="text-4xl mr-3" />
        <div>
          <h3 className="text-xl font-semibold">Newslleter</h3>
          <p>Free shipping and others info</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
