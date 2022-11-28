import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import CategoryItem from '../../CategoryItem/CategoryItem';
import ProductBookModal from '../../CategoryItem/ProductBookModal/ProductBookModal';
import ProductDetailsModal from '../../CategoryItem/ProductDetailsModal/ProductDetailsModal';

const Advertise = () => {
    // const [products, setProducts] = useState([])
    const [productDetails, setProductDetails] = useState(null);
    const [modal, setModal] = useState(true);
    const { data: products = [], refetch } = useQuery({
      queryKey: ['products'],
      queryFn: async () => {
        const res = await fetch(`http://localhost:5000/advertise`);
        const data = await res.json();
        return data;
      },
    });

    return (
      <>
        {products.length > 0 && (
          <div className="mb-20">
            <h3 className="text-3xl text-primary text-center font-semibold mb-10">
              Advertise
            </h3>
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
              <ProductBookModal
                productDetails={productDetails}
                setModal={setModal}
                refetch={refetch}
              ></ProductBookModal>
            )}
          </div>
        )}
      </>
    );
};

export default Advertise;