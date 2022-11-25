import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryItem from '../CategoryItem/CategoryItem';
import ProductBookModal from '../CategoryItem/ProductBookModal/ProductBookModal';
import ProductDetailsModal from '../CategoryItem/ProductDetailsModal/ProductDetailsModal';


const Category = () => {
    const products = useLoaderData();
    const [productDetails, setProductDetails] = useState(null)
    const [modal, setModal] = useState(true)
    const categoryName = products[0].brand ;
    return (
      <div className="w-[1200px] mx-auto mt-10">
        <h2 className="text-3xl font-semibold mb-6 border-l-4 border-red-500 pl-3 py-2 capitalize text-white bg-slate-400">
          {categoryName}
        </h2>
        <div className="grid gap-10 grid-cols-4">
          {products.map((product) => (
            <CategoryItem
              key={product._id}
              product={product}
              setProductDetails={setProductDetails}
              setModal={setModal}
            ></CategoryItem>
          ))}
        </div>
        <ProductDetailsModal
          productDetails={productDetails}
        ></ProductDetailsModal>
        {modal && (
          <ProductBookModal productDetails={productDetails} setModal={setModal}></ProductBookModal>
        )}
      </div>
    );
};

export default Category;