import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../../contexts/AuthProvider/AuthProvider";

const MyProductItem = ({ product, setModalOpen }) => {
  const {user} = useContext(AuthContext)
  const [sold, setSold] = useState(null);
  const { img, name, resalePrice, _id } = product;

  //seller product sold fetch
  useEffect( () => {
    const fetchSold = async()=> {
      const res = await axios.get(`http://localhost:5000/bookings/${_id}`);
      setSold(res.data)
    }
    fetchSold()
  }, [_id])

 const handleDelete = (id) => {
  console.log(id)
   fetch(`http://localhost:5000/products/${id}`, {
     method: "GET",
     headers: {
       authorization: `bearer ${localStorage.getItem("accessToken")}`,
       email: user?.email,
     },
   })
     .then((res) => res.json())
     .then((data) => {
       setModalOpen(false)
       console.log(data);
       
     });
 };

    const handleAdvertise = (id) => {
      fetch(`http://localhost:5000/products/${id}`, {
      method: "PUT",
   })
     .then((res) => res.json())
     .then((data) => {
      if (data.modifiedCount) {
        toast.success("Add Advertise");
      } console.log(data);
     });
    }

  return (
    <div className="flex flex-wrap text-center justify-between items-center border border-gray-300 px-10 py-5">
      <div className="sm:w-32 w-full">
        <img src={img} alt="" />
      </div>
      <div className="sm:w-40 w-full">
        <h3 className="font-semibold">{name}</h3>
      </div>
      <div className="sm:w-24 w-full">
        <p className="text-primary font-bold">${resalePrice}</p>
      </div>
      <div className="sm:w-24 w-full">
        {sold ? (
          <p className="text-primary font-bold">Sold</p>
        ) : (
          <p className="text-primary font-bold">Avialable</p>
        )}
      </div>
      <div>
        <label
          htmlFor="delete-product-confirm"
          className="btn btn-error btn-sm"
          onClick={() => handleDelete(_id)}
        >
          Delete
        </label>
      </div>
      <div>
        <button
          disabled={sold}
          onClick={() => handleAdvertise(_id)}
          className="btn btn-primary btn-sm"
        >
          {sold ? "Booked" : "Advertise"}
        </button>
      </div>
    </div>
  );
};

export default MyProductItem;
