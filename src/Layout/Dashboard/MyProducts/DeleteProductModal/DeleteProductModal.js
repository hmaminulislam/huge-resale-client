import React, { useContext } from "react";
import { AuthContext } from "../../../../contexts/AuthProvider/AuthProvider";

const DeleteProductModal = ({ id, refetch, setModalOpen }) => {
  const { user } = useContext(AuthContext);
  //handle confirm delete modal
  const deleteHandle = () => {
    fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
        email: user?.email,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setModalOpen(false)
        console.log(data);
        refetch();
      });
  };
  return (
    <>
      <input
        type="checkbox"
        id="delete-product-confirm"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box text-center">
          <h3 className="font-bold text-lg">Are you sure delete?</h3>
          <div className="mt-6">
            <label htmlFor="delete-product-confirm" className="btn mr-3">
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

export default DeleteProductModal;
