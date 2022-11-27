import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import DeleteModal from "../DeleteModal/DeleteModal";
import SellerItem from "./BuyerAndSellerItem";

const AllSellers = () => {
   const [userEmail, setUserEmail] = useState(null);
   const [openModal, setOpenModal] = useState(true);
  const { user } = useContext(AuthContext);

  const { data: sellers = [], refetch } = useQuery({
    queryKey: [user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/sellers`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
          email: user?.email
        },
      });
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-5 mt-10">All Sellers</h2>
      {sellers ? (
        <div className="mr-20">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {sellers?.map((currentUser, index) => (
                  <SellerItem
                    key={currentUser._id}
                    currentUser={currentUser}
                    index={index}
                    setUserEmail={setUserEmail}
                    setOpenModal={setOpenModal}
                  ></SellerItem>
                ))}
              </tbody>
            </table>
          </div>
          {openModal && (
            <DeleteModal
              userEmail={userEmail}
              setOpenModal={setOpenModal}
              refetch={refetch}
            ></DeleteModal>
          )}
        </div>
      ) : (
        <h3 className="text-2xl font-semibold text-primary">No Seller</h3>
      )}
    </div>
  );
};

export default AllSellers;
