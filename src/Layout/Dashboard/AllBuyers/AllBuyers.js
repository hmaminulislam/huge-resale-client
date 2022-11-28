import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import DeleteModal from "../DeleteModal/DeleteModal";
import BuyerItem from "./BuyerItem";

const AllBuyers = () => {
  const [userEmail, setUserEmail] = useState(null);
  const [openModal, setOpenModal] = useState(true);
  const { user } = useContext(AuthContext);

  //fetch all buyers
  const { data: buyers = [], refetch } = useQuery({
    queryKey: [user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/buyers`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
          email: user?.email,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-5 mt-10">All Buyers</h2>
      {buyers && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {buyers?.map((currentUser, index) => (
            <BuyerItem
              key={currentUser._id}
              currentUser={currentUser}
              index={index}
              setUserEmail={setUserEmail}
              setOpenModal={setOpenModal}
              refetch={refetch}
            ></BuyerItem>
          ))}
          {openModal && (
            <DeleteModal
              userEmail={userEmail}
              setOpenModal={setOpenModal}
              refetch={refetch}
            ></DeleteModal>
          )}
        </div>
      )}
      {buyers.length === 0 && (
        <h3 className="text-2xl font-semibold text-primary">No Seller</h3>
      )}
    </div>
  );
};

export default AllBuyers;
