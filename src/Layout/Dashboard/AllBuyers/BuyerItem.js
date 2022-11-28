import React from 'react';
import image from "../../../assets/images/profile/profile.png";

const BuyerItem = ({
  currentUser,
  setUserEmail,
  setOpenModal,
  refetch,
}) => {
     const { email, name} = currentUser;

     //handle delete buyer & seller
     const handleDelete = (email) => {
       setUserEmail(email);
       setOpenModal(true);
       refetch()
     };

  return (
    <>
      <div className="border border-gray-300 rounded-md p-5 text-center">
        <img className="w-24 h-24 rounded-full mx-auto" src={image} alt="" />
          <h3 className="text-xl font-semibold text-center mr-2">{name}</h3>
        <p className="font-semibold text-center mt-1">{email}</p>
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

export default BuyerItem;