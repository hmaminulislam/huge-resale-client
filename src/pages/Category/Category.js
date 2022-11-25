import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryItem from '../shared/CategoryItem/CategoryItem';
import ProductDetailsModal from '../shared/ProductDetailsModal/ProductDetailsModal';


const Category = () => {
    const products = useLoaderData();
    const [productDetails, setProductDetails] = useState(null)
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
            ></CategoryItem>
          ))}
        </div>
        <ProductDetailsModal
          productDetails={productDetails}
        ></ProductDetailsModal>
      </div>
    );
};

export default Category;