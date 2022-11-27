import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import MyProductItem from './MyProductItem/MyProductItem';

const MyProducts = () => {
    const {user} = useContext(AuthContext)

    const { data: products = [], refetch } = useQuery({
      queryKey: [user?.email],
      queryFn: async () => {
        const res = await fetch(
          `http://localhost:5000/products?email=${user?.email}`,
          {
            headers: {
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        const data = await res.json();
        return data;
      },
    });

    return (
      <div>
        <h2 className="text-3xl font-semibold mb-5 mt-10">My Products</h2>
        {products ? (
          <div className="mr-20">
            {products?.map((product) => (
              <MyProductItem
                key={product._id}
                product={product}
              ></MyProductItem>
            ))}
          </div>
        ) : (
          <h3 className="text-2xl font-semibold text-primary">No Book</h3>
        )}
      </div>
    );
};

export default MyProducts;