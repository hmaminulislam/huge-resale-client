import React from 'react';

const ProductDetailsModal = ({ productDetails }) => {
  
  return (
    <>
      <input
        type="checkbox"
        id="product-details-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="product-details-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className='flex items-center mb-3'>
            <img className="h-32" src={productDetails?.img} alt="" />
            <h3 className="text-lg font-bold">{productDetails?.name}</h3>
          </div>
          <p className="font-semibold border-b-2 border-gray-200 py-3 text-primary">
            Location:{" "}
            <span className="text-secondary font-normal">
              {productDetails?.location}
            </span>
          </p>
          <p className="font-semibold border-b-2 border-gray-200 py-3 text-primary">
            Brand:{" "}
            <span className="text-secondary font-normal">
              {productDetails?.brand}
            </span>
          </p>
          <p className="font-semibold border-b-2 border-gray-200 py-3 text-primary">
            Condition:{" "}
            <span className="text-secondary font-normal">
              {productDetails?.condition}
            </span>
          </p>
          <p className="font-semibold border-b-2 border-gray-200 py-3 text-primary">
            Resale Price:{" "}
            <span className="text-secondary font-normal">
              ${productDetails?.resalePrice}
            </span>
          </p>
          <p className="font-semibold border-b-2 border-gray-200 py-3 text-primary">
            Orginal Price:{" "}
            <span className="text-secondary font-normal">
              ${productDetails?.orginalPrice}
            </span>
          </p>
          <p className="font-semibold border-b-2 border-gray-200 py-3 text-primary">
            Purchase Date:{" "}
            <span className="text-secondary font-normal">
              {productDetails?.purchaseDate}
            </span>
          </p>
          <div className="text-center bg-primary my-3 py-2">
            <h4 className="text-xl font-semibold text-white">
              {productDetails?.sellerName}
            </h4>
            <p className="text-white">+{productDetails?.mobile}</p>
          </div>
          <div>
            <p className="text-primary font-semibold">Description</p>
            <p className="py-4">{productDetails?.description}</p>
          </div>
          <p className='text-center text-xs'>Publish: {productDetails?.publishDate}</p>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsModal;