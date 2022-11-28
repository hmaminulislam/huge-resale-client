import React from "react";
import toast from "react-hot-toast";
import image from '../../../assets/images/profile/profile.png'
import { BsFillCheckCircleFill } from "react-icons/bs";

const SellerItem = ({
  currentUser,
  setUserEmail,
  setOpenModal,
  refetch,
}) => {
  const { email, name, userVerify } = currentUser;

  //handle delete buyer & seller
  const handleDelete = (email) => {
    setUserEmail(email);
    setOpenModal(true);
  };

  const handleVerify = (email) => {
    fetch(`http://localhost:5000/sellers/${email}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("verified");
          refetch();
          fetch(`http://localhost:5000/verifyProduct/${email}`, {
            method: "PUT",
          })
            .then((res) => res.json())
            .then((data) => {
              
            });
        }
      });
  };

  return (
    <>
      <div className="border border-gray-300 rounded-md p-5 text-center">
        <img className="w-24 h-24 rounded-full mx-auto" src={image} alt="" />
        <div className="flex items-center justify-center">
          <h3 className="text-xl font-semibold text-center mr-2">{name}</h3>
          {userVerify && (
            <BsFillCheckCircleFill className="text-sky-400 bg-white" />
          )}
        </div>
        <p className="font-semibold text-center mt-1">{email}</p>
        {!userVerify && (
          <button
            onClick={() => handleVerify(email)}
            className="bg-green-600 py-1 px-5 mr-3 rounded-md text-white font-semibold"
          >
            Verify
          </button>
        )}
        <label
          onClick={() => handleDelete(email)}
          htmlFor="delete-modal-confirm"
          className="btn btn-error btn-sm text-center mt-3"
        >
          Delete
        </label>
      </div>
    </>
  );
};

export default SellerItem;
