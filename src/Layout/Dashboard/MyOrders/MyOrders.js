import { useQuery } from "@tanstack/react-query";
import React, { useContext} from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import MyOrderItem from "./MyOrderItem/MyOrderItem";

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const { data: bookings = [], refetch } = useQuery({
    queryKey: [user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/bookings?email=${user?.email}`,
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
      <h2 className="text-3xl font-semibold mb-5 mt-10">My orders</h2>
      {bookings && (
        <div className="mr-20">
          {bookings?.map((booking) => (
            <MyOrderItem key={booking._id} booking={booking}></MyOrderItem>
          ))}
        </div>
      )}
      {bookings.length === 0 && (
        <h3 className="text-2xl font-semibold text-primary">No Book</h3>
      )}
    </div>
  );
};

export default MyOrders;
