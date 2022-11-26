import { format } from 'date-fns';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const AddProduct = () => {
  const [img, setImg] = useState(null)
  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target;
    const name = form.productName.value;
    const resalePrice = form.resalePrice.value;
    const orginalPrice = form.orginalPrice.value;
    const sellerName = form.sellerName.value;
    const brand = form.brand.value;
    const condition = form.condition.value;
    const mobile = form.mobile.value;
    const location = form.location.value;
    const purchaseDate = form.purchaseDate.value;
    const description = form.description.value;
    const image = form.img.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const publishDate = format(new Date(), 'PP')
    // console.log(publishDate, img, description, purchaseDate, location, mobile, condition, brand, sellerName, orginalPrice, resalePrice, name)
    const productInfo = {
      img,
      name,
      sellerName,
      resalePrice,
      orginalPrice,
      brand,
      condition,
      mobile,
      location,
      purchaseDate,
      description,
      publishDate
    }
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGE_BB_TOKEN}`;
    fetch(url, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(imageData => {
      if (imageData.success) {
        const image = imageData.data.url;
        setImg(image);
        if(img) {
          fetch(`http://localhost:5000/products`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(productInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                toast.success("Product add successful");
                form.reset();
              }
            });
        }
      }
    })
  }
    return (
      <div>
        <h2 className="text-2xl font-semibold text-center mb-3">
          Add a product
        </h2>
        <div className="flex justify-center items-center bg-primary w-full sm:w-8/12 md:w-7/12 lg:w-6/12 mx-auto">
          <div className="w-full px-10 mt-10 mb-10">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="productName"
                  placeholder="Product Name"
                  className="input w-full"
                  required
                />
              </div>
              <div className="grid gap-3 grid-cols-2">
                <div className="">
                  <select name="brand" className="select box-border w-full">
                    <option value="hp">Hp</option>
                    <option value="asus">Asus</option>
                    <option value="lenovo">lenovo</option>
                    <option value="others">others</option>
                  </select>
                </div>
                <div className="">
                  <select name="condition" className="select box-border w-full">
                    <option selected value="" disabled>
                      Condition
                    </option>
                    <option value="good">Good</option>
                    <option value="fair">Fair</option>
                    <option value="excellent">Excellent</option>
                  </select>
                </div>
                <div className="">
                  <input
                    type="number"
                    name="resalePrice"
                    placeholder="Resale Price"
                    className="input w-full"
                    required
                  />
                </div>
                <div className="">
                  <input
                    type="text"
                    name="sellerName"
                    placeholder="Seller Name"
                    className="input w-full"
                    required
                  />
                </div>
                <div className="">
                  <input
                    type="number"
                    name="orginalPrice"
                    placeholder="Orginal Price"
                    className="input w-full"
                    required
                  />
                </div>
                <div className="">
                  <input
                    type="text"
                    name="location"
                    placeholder="Your Location"
                    className="input w-full"
                    required
                  />
                </div>
                <div className="">
                  <input
                    type="date"
                    name="purchaseDate"
                    placeholder="Purchase Date"
                    className="input w-full"
                    required
                  />
                </div>
                <div className="">
                  <input
                    type="text"
                    name="mobile"
                    placeholder="Your Phone"
                    className="input w-full"
                    required
                  />
                </div>
              </div>
              <div className="mb-6 mt-3">
                <input
                  name="img"
                  title="Image"
                  type="file"
                  accept="image/*"
                  className="file-input w-full"
                />
              </div>
              <div className="mb-6">
                <textarea
                  name="description"
                  className="textarea w-full"
                  placeholder="Description"
                ></textarea>
              </div>
              <div className="">
                <button className="btn btn-secondary w-full">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default AddProduct;