import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const ProductBookModal = ({ productDetails, setModal, refetch }) => {
  const { user } = useContext(AuthContext);

  //handle submit product book
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = user?.displayName;
    const productName = productDetails?.name;
    const email = user?.email;
    const price = productDetails?.resalePrice;
    const number = form.number.value;
    const meetLocation = form.meetLocation.value;
    const productId = productDetails?._id;
    const img = productDetails.img;
    const booking = {
      userName,
      productName,
      productId,
      img,
      email,
      price,
      number,
      meetLocation,
    };
    fetch(`http://localhost:5000/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Booking successful");
          setModal(false);
          fetch(`http://localhost:5000/advertise/${productDetails?._id}`, {
            method: "PUT",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.modifiedCount) {
                refetch()
              }
            });
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="product-book-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="product-book-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-center text-primary">
            {productDetails?.name}
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                defaultValue={user?.displayName}
                readOnly
                placeholder="Type here"
                className="input input-bordered w-full"
                name="name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name">Your Email</label>
              <input
                type="email"
                defaultValue={user?.email}
                readOnly
                placeholder="Type here"
                className="input input-bordered w-full"
                name="email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name">Product Price</label>
              <input
                type="text"
                defaultValue={productDetails?.resalePrice}
                readOnly
                placeholder="Type here"
                className="input input-bordered w-full"
                name="price"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name">Your Number</label>
              <input
                type="tel"
                placeholder="your number"
                className="input input-bordered w-full"
                name="number"
                required
              />
            </div>
            <div>
              <label htmlFor="name">Meet location</label>
              <div>
                <select
                  name="meetLocation"
                  className="select box-border input-bordered w-full"
                >
                  <option value="dhaka">Dhaka</option>
                  <option value="chittagong">Chittagong</option>
                  <option value="Khulna">Khulna</option>
                  <option value="sylhet">Sylhet</option>
                  <option value="barisal">Barisal</option>
                  <option value="rajshahi">Rajshahi</option>
                  <option value="rangpur">Rangpur</option>
                  <option value="mymensingh">Mymensingh</option>
                </select>
              </div>
              <button className="btn btn-primary mr-3 mt-5">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductBookModal;
