import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import DeleteProductModal from "./DeleteProductModal/DeleteProductModal";
import MyProductItem from "./MyProductItem/MyProductItem";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [ModalOpen, setModalOpen] = useState(true)
  const [id, setId] = useState(null)

  //seller product fetch
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
        <div className="lg:mr-20 px-5 sm:px-10 md:px-20 lg:px-0">
          {products?.map((product) => (
            <MyProductItem
              key={product._id}
              product={product}
              setId={setId}
              setModalOpen={setModalOpen}
            ></MyProductItem>
          ))}
        </div>
      ) : (
        <h3 className="text-2xl font-semibold text-primary">No Book</h3>
      )}
      {/* {ModalOpen && (
        <DeleteProductModal
          id={id}
          refetch={refetch}
          setModalOpen={setModalOpen}
        ></DeleteProductModal>
      )} */}
    </div>
  );
};

export default MyProducts;
