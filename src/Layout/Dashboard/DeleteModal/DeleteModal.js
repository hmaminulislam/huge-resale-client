import React from 'react';
import toast from 'react-hot-toast';

const DeleteModal = ({ userEmail, setOpenModal, refetch }) => {
  const deleteHandle = () => {
    fetch(`http://localhost:5000/users/${userEmail}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          refetch()
          toast.success("Delete successful");
          setOpenModal(false);
        }
      });
  };
  return (
    <>
      <input
        type="checkbox"
        id="delete-modal-confirm"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box text-center">
          <h3 className="font-bold text-lg">Are you sure delete?</h3>
          <p className="py-4 text-primary text-semibold">{userEmail}</p>
          <div className="mt-3">
            <label htmlFor="delete-modal-confirm" className="btn mr-3">
              Cencel
            </label>
            <button onClick={deleteHandle} className="btn btn-error">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;